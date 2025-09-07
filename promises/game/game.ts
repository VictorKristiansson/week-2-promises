const fetchCryptoByNameGame = async (coinName: string) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coinName}&vs_currencies=usd`
    );

    if (!response.ok) throw new Error("Network response was not ok!");

    const data = await response.json();
    const price = data[coinName]?.usd;

    if (price === undefined)
      throw new Error(`Could not find the price for ${coinName}`);

    console.log(`The price of ${coinName} is currently $${price}!`);
  } catch (error) {
    console.error("Error fetching crypto data!", error);
  }
};

const flipCoin = () => {
  return new Promise((resolve, reject) => {
    console.log("Flipping the coin...🪙");

    setTimeout(() => {
      try {
        const randomNumber = Math.random();

        if (randomNumber > 0.5) {
          resolve("Heads! You Won! 🎉 Here is the crypto price:");
        } else {
          reject("Tails! You Lost! 💀 No crypto price for you!");
        }
      } catch (error) {
        reject(error);
      }
    }, 2000);
  });
};

const playGame = async () => {
  try {
    const flipCoinResult = await flipCoin();
    console.log(flipCoinResult);            
    await fetchCryptoByNameGame("bitcoin"); 
  } catch (err) {
    console.error(err);
  }
};

playGame();
