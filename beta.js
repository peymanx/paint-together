
function getUserData(callback){

    setTimeout(function(){
        let userdata = {
            name: "Peyman",
            email: "me@peymanmajidi.ir",
            online: true,
            salt: 1000
        }

        console.log(userdata);
        callback(userdata)
    }, 6000)
}

console.log('Do task number 1 ...');
getUserData(function(userdata){
    console.log('Do task number 2 ...');
    console.log('Do task number 3 ...');

})
console.log('Do task number 4 ...');
console.log('Do task number 5 ...');