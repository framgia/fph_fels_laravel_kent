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
  },

  register: (params) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify({
        name: params.name,
        username: params.username,
        email: params.email,
        password: params.password,
        password_confirmation: params.passwordConfirm
      })
    };

    return fetch(`${process.env.REACT_APP_API}/register`, options);
  },

  logout: (params) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params}`
      },
    };

    return fetch(`${process.env.REACT_APP_API}/logout`, options);
  },
};

export default StudentAPI;
