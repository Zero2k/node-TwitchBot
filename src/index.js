import express from 'express';
import dotenv from 'dotenv';
import irc from './irc';

dotenv.config();

const app = express();

app.listen(8080, (err) => {
  if (err) {
    console.error(err);
  }
  console.log('Server listen to port:', 8080);
});

irc.start();
