module.exports = {
	name: 'kick',
	description: 'kick do servidor',
	execute(message) {
		const member = message.mentions.members.first();

		if (!member) {
			return message.reply('Especifique o usuário.');
		}

		if (!member.kickable) {
			return message.reply('Permissões insuficientes');
		}

		return member
			.kick()
			.then(() => message.reply(`${member.user.tag} foi kickado.`))
			.catch(error => message.reply('Erro ao kickar usuário'));
	},
};