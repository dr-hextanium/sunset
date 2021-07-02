const {
    DEBUG,
    BUFFER_SIZE,
    FLUSH_SHORTCUT,
    HANDLE_SHORTCUT
} = require("../config");

module.exports = new (class Listener {
    constructor() {
        this.buffer = new Array(BUFFER_SIZE).fill({});
        this.hook = require("iohook");
        this.commands = {};

        this.hook.on("keypress", key => {
            this.buffer.shift();
            this.buffer.push(key);
            this.log(`[INFO] Key pressed. KEY CHAR: ${key.keychar}, KEY CODE: ${key.keycode}, RAW CODE: ${key.rawcode}`);
        });

        this.hook.registerShortcut(FLUSH_SHORTCUT, keys => {
            this.flush();
            this.log("[INFO] Buffer flushed.");
        });

        this.hook.registerShortcut(HANDLE_SHORTCUT, keys => {
            this.handle();
            this.log("[INFO] Command handled.");
        });

        this.load();
    }

    log(...args) {
        if (DEBUG) console.log(args);
    }

    load() {
        const glob = require("glob");
        const commands = glob.sync("./commands/**/*.js");

        commands.forEach(_command => {
            let command = require("." + _command);

            if (/\s/g.test(command.name)) {
                console.error(`[ERROR] Command name "${command.name}" may not include whitespace.`);
                process.exit(1);
            }

            this.commands[command.name] = command;
        });
    }

    start() {
        this.hook.start();
    }

    flush() {
        this.buffer = new Array(BUFFER_SIZE).fill({});
        this.buffer.pop();
    }

    handle() {
        const buffer = this.buffer.map(e => String.fromCharCode(e.keychar));
        const command = buffer.filter(e => e !== "\x00").join("");

        for (const name in this.commands) {
            if (this.commands.hasOwnProperty(name) && command.startsWith(name)) {
                this.commands[name].run(command.length, command.replace(name, "").split("|"));
            }
        }
    }
});