module.exports = {
	name: 'addmoney',
	description: 'Gives money to a user',
	aliases:['am','gm','givemoney','givem','moneygive','mg'],
	botPermissions: [
		"SEND_MESSAGES",
		"VIEW_CHANNEL",
		"READ_MESSAGE_HISTORY"
	],
	permissions:[
		"ADMINISTRATOR"
	],
	cooldown: 1,
	async execute(client, message, args, Discord, cmd) {
		
	}
}