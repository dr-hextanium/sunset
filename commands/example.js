const control = require("../utilities/utils").control;

module.exports = {
    name: "example_command",
    run: (length, args) => {
        const robot = require("robotjs");
        robot.setKeyboardDelay(0);

        control("a", robot);

        robot.typeString("Example command run with args: " + args.join(", "));
    }
};