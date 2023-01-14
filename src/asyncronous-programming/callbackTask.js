//Cb task1
function foo(x, cb) {
    if( x > 10) {
        console.log(`${x} > 10`)
        return cb()
    } else {
        return console.log(`${x} <= 10`)
    }
}
function createCb(str) {
    return function() {
        return console.log(str)
    }
}

foo(21, createCb('cb'))

//Cb task2
function parseJSON(jsonStr, successCb, failureCb) {
    const obj = JSON.parse(jsonStr)
    try {
        if(Object.values(obj)) {
            successCb(obj)
        }
    } catch(e) {
        failureCb(e)
    }
}
function successCb(result) {
    console.log('Success parse!');
    console.log(result)
}

function failureCb(error) {
    console.log('Failure parse!')
    console.log(error)
}

parseJSON('{"x":10}', successCb, failureCb)
