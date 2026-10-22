# Changelog

## 1.5.0
The banquet fights back: new things to fight, dodge and find in every run.
- Royal Champions: 2 gold-crowned champions of each horde monster lead Hordes 1 and 2 (large, 8x the HP). Each counts for 10 kills, and Nightwing blesses the party (Blessing and Increase Agility, Lv 10, 2 minutes) when one falls.
- The Witch's Hex: every 25 seconds during the hordes and the grand finale, the ground under each fighter is marked and erupts 3 seconds later, for 30% of their HP (it can't kill). Step out of it.
- The Royal Guests: 5 nobles still human hide in the streets, 2 during Horde 1 (at 25% and 60%) and 3 during Horde 2 (20%, 50%, 80%). Nightwing points everyone to each one with a navigation link; any member can lead them out within 3 minutes. Each one saved blesses the party and adds 6 of item 1000274 to everyone's hoard; all five, a Demi Freyja Antiquity.
- The Dream Shards: at 66% and 33% of her HP the Goddess of Nightmare becomes immune until the 4 Dream Shards around the fountain are shattered (60 hits each, one point a hit).
- Every escape gets a grade from its time and falls (S, A, B, C), shown at the chest, with a bonus for S (2 Demi Freyja Antiquities), A (1) and B (10 of item 1000274).
- The Hall of Dreamers: Nightwing in Prontera shows the fastest escape ever (and its grade) and your own best; a new record is announced to the whole server.

## 1.4.3
- Fixed: the gauntlet's monsters now turn to face the player. The script set `UMOB_DIR`, which this server doesn't have (it has `UMOB_LOOKDIR`), so it changed another monster property instead.

## 1.4.2
- Fixed: Horde 3, wave 2 only spawned one of the Queen's beasts (an R001-Bestia), so the wave could never reach 50 kills and the run got stuck at "Beasts 1/50". All 70 beasts spawn again.
- Fixed: in the grand finale, the Goddess never called her minion waves: the script never learned which monster was Demi Freyja, so it never saw anyone near her. The waves come again (only while someone in the run is within 14 cells of her, and never while 150+ monsters are out).

## 1.4.1
- Horde 3, wave 2: the Queen's beasts now spawn frozen, turned to face you, and a short introduction appears once the street has loaded. They come to life when you close it (or after 30 seconds), so nothing hits you while the map is still loading.
- Fixed: on the current Ragnarok Offline server the script stopped loading partway through (a `getunits` call in a form this server doesn't accept, and `unitexit`, which it doesn't have). Everything after it was missing: the Nightmare Queen, the Kades, the reward chest. Runs could not be finished.
- Fixed: Nightwing could be missing inside the instance. Every run now starts by putting the instance's NPCs back as they belong (Nightwing at the fountain; the Queen, the chest and the Kades hidden), whatever happened to the last run.
- While a run is on, the map's other NPCs (the Sky Fortress entrance, the warp to the library) are hidden, and they come back when the run ends: cleared, timed out or abandoned.
- The map server no longer logs `delwall` errors on start (leftovers from an old barricade version).

## 1.4.0
- Party play: the party leader opens the door at Nightwing (Prontera); members join by talking to Nightwing too, and can come back after dying while the run is open. Only the leader talks to the NPCs inside; everyone's kills count; every member on the map gets the chest's rewards and their own 8-hour cooldown.
- Grand finale: the Goddess only calls her minion waves while someone in the run is within 14 cells of her, and never while 150+ monsters are already out.
