const fetchCryptoByName = (coinName: string) => {
  const promise = fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coinName}&vs_currencies=usd`
  )

    .then((response) => {
      
      if (!response.ok) {
        throw new Error("Network response was not ok!");
      }
      return response.json();
    })
    
    .then((data) => {
      const price = data[coinName]?.usd;
      
      if (price === undefined) {
        throw new Error(`Could not find the price for ${coinName}`);
      }
      console.log(`The price of ${coinName} is currently $${price}!`);
    })
    
    .catch((error) => {
      console.error("Error fetching crypto data!", error);
    });
};

fetchCryptoByName("bitcoin");
fetchCryptoByName("dogecoin");
fetchCryptoByName("gigachad");
