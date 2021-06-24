const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const router = express?.Router();

// Middleware
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Routes
app.post('/convertUTC', async (req, res) => {
  try {
    const { hour, timezone } = req?.body;
    const _hour = Number(hour.slice(0, hour.indexOf(':')));
    const hourUTC = _hour + timezone;
    const time = `${hourUTC}:${hour?.slice(3, hour?.length)}`;
    res.json({
      response: {
        time,
        timezone: 'utc',
      },
    });
  } catch (err) {
    console.log(err);
    res.json({ success: false, err: err.message });
  }
});

app.get('/', async (req, res) => {
  try {
    res.json({
      response: {
        connect: true,
        message: 'Solución Problema 2 ',
      },
    });
  } catch (err) {
    console.log(err);
    res.json({ success: false, err: err.message });
  }
});

dotenv.config({ path: './src/variables.env' });

app.listen(process.env.PORT ?? 5555, () => {
  console.log(`Server running on http://localhost:${process.env.PORT || 5555}`);
});
