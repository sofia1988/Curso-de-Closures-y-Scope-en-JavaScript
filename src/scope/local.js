var scope = 'i am global';
 const fuctionscope = ()=> {
     var scope = 'i am just a local';
     const func = ()=>{
         return scope
     }
     console.log(func());
 }
 fuctionscope(); 
 console.log(scope);

//  aca no reasigna a la variable y se llama ambito lexico
