# callback-buffering
![cb-buffer - A minimalist NodeJS module for callback buffering.](http://i.imgur.com/UjN9LfL.png)


# Installation
Run the following commands to download and install the application:

```sh
$  clone  callback-buffering
$ cd callback-buffering
$ npm install
```

# Documentation
## `CbBuffer()`
Creates a new instance of `CbBuffer`.

Example:

```js
var cb = new CbBuffer();
```

### Return
- **Object** The `CbBuffer` instance containing:
 - [`done` (Function)](#doneclb)
 - [`wait` (Function)](#wait)
 - [`callback` (Function)](#callback)
 - [`add` (Function)](#addfunc)
 - `buffer` (Array): An array with functions that will be
   called when the `callback` method is called.
 - `isWaiting` (Boolean): A flag that is `true` after
    calling the `wait` method.

## `done(clb)`
Calls the callback function provided as the first
parameter with cached arguments.

### Params
- **Function** `clb`: The callback function to be called.

### Return
- **Object** The `CbBuffer` instance.

## `wait()`
Sets `isWaiting` flag to `true`.

### Return
- **Object** The `CbBuffer` instance.

## `callback()`
Fires all callbacks from the buffer end empties the it.

### Return
- **Object** The `CbBuffer` instance.

## `add(func)`
Adds functions to the current buffer.

### Params
- **Function** `func`: The function that should be buffered.

### Return
- **Object** The `CbBuffer` instance.



# How to contribute

1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

# License
See the [LICENSE](./LICENSE) file.
