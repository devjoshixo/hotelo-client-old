const hotelInfoData = (hotel) => {
  const images = hotel.propertyGallery.images.slice(0, 4);
  const data = {
    name: hotel.summary.name,
    tagline: hotel.summary.tagline,
    images: images,
  };
  return data;
};

export default hotelInfoData;
