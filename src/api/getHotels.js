const getHotels = async () => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const data = await fetch(
    'http://localhost:5000/api/hotels/getHomePage',
    requestOptions
  );
  const result = await data.json();
  return result;
};

export default getHotels;
