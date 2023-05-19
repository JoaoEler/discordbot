const Discord = module.require('discord.js');

module.exports = {
	name: 'userinfo',
		description: 'informações do usuário',
		execute(message) {
			let member = message.mentions.members.first() || message.member, user = member.user;
    		let embed = new Discord.MessageEmbed()
        		.setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
        		.setDescription(`${user}`)
				.setColor(`RANDOM`)
				.setThumbnail(user.displayAvatarURL)
        		.addField('Status:', user.presence.status, true)
				.setFooter(`ID: ${user.id}`)
        		.setTimestamp();

    		message.channel.send({ embed: embed });
    		return;
	},
};