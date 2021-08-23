import ServerPath from "./ServerPath";

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

    return fetch(`${ServerPath.api}/register`, options);
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

    return fetch(`${ServerPath.api}/login`, options);
  },

  logout: (params) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params}`
      },
    };

    return fetch(`${ServerPath.api}/logout`, options);
  },

  getAll: (params) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    };
    
    return fetch(`${ServerPath.api}/dashboard/${params}`, options);
  },

  updateInfo: (params) => {
    const token = localStorage.getItem('token');

    function getCookie(name) {
      if(!document.cookie) {
        return null;
      }

      const xsrfCookies = document.cookie.split(';')
      .map(c => c.trim())
      .filter(c => c.startsWith(name + '='));

      if (xsrfCookies.length === 0) {
        return null;
      }

      return decodeURIComponent(xsrfCookies[0].split('=')[1]);
    };

    const csrfToken = getCookie('CSRF-TOKEN');

    const options = {
      method: 'POST',
      headers: {
        'Accept': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*', 
        'X-CSRF-TOKEN': csrfToken,
        'Authorization': `Bearer ${token}`,
      },
      body: params
    };

    return fetch(`${ServerPath.api}/students/update`, options);
  },

  getFollowings: (params) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    };
    
    return fetch(`${ServerPath.api}/students/${params}`, options);
  }
};

export default UserAuthApi;
