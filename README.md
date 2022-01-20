# Quick Reveal for Foundry VTT

Allows the GM to quickly (and even automatically, for damage) reveal the last die roll made so the players can use the chat entry to apply damage or healing or see the outcome of another kind of roll such as a save.

I strongly recommend checking out [Hide GM Rolls](https://github.com/sPOiDar/fvtt-module-hide-gm-rolls) by sPOiDar to be used in conjunction with this module. That module removes any formulas and modifiers from the players' view if that is what you need.

## Usage

Using a hotkey (R by default), the GM can reveal the last secret roll made. Pressing the hotkey multiple times can reveal multiple rolls. Set the hotkey in control configuration.

There are two additional options available in the module settings:

- Only reveal damage rolls: All secret rolls that are not damage rolls are skipped by the hotkey. This is a good option if you only want to show damage rolls using a hotkey and don't want them to show automatically/immediately.
- Automatically reveal damage rolls: This option automatically reveals all damage rolls. The hotkey is then used only for other rolls you might want to reveal, such as save results.

Both options together don't make much sense, sorry about that.

## License

This Foundry VTT module, written by Tero Parvinen, is licensed under a Creative Commons Attribution 4.0 International License.

This work is licensed under the Foundry Virtual Tabletop EULA - Limited License Agreement for module development.
