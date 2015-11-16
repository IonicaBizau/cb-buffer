[![cb-buffer](http://i.imgur.com/UjN9LfL.png)](#)

# cb-buffer

A minimalist NodeJS module for callback buffering.

## Installation

```sh
$ npm i cb-buffer
```

## Example

```js
// Dependencies
const CallbackBuffering = require("cb-buffer");

// Create a new callback buffer
var cb = new CallbackBuffering();

// Callbacks a random unique number after 1 sec
function getUniqueRandomNumberAsync(callback) {
    if (cb.check(callback)) { return; }
    setTimeout(() => {
        debugger
        cb.done(Math.random());
    }, 1000);
}

// Request the unique number few times.
// It should be unique, and generated once
getUniqueRandomNumberAsync(console.log);
getUniqueRandomNumberAsync(console.log);
getUniqueRandomNumberAsync(console.log);
getUniqueRandomNumberAsync(console.log);
// ... after one second
// => 0.3639475910458714
// => 0.3639475910458714
// => 0.3639475910458714
// => 0.3639475910458714

// After one second (after the random number is found)
// we request it again
setTimeout(() => {
    getUniqueRandomNumberAsync(console.log);
    // => 0.3639475910458714
}, 1000);
```

## Documentation

### `CbBuffer()`
Creates a new instance of `CbBuffer`.

The instance will contain methods documented below and the following fields:

 - `buffer` (Array): An array of functions to be called.
 - `waiting` (Boolean): A flag representing the state of the buffer.
 - `is_done` (Boolean): A flag representing the done state (is done or not).
 - `args` (Array): The callback function arguments.

#### Return
- **CbBuffer** The `CbBuffer` instance.

### `check(fn)`
Use this function to append the new function and `return` if needed:

```js
if (cb.check(callback)) { return; }
```

#### Params
- **Function** `fn`: The callback function.

#### Return
- **Boolean** `true` if thw async function was called already.

### `call(fn)`
Calls the provided function with the callback arguments.

#### Params
- **Function** `fn`: The function to call.

### `done()`
Calls all the functions from the buffer.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`bible.js`](https://github.com/BibleJS/bible.js)

## License

See the [LICENSE](/LICENSE) file.

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md