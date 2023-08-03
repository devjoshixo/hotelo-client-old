const hotelInfoData = (hotel) => {
  const images = hotel.propertyGallery.images.slice(0, 4);
  const data = {
    name: hotel.summary.name,
    tagline: hotel.summary.tagline,
    images: images,
    rating: hotel.summary.overview.propertyRating.rating,
  };
  return data;
};

export default hotelInfoData;
