// Function being passed as parameter to another function is called callback function 

function sample(value){
    console.log(value)
}

var display = function(){

}

sample(display)