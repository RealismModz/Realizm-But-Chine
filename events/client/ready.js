module.exports = async(Discord, client) => {
  console.log(`${client.user.tag} Is Online!`)
	console.log('Starting / Command Handler')
	
	const handler = require('../../handlers/slash_handler');
	await handler.init(client);

	console.log('Started / Command Handler! Starting Express')
	
	/* Api */
	const express = require("express");
	const app = express();
	require("../../api/express.js")(express, app);
}