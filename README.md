# 👑 Royal Nightmare

A solo or party, character-bound instance for Ragnarok Offline, set in a nightmare version of Prontera 🌑

The Nightmare Queen took the throne after the royal family fell and turned the royal banquet into a curse 🍷 Her Death Witches' dark magic turned the townspeople into monsters, and she plans to do the same to you 🧙‍♀️ Nightwing pretends to serve her while secretly helping you break the curse... and plotting to dethrone her for good 🦅 But Leticia is hiding more than a crown: deep in the fallen court sleeps the power of a demi-goddess, and she won't go down without using it ⚡

## 🧭 Getting There
Talk to **Nightwing** in Prontera (107, 190) 🚪
- 🔒 Base Level 230 or higher
- ⏳ 60 minutes per run
- 🔁 8-hour cooldown per character, starting when the reward chest is claimed

## 🌟 Features
- 👥 **Solo or party**: the party leader (or solo player) opens the run at Nightwing; party members join by talking to Nightwing too, and anyone in the run can come back after dying while it is open. Only the leader talks to the NPCs inside, everyone's kills count, and every member gets the rewards.
- 🧍 **Character-bound cooldown**: each character has their own 8-hour cooldown, stored as a character variable.
- ⏱️ **60-minute time limit**: a live overhead HUD shows the time left and your progress, with chat warnings at 10, 5 and 1 minute. When time runs out, you're teleported out.
- 🧹 **Clean map**: the map's other NPCs are hidden while a run is on, and come back when it ends.
- 🚧 **Sealed courtyard**: barricades close off the castle courtyard, so nobody wanders off into it.
- 💬 **Lore-driven dialogue**: Nightwing, the Queen and the Goddess of Nightmare have story dialogue for every stage, with portrait pop-ups 🖼️
- 🎵 **Instance music**: the Royal Nightmare theme plays the whole time you're inside, and keeps playing through stage warps.
- 🐾 **Spare monsters**: Horde 3 scatters extra monsters around the map, so a player who dies and comes back can still finish the wave.

## 📜 Stage Flow
1. 🧟 **Horde 1**: 700 of each monster spawn, and you must kill 500 of each (Grote, Pierrotzoist, Disguiser).
2. 🧙‍♀️ **Queen, round 1**: 3 Death Witch MVPs.
3. 👻 **Horde 2**: 700 of each monster spawn, and you must kill 666 of each (Gan Ceann, Demigod, Tainted Wind Spirit).
4. 🧙‍♀️ **Queen, round 2**: 5 Death Witch MVPs.
5. 🗡️ **Horde 3, wave 1 (The Kades Ambush)**: 10 Kades surround you, joined by 15 Tainted Flame Spirits. Kill all of them to move on.
6. 🦅 **Nightwing's Betrayal**: Nightwing reveals his plan to Leticia, and she slaps you across Prontera 👋
7. 🐺 **Horde 3, wave 2 (The Queen's Beasts)**: two rows of R001 Bestia and Bone Detale lead back to the fountain, standing frozen and staring at you until you close the Queen's taunt, so nothing hits you while the street loads. Kill 50 to clear Horde 3.
8. 💀 **Grand finale**: Leticia transforms into the Goddess of Nightmare and summons the final MVP (ID 21361) with 2 Death Witches. Every 15 seconds while someone is close to her, 35 monsters spawn around them: 5 of each Horde 1 and Horde 2 monster, plus 1 Death Witch, 1 R001 Bestia, 1 Bone Detale, 1 Kades and 1 Mutated Tainted Flame Spirit.
9. 🎁 **Reward chest**: claim the rewards, and you're teleported back to Prontera.

It takes about 20-30 minutes to complete, if you're well geared ⚔️

## 📦 Rewards
- 🎁 5x item 102071
- 🎁 5x item 102074
- 🎁 30x item 1000274
- 🏺 3x Demi Freyja Antiquity (102562)
- 💰 5,000,000 Zeny
- ✨ 100,000,000,000 Base EXP and 60,000,000,000 Job EXP

## 💾 Installing
In Ragnarok Offline: **Settings → Mods → Find Mods → royal-nightmare → Install**. Renewal servers only.
When a new release is out, the Mods tab shows **Update available** 🔔

You can also download `royal-nightmare-v<version>.zip` from the [Releases](../../releases) page and install it with **Install from a folder…**

## 🚀 Releases
- ✅ Every pull request runs [validate.yml](.github/workflows/validate.yml): `mod.json`, every `.yml` with rapidyaml, the CHANGELOG, the release zip's layout, and the scripts on an rAthena map-server `--run-once`.
- 🏷️ Publishing a GitHub Release tagged `v<version>` builds `royal-nightmare-v<version>.zip` ([release.yml](.github/workflows/release.yml)) and attaches it. What changed is in [CHANGELOG.md](CHANGELOG.md).

## 📜 License
The scripts, client code and documentation in this repository are licensed under the [GNU General Public License v3.0](LICENSE), the same licence as rAthena.

- 🎨 The portraits (`data/texture/`) and the Royal Nightmare theme (`BGM/`) are not covered by the GPL: ask before reusing them.
- 🏰 Ragnarok Online itself (its maps, sprites, monsters, items and names) belongs to Gravity Co., Ltd. and is not covered either.
