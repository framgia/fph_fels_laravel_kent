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
    }

    return fetch('http://localhost:8000/api/register', options);
  },
};

export default UserAuthApi;
