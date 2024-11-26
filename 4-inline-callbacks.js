const  sayHello = function(name){
  console.log(`Hello, ${name}`);
}

const sayGoodBye =(name)=>{
  console.log(`Goodbye, ${name}`);
}

function apologize(){
  console.log("I am Sorry!");
}

const greeter =(loggingFunction) =>{
  const names = ["John", "Sarah", "Peter", "Laura"];
  const randomName = names[Math.floor(Math.random()*names.length)];
  //console.log(randomName);
  loggingFunction(randomName);
};


greeter(sayHello);

greeter(function (name){
  console.log(`Hello, ${name}, I'am anonymous`);
})

greeter((name) =>{
  console.log(`Hello ${name}. How is McGill University?. Welcome onboard!`);
})