"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐";
"๐";
require("dotenv").config();
const {
  MessageEmbed
} = require("discord.js");
const channelData = require("../../XษTrฯฮทโญDatabase/channelupdate");
module.exports = async (oldThreadMembers, newThreadMembers) => {
  const data = await channelData.findOne({
    ำผษศถสึีผึษจษ: newThread.guild.id
  });
  if (!data) return;
  if (oldThreadMembers.size < newThreadMembers.size) {
    newThread.guild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle(`${oldThreadMembers.thread.name}`)
        .addField(
          "Thread Member Count Updated",
          `${oldThreadMembers.size} => ${newThreadMembers.size}`
        ),
      ],
    });
  } else if (oldThreadMembers.size > newThreadMembers.size) {
    newThread.guild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle(`${oldThreadMembers.thread.name}`)
        .addField(
          "Thread Member Count Updated",
          `${oldThreadMembers.size} => ${newThreadMembers.size}`
        ),
      ],
    });
  }
};
("๐");
("๐");
("๐============================================================================================================================<โก>");
("โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!");
("๐============================================================================================================================<โก>");