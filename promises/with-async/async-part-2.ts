const fetchCryptoByName =  async (coinName: string) => {
  try {
    const response = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coinName}&vs_currencies=usd`
  )
    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new Error("Network response was not ok!");
    }
  }

  catch (err) {
    console.log(err);
  }
}

 

fetchCryptoByName("bitcoin");