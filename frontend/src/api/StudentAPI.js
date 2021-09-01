const StudentAPI = {
  login: (params) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify({
        email: params.email,
        password: params.password
      })
    };
  
    return fetch(`${process.env.REACT_APP_API}/login`, options);
  }
};

export default StudentAPI;
