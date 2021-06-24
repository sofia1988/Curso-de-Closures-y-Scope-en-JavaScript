// ejemplo de bloque es un if dentro de las{}
// let y const solo estan dentro de {},entonces los console hay q pasarlos dentro{}

const fruits = ()=>{
    if (true){
        var fruit1= 'apple';
        let fruit2= 'banana';
        const fruit3 = 'kiwi';
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();

// otro ejemplo
let x= 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);

// otro ejemplo

const anotherfunction=()=>{
    for(var i = 0; i<10; i++){
        setTimeout(()=>{
            console.log(i);
        },1000)
    }
};
anotherfunction();

