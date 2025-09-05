
const flipCoin = () => {
  return new Promise<string>((resolve , reject) => {
  
  const number : number = Math.random();
  
  if (number > 0.5) {
    resolve("You Won!");
  }
  else {
    reject("You Lost!")
  }
});
};




flipCoin()
  .then((message : string) => {
      console.log(message);
    })
  
  .catch((error : string) => {
    console.log(error);
  });

