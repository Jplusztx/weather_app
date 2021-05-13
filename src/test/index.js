const axios = require('axios');

axios({
  url: 'http://localhost:8888',
  params: {
    id: 0
  }
}).then(res => {
  console.log(res)
});