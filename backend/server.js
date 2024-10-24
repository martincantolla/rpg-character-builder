const express = require('express');
const sequelize = require('./db'); // import the sequelize instance
const Character = require('./models/Character');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('RPG Character Builder API');
});

app.post('/characters', async (req, res) => {
  try {
    const character = await Character.create(req.body);
    res.status(201).send(character);
  } catch (error) {
    res.status(400).send(error);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await sequelize.sync(); // Sync the database
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
