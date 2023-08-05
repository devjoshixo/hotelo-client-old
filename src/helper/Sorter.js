const Sorter = (hotelData, sort) => {
  let hotel = [...hotelData];
  if (sort.byStar) {
    if (sort.byStar === 'htl') {
      hotel.sort(function (a, b) {
        return b.star - a.star;
      });
    } else if (sort.byStar === 'lth') {
      hotel.sort(function (a, b) {
        return a.star - b.star;
      });
    }
  }
  if (sort.byPrice) {
    if (sort.byPrice === 'htl') {
      hotel.sort(function (a, b) {
        return parseInt(b.amount) - parseInt(a.amount);
      });
    } else if (sort.byPrice === 'lth') {
      hotel.sort(function (a, b) {
        return parseInt(a.amount) - parseInt(b.amount);
      });
    }
  }
  return hotel;
};

export default Sorter;
