"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐";
"๐";
require("dotenv").config();
const channelData = require("../../XษTrฯฮทโญDatabase/channelupdate");
const {
  MessageEmbed
} = require("discord.js");
module.exports = async (oldChannel, newChannel) => {
  const data = await channelData.findOne({
    ำผษศถสึีผึษจษ: newChannel.guild.id
  });
  if (!data) return;
  if (oldChannel.name !== newChannel.name) {
    newChannel.guild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Channel Updates")
        .setDescription(`**\`\`\`diff
CHANNEL NAME CHANGED
!โชขโชขโชข OLD
-${oldChannel.name}
!โชขโชขโชข NEW
+${newChannel.name}
\`\`\`**`),
      ],
    });
  } else if (oldChannel.topic !== newChannel.topic) {
    newChannel.guild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Channel Updates")
        .setDescription(`**\`\`\`diff
CHANNEL TOPIC CHANGED
!โชขโชขโชข OLD
-${oldChannel.topic}
!โชขโชขโชข NEW
+${newChannel.topic}
\`\`\`**`),
      ],
    });
  } else if (oldChannel.position !== newChannel.position) {
    newChannel.guild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Channel Updates")
        .setDescription(`**\`\`\`diff
CHANNEL POSITION CHANGED
!โชขโชขโชข OLD
-${oldChannel.position}
!โชขโชขโชข NEW
+${newChannel.position}
\`\`\`**`),
      ],
    });
  } else if (oldChannel.type !== newChannel.type) {
    newChannel.guild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Channel Updates")
        .setDescription(`**\`\`\`diff
CHANNEL TYPE CHANGED
!โชขโชขโชข OLD
-${oldChannel.type}
!โชขโชขโชข NEW
+${newChannel.type}
\`\`\`**`),
      ],
    });
  } else if (oldChannel.nsfw !== newChannel.nsfw) {
    newChannel.guild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Channel Updates")
        .setDescription(`**\`\`\`diff
CHANNEL NSFW CHANGED
!โชขโชขโชข OLD
-${oldChannel.nsfw}
!โชขโชขโชข NEW
+${newChannel.nsfw}
\`\`\`**`),
      ],
    });
  } else if (oldChannel.bitrate !== newChannel.bitrate) {
    newChannel.guild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Channel Updates")
        .setDescription(`**\`\`\`diff
CHANNEL BITRATE CHANGED
!โชขโชขโชข OLD
-${oldChannel.bitrate}
!โชขโชขโชข NEW
+${newChannel.bitrate}
\`\`\`**`),
      ],
    });
  } else if (oldChannel.userLimit !== newChannel.userLimit) {
    newChannel.guild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Channel Updates")
        .setDescription(`**\`\`\`diff
CHANNEL USERLIMIT CHANGED
!โชขโชขโชข OLD
-${oldChannel.userLimit}
!โชขโชขโชข NEW
+${newChannel.userLimit}
\`\`\`**`),
      ],
    });
  } else if (oldChannel.rateLimitPerUser !== newChannel.rateLimitPerUser) {
    newChannel.guild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Channel Updates")
        .setDescription(`**\`\`\`diff
CHANNEL SLOWMO CHANGED
!โชขโชขโชข OLD
-${oldChannel.rateLimitPerUser}
!โชขโชขโชข NEW
+${newChannel.rateLimitPerUser}
\`\`\`**`),
      ],
    });
  } else {
    return;
  }
};
("๐");
("๐");
("๐============================================================================================================================<โก>");
("โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!");
("๐============================================================================================================================<โก>");