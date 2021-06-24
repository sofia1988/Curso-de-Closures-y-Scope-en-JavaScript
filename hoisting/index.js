// el hoisting eleva las declaraciones
// var a;
a = 2;
var a;
console.log(a);
//  otro ejemplo el famoso indefine
console.log(a);
var a =2;

// otro ejemplo
nameOfDog('cabrito');

function nameOfDog (name){
    console.log(name);
}
