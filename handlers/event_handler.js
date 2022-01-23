const fs = require('fs');

module.exports = async(client, Discord) => {
  const load_dir = (dirs) => {
    const event_files = fs.readdirSync(`./events/${dirs}`).filter(f => f.endsWith(".js"));

    for (const file of event_files)
  };
};