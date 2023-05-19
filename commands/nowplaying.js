module.exports = {
	name: 'nowplaying',
	description: 'qual musica ta tocando',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('nenhuma musica tocando no moment');
		return message.channel.send(`tocando agora: ${serverQueue.songs[0].title}`);
	},
};