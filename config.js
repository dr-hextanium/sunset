module.exports = {
    DEBUG: false, // Logs FLUSH, HANDLE and keypress events for ease of use. Can be `true`, `false`, or `undefined`.
    BUFFER_SIZE: 64, // * This dictates the **maximum** amount of characters a command can be, including arguments.
    FLUSH_SHORTCUT: [61003, 61005], // LEFT_ARROW, RIGHT_ARROW
    HANDLE_SHORTCUT: [61000, 61008], // UP_ARROW, DOWN_ARROW
    ARG_SEPARATOR: "|",
}