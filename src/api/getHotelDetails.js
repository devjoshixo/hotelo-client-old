const getHotelDetails = async () => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const data = await fetch(
    'http://localhost:5000/api/hotels/getHotelDetails',
    requestOptions
  );
  const result = await data.json();
  return result;
};

export default getHotelDetails;
