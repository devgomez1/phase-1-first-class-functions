function firstCallBack(message){
    console.log(`${message}`)
}

function receivesAFunction(random){
    random();
}

function returnsANamedFunction(){
    return firstCallBack;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Hello from the anonymous function!");
    };
}

const myAnonFunction = returnsAnAnonymousFunction();
myAnonFunction();