const express = require('express');
let axios = require('axios');
const app = express();


app.use(express.json());




app.post('/', async (req, res, next) => {
  try {
    const results = await Promise.all(
      req.body.developers.map(async (d) => {
        const response = await axios.get(`https://api.github.com/users/${d}`);
        return { name: response.data.name, bio: response.data.bio };
      })
    );

    return res.json(results);
  } catch (err) {
    next(err);
  }
});






app.listen(3000, () => {
  console.log('app live on port 3000')
});
