const Sorter = (hotelData, sort) => {
  let hotel = hotelData;
  if (sort.byStar) {
    if (sort.byStar === 'lth') {
      console.log('high');
      hotel.sort(function (a, b) {
        return b.star - a.star;
      });
    } else if (sort.byStar === 'htl') {
      hotel.sort(function (a, b) {
        return a.star - b.star;
      });
    }
  } else if (sort.byPrice) {
    if (sort.byPrice) {
      if (sort.byPrice == 'lth') {
        hotel.sort(function (a, b) {
          return b.price - a.price;
        });
      } else if (sort.byPrice == 'htl') {
        hotel.sort(function (a, b) {
          return a.price - b.price;
        });
      }
    }
  }
  return hotel;
};

export default Sorter;
