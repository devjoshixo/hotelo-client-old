const checkEmail = async (email) => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    email: email,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  const data = await fetch(
    'http://localhost:5000/api/user/checkEmail',
    requestOptions
  );

  return data;
};

export default checkEmail;
