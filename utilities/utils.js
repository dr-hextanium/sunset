module.exports.backspace = (count, robot) => {
    for (let i = 0; i < count; i++) {
        robot.keyTap("backspace");
    }
}

module.exports.control = (key, robot) => {
    robot.keyToggle("control", "down");
    robot.keyTap(key);
    robot.keyToggle("control", "up");
}