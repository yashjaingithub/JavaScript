// Create a new promise
const promiseOne = new Promise(function (resolve, reject) {
    // Perform an async task (e.g., DB calls, cryptography, network)
    setTimeout(function () {
        console.log('Async task is complete'); // Log task completion
        resolve(); // Resolve the promise
    }, 1000); // 1 second delay to simulate async task
});

// Consume the promise
promiseOne.then(function () {
    console.log('Promise consumed'); // Log when promise is consumed
});



//promise 2
//new promise created the whole in one part unlike the latter one
const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('async 2 is complete');
        resolve()
    }, 1000)

})
    .then(function () {
        console.log('async 2 is resolved');
    })


//promise 3
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "chai", email: "yashjain.connect@gmail.com" })
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user);
})


//promise 4
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "Yash", password: "yash11223344" })
        } else {
            reject('ERROR : somthing went wrong')
        }

    }, 1000)
})
promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => {
        console.log("The promise is either resolved or rejected");
    })


