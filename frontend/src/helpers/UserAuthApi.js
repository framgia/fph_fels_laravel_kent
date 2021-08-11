const UserAuthApi = {
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

    return fetch('http://localhost:8000/api/register', options);
  },

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

    return fetch('http://localhost:8000/api/login', options);
  },

  logout: (params) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params}`
      },
    };

    return fetch('http://localhost:8000/api/logout', options);
  },

  getAll: (params) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    };
    return fetch(`http://localhost:8000/api/dashboard/${params}`, options);
  }
};

export default UserAuthApi;
