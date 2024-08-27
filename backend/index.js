const express = require("express");
const cors = require("cors");
const axios = require('axios');
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "859319ae-6d80-4378-8388-d1e39463eb29" } }
    );

    return res.status(r.status).json(r.data);
  } catch (e) {
    console.error('Error during authentication:', e);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3001);
