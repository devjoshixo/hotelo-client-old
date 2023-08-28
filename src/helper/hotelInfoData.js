const hotelInfoData = (hotel, price) => {
  const images = hotel.propertyGallery.images.slice(0, 4);
  const data = {
    name: hotel.summary.name,
    tagline: hotel.summary.tagline,
    price: price.price,
    originalPrice: price.originalPrice,
    images: images,
    rating: hotel.summary.overview.propertyRating.rating,
    propertyRating: hotel.summary.overview.propertyRating.accessibility,
    checkinInstructions: hotel.summary.policies.checkinInstructions,
    Amenities: hotel.summary.amenities.topAmenities.items,
    needToKnow: hotel.summary.policies.needToKnow.body,
  };
  return data;
};

export default hotelInfoData;
