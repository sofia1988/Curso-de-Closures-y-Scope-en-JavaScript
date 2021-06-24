// solo var puede ser reasignada
var hello = 'hello';
let world = 'world';
const helloworld='hello world!'


const anotherFunction =()=>{
    console.log(hello);
    console.log(world);
    console.log(helloworld);
}
anotherFunction();

// mala practica pq puedo acceder a globalwar
 const hello = () => {
     globalvar= 'im global'
 }
 hello();
 console.log(globalvar);

 
