const signupUser = async (user) => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify(user);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  const response = await fetch(
    'http://localhost:5000/api/user/signup',
    requestOptions
  );
  return response;
};

export default signupUser;
