## Documentation

You can see below the API reference of this module.

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

