function RatingCalculator(starRating) {
  const stars = starRating;
  const isDecimal = stars % 1;
  const starsInt = parseInt(stars);
  let starsList = [];
  for (let i = 1; i <= starsInt; i++) {
    starsList.push(
      <i className='fa-solid fa-star' style={{ color: '#ffff00' }} />
    );
    if (starsInt === i) {
      if (!!isDecimal) {
        starsList.push(
          <i
            className='fa-solid fa-star-half-stroke'
            style={{ color: '#ffff00' }}
          />
        );
      }
    }
  }
  if (stars == 4) {
    starsList.push(
      <i className='fa-regular fa-star' style={{ color: '#000000' }} />
    );
  } else {
    for (let i = starsInt + 1; i < 5; i++) {
      starsList.push(
        <i className='fa-solid fa-star' style={{ color: '#000000' }} />
      );
    }
  }
  return starsList;
}

export default RatingCalculator;
