const flipCoin = () => {
  return new Promise((resolve, reject) => {
    console.log("Flipping the coin...🪙");

    setTimeout(() => {
      try {
        const randomNumber = Math.random();

        if (randomNumber > 0.5) {
          resolve("Heads! You Won! 🎉");
        } else {
          reject("Tails! You Lost! 💀");
        }
      } catch (error) {
        reject(error);
      }
    }, 2000);
  });
};

const flipCoinResult = async () => {
  try {
    const result = await flipCoin();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

flipCoinResult();
