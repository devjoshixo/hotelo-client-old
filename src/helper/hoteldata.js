const hoteldata = (hotel) => {
  const data = {
    name: hotel.name,
    url: hotel.propertyImage.image.url,
    destnationValue: hotel.destinationInfo.distanceFromDestination.value,
    destinationUnit: hotel.destinationInfo.distanceFromDestination.unit,
    amount: hotel.price.lead.amount,
    price: hotel.price.lead.formatted,
    originalPrice: hotel.price.strikeOut
      ? hotel.price.strikeOut.formatted
      : null,
    star: hotel.star,
    id: hotel.id,
  };
  return data;
};

export default hoteldata;
