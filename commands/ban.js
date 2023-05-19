module.exports = {
	name: 'ban',
	description: 'banir um usuário',
	execute(message) {
		const member = message.mentions.members.first();

		if (!member) {
			return message.reply('Por favor especifique o membro a ser banido.');
		}

		if (!message.member.hasPermission("MANAGE\_MEMBERS")) {
			return message.reply('Sem permissão para banir esse usuário.');
		}

		return member
			.ban()
			.then(() => message.reply(`${member.user.tag} esta BANIDO`))
			.catch(error => message.reply('Erro ao banir o usuário :('));
	},
};