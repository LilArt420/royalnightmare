# Changelog

## 1.4.1
- Fixed: the script that hides the map's other NPCs during a run never loaded (it called `getunits` in a form this server doesn't have, and `unitexit`, which it doesn't have at all). The map server logged a script error on every start.
- While a run is on, the other NPCs on the Nightmare Prontera map (the Sky Fortress entrance and the warp to the library) are now hidden. They come back when the run ends: cleared, timed out or abandoned.
