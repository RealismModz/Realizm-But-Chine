const User = require("../../schemas/userSchema.js")

module.exports = async (Discord, client, member) => {
  const user_check = await User.findOne({ userId: member });
  if (!user_check || user_check == null) {
    const user = await User.create({
      userId: member.id,
      xp: 0,
      level: 0,
      balance: 0,
      bank: 100
    });
    try {
      member.send({
        embeds: [
          new Discord.MessageEmbed()
            .setAuthor({ name: member.tag, iconURL: member.avatarURL({ dynamic: true }) })
            .setTitle(client.user.username + ' | Welcome')
            .setColor('GREEN')
            .setDescription(`Welcome to ${member.guild.name} ${member.username}`)
            .setTimestamp()
            .setFooter({ text: client.user.tag + ' | Made By Humans', iconURL: client.user.avatarURL({ dynamic: true }) })
        ]
      })
    } catch (e) { }
  } else {
    return;
  }
};

