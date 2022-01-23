const moduleId = "quick-reveal";
const localizationId = "QUICK-REVEAL";

let isReady = false;

function check(msg) {
    const whisper = msg.whisper || msg.data?.whisper || msg.message?.whisper || msg.message?.data?.whisper;
    if (msg.isRoll && 
        game.user.isGM && 
        whisper.includes(game.user.id)) {
        return true;
    }
    return false;
}

function run() {
    var match = null;
    game.messages.forEach((msg) => {
        const whisper = msg.whisper || msg.data?.whisper || msg.message?.whisper || msg.message?.data?.whisper;
        if (check(msg) && (!game.settings.get(moduleId, 'only-reveal-damage') || msg.roll instanceof CONFIG.Dice.DamageRoll)) {
            match = msg;
        }
    });

    if (match) {
        match.update({whisper: []});
    }
};

Hooks.once('setup', () => {
    game.keybindings.register(moduleId, 'keybinding', {
        name: `${localizationId}.hotkey-binding`,
        editable: [
            { key: "KeyR", modifiers: []}
        ],
        onDown: (ctx) => {
            if (game.user.isGM) {
                run();
            }
        },
        restricted: true
    });

    game.settings.register(moduleId, 'only-reveal-damage', {
        name: `${localizationId}.only-reveal-damage`,
        scope: 'world',
        config: true,
        type: Boolean,
        default: false
    });
    game.settings.register(moduleId, 'auto-reveal-damage', {
        name: `${localizationId}.auto-reveal-damage`,
        scope: 'world',
        config: true,
        type: Boolean,
        default: false
    });
});

Hooks.once('ready', () => {
    isReady = true;
});

Hooks.on('renderChatMessage', (msg, html, data) => {
    if (isReady && game.settings.get(moduleId, 'auto-reveal-damage') && check(msg) && (msg.roll instanceof CONFIG.Dice.DamageRoll)) {
        msg.update({whisper: []});
    }
});

Hooks.on('updateChatMessage', (msg, data) => {
    if (data.whisper && data.whisper.length == 0) {
        ui.chat.scrollBottom();
    }
});
