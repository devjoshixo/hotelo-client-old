const getHotels = async () => {
  const url =
    'https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?checkin_date=2023-09-26&adults_number=1&region_id=2872&checkout_date=2023-09-27&locale=en_US&sort_order=REVIEW&domain=US&star_rating_ids=3%2C4%2C5&payment_type=PAY_LATER%2CFREE_CANCELLATION&lodging_type=HOTEL%2CHOSTEL%2CAPART_HOTEL&price_max=500&amenities=WIFI%2CPARKING&children_ages=4%2C0%2C15&page_number=1&price_min=10&guest_rating_min=8&meal_plan=FREE_BREAKFAST&available_filter=SHOW_AVAILABLE_ONLY';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c1f61d4401msh0f4fe0ec8cc9e71p1f81a9jsnfc3473339f0c',
      'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const properties = await response.json();
    const result = await properties.properties;
    return result;
  } catch (error) {
    console.error(error);
  }
};

export default getHotels;
