## Sunset

Sunset is a customizable "macro" expander. Basically, it does `action` whenever you type `trigger`.

This action can be anything from turning `idk` -> `i don't know`, to automating a tedious task.

Sunset isn't meant for your average person, and requires a fair amount of programming knowledge to configure.
However, it provides lots of tools to make the job much easier.

## Installation

Make sure you have [Node.js](https://nodejs.org) and Git installed on your system.

Run the following command:
```shell
git clone https://github.com/TechnoDrive/sunset
```
or, alternatively with the GitHub CLI:
```shell
gh repo clone TechnoDrive/sunset
```

Once you have done so, install all of the packages:
```shell
npm i
```

## Usage
Once you're in the freshly installed directory, run:
```shell
node index.js
```
or:
```shell
npm run dev
```
if you're creating commands (this enables auto-reloading).

### Command Creation
Create a new `.js` file in the `commands` directory with the contents of `example.js`.

- `name` should not contain any whitespace.
- The `length` parameter in `run` is the total length of the command.


For your ease of use, these packages come pre-installed:
- [iohook:](https://wilix-team.github.io/iohook/) For listening to input events.
- [robotjs:](https://robotjs.io/) For simple automation.
- [nut-js:](https://github.com/nut-tree/nut.js) For more advanced automation.
- [clipboardy:](https://github.com/sindresorhus/clipboardy) For reading and writing to the clipboard.

There are also utility functions found in `./utilties/utils.js`.