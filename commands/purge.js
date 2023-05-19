module.exports = {
	name: 'purge',
	description: 'apaga as mensagens',
	async execute(message) {
		const args = message.content.split(' ');
		let deleteCount = 0;
		try {
			deleteCount = parseInt(args[1], 10);
		}catch(err) {
			return message.reply('quantas palavras pra apagar? (max 100)')
		}

		if (!deleteCount || deleteCount < 2 || deleteCount > 100)
			return message.reply('Por favor escolher um numero entre 2 e 100');

		const fetched = await message.channel.fetchMessages({
			limit: deleteCount,
		});
		message.channel.bulkDelete(fetched)
			.catch(error => message.reply(`Erro ao deletar mensagens: ${error}`));
	},
};