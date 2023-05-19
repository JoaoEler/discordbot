module.exports = {
	name: 'skip',
	description: 'pular a musica atual',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!message.member.voice.channel) return message.channel.send('necessário estar conectado ao VC para usar este comando');
		if (!serverQueue) return message.channel.send('não há musicas na fila');
		serverQueue.connection.dispatcher.end();
	},
};