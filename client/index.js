// royal-nightmare: plays the instance theme on prt_q.
//
// Why this exists: the server's `playBGM` is sent as packet 0x0b8c (the
// variable-length ZC_PLAY_NPC_BGM newer rAthena uses for this packetver), but
// the bundled roBrowser only knows the old 0x07fe. client.log shows it:
//
//     [Network] Packet "0xb8c" not registered, skipping 24 bytes.
//
// So the server script also prints `@@event rn_bgm play` (the client API's
// server -> plugin channel; the line never shows in chat), and this plugin
// puts the track on the client's own BGM player.
//
// The BGM player is module-internal, so it is found by behaviour: it is the
// only <audio> roBrowser sets `loop = true` on (src/Audio/BGM.js). While the
// theme is active, the client's own attempts to switch that player to the
// map's default music (prt_q -> 167.mp3) are redirected to the theme, which
// also covers the map music finishing its load after our event arrived.
// Leaving the map (any warp, including stage warps on prt_q) hands the player
// back; the server sends the event again after each prt_q load.

const TRACK = '/BGM/rn_royal_nightmare.mp3';
const RESUME_WINDOW_MS = 20000;	// a stage warp keeps the song's position

export default function init(params, api) {
	if (api?.version !== 1) throw new Error('royal-nightmare needs client API 1');

	const proto = HTMLMediaElement.prototype;
	const srcDesc = Object.getOwnPropertyDescriptor(proto, 'src');
	const timeDesc = Object.getOwnPropertyDescriptor(proto, 'currentTime');
	const nativePlay = proto.play;

	let player = null;	// roBrowser's BGM <audio>
	let active = false;	// theme should be playing
	let resumeAt = 0;
	let resumeUntil = 0;

	const isBgm = el => el instanceof HTMLAudioElement && el.loop === true && !el.isConnected;
	const isTheme = el => (srcDesc.get.call(el) || '').endsWith(TRACK);

	const start = () => {
		if (!player) return;
		if (!isTheme(player)) {
			srcDesc.set.call(player, TRACK);
			if (Date.now() < resumeUntil) timeDesc.set.call(player, resumeAt);
		}
		const p = nativePlay.call(player);
		if (p) p.catch(() => {});
	};

	Object.defineProperty(proto, 'src', {
		configurable: true,
		enumerable: srcDesc.enumerable,
		get() { return srcDesc.get.call(this); },
		set(value) {
			if (isBgm(this)) {
				player = this;
				if (active) { if (!isTheme(this)) srcDesc.set.call(this, TRACK); return; }
			}
			srcDesc.set.call(this, value);
		},
	});
	Object.defineProperty(proto, 'currentTime', {
		configurable: true,
		enumerable: timeDesc.enumerable,
		get() { return timeDesc.get.call(this); },
		set(value) {
			if (active && this === player) return;	// the client rewinding for its own track
			timeDesc.set.call(this, value);
		},
	});
	proto.play = function () {
		if (isBgm(this)) player = this;
		return nativePlay.apply(this, arguments);
	};

	api.on('server:event', ({ command, text }) => {
		if (command !== 'rn_bgm') return;
		if (text === 'stop') return stop();
		active = true;
		start();
	}, { replay: false });

	const stop = () => {
		if (!active) return;
		active = false;
		if (player && isTheme(player)) {
			resumeAt = timeDesc.get.call(player);
			resumeUntil = Date.now() + RESUME_WINDOW_MS;
			// paused, so the client's next BGM.play() for the new map isn't skipped
			player.pause();
		}
	};
	api.on('map:leave', stop, { replay: false });
	api.on('exit', stop, { replay: false });

	api.cleanup(() => {
		stop();
		Object.defineProperty(proto, 'src', srcDesc);
		Object.defineProperty(proto, 'currentTime', timeDesc);
		proto.play = nativePlay;
	});
}
