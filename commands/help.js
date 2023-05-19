const fs = require('fs')

module.exports = {
	name: 'help',
	description: 'listinha de comandos',
	execute(message) {
		let str = '';
		const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			const command = require(`./${file}`);
			str += `comando: &${command.name} / descrição: ${command.description} \n`;
		}

		message.channel.send(str);
	},
};