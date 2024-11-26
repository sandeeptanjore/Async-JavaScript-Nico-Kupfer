function sayHello(name){
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
  console.log(randomName);
  loggingFunction(randomName);
};


// sayHello("Udemy");
// sayGoodBye("Udemy");
// apologize("Udemy");
// greeter();
greeter(sayHello);

greeter(sayGoodBye);

setTimeout(apologize,1999);