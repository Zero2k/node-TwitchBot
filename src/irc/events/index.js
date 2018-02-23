export default {
  message: (client) => {
    client.on('chat', (channel, user, message, self) => {
      if (self) return;

      console.log(`${user['user-id']}:${message}`);
      if (message.toLowerCase().includes('lirik')) {
        // Check if message contain specifik word.
      }

      /* switch (user['message-type']) {
        case 'action':
          // Action message
          break;
        case 'chat':
          console.log(`${user.username}:${message}`);
          break;
        case 'whisper':
          // Whisper message
          break;
        default:
          break;
      } */
    });
  },
};
