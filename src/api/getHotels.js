const getHotels = async () => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  // import.meta.env.VITE_REACT_APP_API_URL + '/api/hotels/getHomePage'
  const data = await fetch(
    'https://hotelo-server-production.up.railway.app/api/hotels/getHomePage',
    requestOptions
  );
  const result = await data.json();
  return result;
};

export default getHotels;
