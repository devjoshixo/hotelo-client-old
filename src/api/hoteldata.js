const hoteldata = (hotel) => {
  const data = {
    name: hotel.name,
    url: hotel.propertyImage.image.url,
    distnationValue: hotel.destinationInfo.distanceFromDestination.value,
    destinationUnit: hotel.destinationInfo.distanceFromDestination.unit,
    priceInt: hotel.price.lead.formatted,
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
