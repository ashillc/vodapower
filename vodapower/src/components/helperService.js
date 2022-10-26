export const numberFormat = (value) =>
new Intl.NumberFormat("en-IN").format(value);

export const checkIsFinalPriceReq = (item) => {
    return item &&
      item.price_range &&
      item.price_range.minimum_price &&
      item.price_range.minimum_price.discount &&
      item.price_range.minimum_price.discount.amount_off &&
      item.price_range.minimum_price.discount.amount_off !== "0"
      ? true
      : false;
  };

  export const getFinalPrice = (item) => {
    return item &&
      item.price_range &&
      item.price_range.minimum_price &&
      item.price_range.minimum_price.final_price &&
      item.price_range.minimum_price.final_price.value
      ? item.price_range.minimum_price.final_price.value
      : "0";
  };