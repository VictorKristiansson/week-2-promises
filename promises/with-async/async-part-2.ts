const fetchCryptoByName =  async (coinName: string) => {
  try {
    const response = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coinName}&vs_currencies=usd`
  )

    if (!response.ok) {
      throw new Error("Network response was not ok!");
    }

    const data = await response.json();
    const price = data[coinName]?.usd;

    if (price === undefined) {
      throw new Error(`Could not find the price for ${coinName}`);
    }

    console.log(`The price of ${coinName} is currently $${price}!`);
  }

 

  catch (err) {
    console.log(err);
  }
}

 

fetchCryptoByName("bitcoin");
fetchCryptoByName("litecoin");
fetchCryptoByName("dogecoin");