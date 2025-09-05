const fetchCryptoByName = (coinName : string) => {
 const promise = fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinName}&vs_currencies=usd`);
 console.log(promise);
};

fetchCryptoByName("bitcoin");