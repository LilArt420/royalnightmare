# Changelog

## 1.4.1
- Fixed: on the current Ragnarok Offline server the script stopped loading partway through (a `getunits` call in a form this server doesn't accept, and `unitexit`, which it doesn't have). Everything after it was missing: the Nightmare Queen, the Kades, the reward chest. Runs could not be finished.
- Fixed: Nightwing could be missing inside the instance. Every run now starts by putting the instance's NPCs back as they belong (Nightwing at the fountain; the Queen, the chest and the Kades hidden), whatever happened to the last run.
- While a run is on, the map's other NPCs (the Sky Fortress entrance, the warp to the library) are hidden, and they come back when the run ends: cleared, timed out or abandoned.
- The map server no longer logs `delwall` errors on start (leftovers from an old barricade version).

## 1.4.0
- Party play: the party leader opens the door at Nightwing (Prontera); members join by talking to Nightwing too, and can come back after dying while the run is open. Only the leader talks to the NPCs inside; everyone's kills count; every member on the map gets the chest's rewards and their own 8-hour cooldown.
- Grand finale: the Goddess only calls her minion waves while someone in the run is within 14 cells of her, and never while 150+ monsters are already out.
