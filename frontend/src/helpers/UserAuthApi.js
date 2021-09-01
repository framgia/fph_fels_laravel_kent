const UserAuthApi = {
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

  getAll: (params) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    };
    
    return fetch(`${process.env.REACT_APP_API}/dashboard/${params}`, options);
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

    return fetch(`${process.env.REACT_APP_API}/students/update`, options);
  },

  getFollowings: (params) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    };
    
    return fetch(`${process.env.REACT_APP_API}/followings/${params}`, options);
  },

  getStudents: () => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    };

    return fetch(`${process.env.REACT_APP_API}/students`, options);
  },

  getStudent: (params) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    };

    return fetch(`${process.env.REACT_APP_API}/students/${params}`, options);
  },

  follow: (params) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        student_id: params.loggedId,
        student_follow_id: params.id
      })
    };

    return fetch(`${process.env.REACT_APP_API}/followings/follow`, options);
  },

  unfollow: (params) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        student_id: params.loggedId,
        student_follow_id: params.id
      })
    };

    return fetch(`${process.env.REACT_APP_API}/followings/unfollow`, options);
  },

  getQuizzes: () => {
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    };

    return fetch(`${process.env.REACT_APP_API}/quizzes`, options);
  },

  getQuestion: (params) => {
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: params
    };

    return fetch(`${process.env.REACT_APP_API}/lesson/quiz`, options);
  },

  storeAnswer: (params) => {
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: params
    };

    return fetch(`${process.env.REACT_APP_API}/lesson/quiz/answer`, options);
  },

  getAnswers: (params) => {
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: params
    };

    return fetch(`${process.env.REACT_APP_API}/lesson/quiz/answer/all`, options);
  }
};

export default UserAuthApi;
