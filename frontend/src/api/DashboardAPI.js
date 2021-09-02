const DashboardAPI = {
  index: (params) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    };
    
    return fetch(`${process.env.REACT_APP_API}/dashboard/${params}`, options);
  },
};

export default DashboardAPI;
