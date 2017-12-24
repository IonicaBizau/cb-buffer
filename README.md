<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


[![cb-buffer](http://i.imgur.com/UjN9LfL.png)](#)

# cb-buffer

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/cb-buffer.svg)](https://www.npmjs.com/package/cb-buffer) [![Downloads](https://img.shields.io/npm/dt/cb-buffer.svg)](https://www.npmjs.com/package/cb-buffer)

> A minimalist NodeJS module for callback buffering.

## :cloud: Installation

```sh
# Using npm
npm install --save cb-buffer

# Using yarn
yarn add cb-buffer
```


## :clipboard: Example



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



## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:

 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:



## :memo: Documentation


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

### `clear()`
CLears the callback array.

### `undone()`
Resets the internal data.

### `done()`
Calls all the functions from the buffer.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`bible.js`](https://github.com/BibleJS/bible.js)—The Bible as a NPM module.
 - [`cb-bufferify`](https://github.com/IonicaBizau/cb-bufferify#readme)—Convert any async function to a cb-buffer handler.
 - [`image-parser`](https://github.com/IonicaBizau/image-parser#readme)—An image parser that works.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
