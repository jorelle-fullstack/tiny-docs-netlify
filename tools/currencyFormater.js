export default ({ amount, currency, exact }) => {
  console.log('%c ⚠ amount ', 'color:yellow;background:black;padding:5px;', amount);
  let price = amount
  if (!exact) {
    price = (amount / 100).toFixed(2)
  }
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency || "USD",
    currencyDisplay: "symbol",
  })
  return numberFormat.format(price)
}
