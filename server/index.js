require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { getNextFixtures } = require('./apiFootball');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/fixtures/next', async (req,res
