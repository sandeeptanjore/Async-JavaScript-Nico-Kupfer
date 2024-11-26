const double = (a,logger)=>{
  const doubleOfA = a*2;
  logger(a, doubleOfA);
};

double(10,(input,result) => {
  console.log(`The double of ${input} is ${result}`)
});

// double(13,console.log);

////Quiz : 

const multiply = (num1, num2, logger) =>{
  const product = num1*num2;
  logger(num1,num2, product);
};


multiply(100,100,(num1,num2, logger)=>{
  console.log(`Multiplication of ${num1} and ${num2} is: ${logger}`)
});