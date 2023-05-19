module.exports = {
	name: 'stop',
	description: 'parar a musica',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!message.member.voice.channel) return message.channel.send('necessario estar conectado ao VC');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end();
	},
};