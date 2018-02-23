import tmi from 'tmi.js';
import options from './config';
import messageHandler from './events';

const irc = {
  start: () => {
    const client = new tmi.Client(options);
    client.connect();

    messageHandler.message(client);
  },
};

export default irc;
