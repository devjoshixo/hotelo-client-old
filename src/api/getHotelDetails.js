const getHotelDetails = async (id) => {
  const url = `https://hotels-com-provider.p.rapidapi.com/v2/hotels/details?hotel_id=${id}&locale=en_US&domain=US`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c1f61d4401msh0f4fe0ec8cc9e71p1f81a9jsnfc3473339f0c',
      'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export default getHotelDetails;
