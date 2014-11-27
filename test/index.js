var CallbackBuffering = require("../lib");

var cb = new CallbackBuffering();

var buffer = [];
function callbacks() {
    for (var i = 0; i < buffer.length; ++i) {
        buffer[i].apply(this, arguments);
    }
    buffer = [];
}

function getUniqueRandom(i, callback) {
    buffer.push(callback);
    setTimeout(function() {
        callbacks(i);
    }, 10);
}

for (var i = 0; i < 10; ++i) {
    (function (i) {
        doSomethingUniqueAsync(i, function (c) {
            console.log("> Unique random is " + c);
        });
    })(i);
}
