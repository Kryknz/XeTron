"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐"
"๐"
const Discord = require("discord.js");
var {
  MessageEmbed
} = require("discord.js");
var Users = require("../../XษTrฯฮทโญDatabase/xp.js");
module.exports = {
  cooldown: 5,
  name: "leaderboard",
  description: "Show the top 10 leaderboard!",
  run: async (bot, message, args) => {
    Users.find({
        serverID: message.guild.id,
      })
      .sort([
        ["xp", "descending"]
      ])
      .exec((err, res) => {
        if (err) console.log(err);
        let embed = new MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons || "#FFBF00")
          .setURL("https://github.com/krakinz")
          .setTitle(`โกไนฮฃTะฏแปNโโขversion: ${XeTronGen}`)
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setDescription(`Hey ${member}\nThis is the Leaderboard of , Welcome to **${member.guild.name}**`)
          .setFooter(`Powered by ${bot.user.username}`, bot.user.displayAvatarURL());
        if (res.length === 0) {
          embed.setColor("red");
          embed.addField("No Data :c");
        } else if (res.length < 10) {
          embed.setColor("#351B96");
          for (i = 0; i < res.length; i++) {
            let member =
              message.guild.members.cache.get(res[i].did) || "User is gone :/";
            if (member === "User is gone :/") {
              embed.addField(`${i + 1}. ${member}`, `**Level**: ${res[i].level} || **XP**: ${res[i].xp}`);
            } else {
              embed.addField(`${i + 1}. ${member.user.username}`, `**Level**: ${res[i].level} || **XP**: ${res[i].xp}`);
            }
          }
        } else {
          embed.setColor("#351B96");
          for (i = 0; i < 10; i++) {
            let member = message.guild.members.get(res[i].did) || "User is gone :/";
            if (member === "User is gone :/") {
              embed.addField(`${i + 1}. ${member}`, `**Level**: ${res[i].level} || **XP**: ${res[i].xp}`);
            } else {
              embed.addField(`${i + 1}. ${member.user.username}`, `**Level**: ${res[i].level} || **XP**: ${res[i].xp}`, true);
            }
          }
        }
        message.channel.send({
          embeds: [embed]
        });
      });
  },
};
"๐"
"๐"
"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";