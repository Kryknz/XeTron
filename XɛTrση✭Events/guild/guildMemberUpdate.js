"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐";
"๐";
require("dotenv").config();
const memberData = require("../../XษTrฯฮทโญDatabase/memberupdate");
const {
  MessageEmbed
} = require("discord.js");
module.exports = async (oldMember, newMember) => {
  const data = await memberData.findOne({
    ำผษศถสึีผึษจษ: newMember.guild.id
  });
  if (!data) return;
  if (newMember.nickname !== oldMember.nickname) {
    let oldNickname = oldMember.nickname ? oldMember.nickname : oldMember.user.username;
    let newNickname = newMember.nickname ? newMember.nickname : newMember.user.username;
    newMember.guild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [new MessageEmbed().setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL(`https://github.com/krakinz`)
        .setThumbnail(`${newMember.user.avatarURL()}`)
        .setTitle(`\`\`\`Member๐Update\`\`\``)
        .addField(`๐**\`${newNickname}\`**`, `**Changed their Nickname**`)
        .addField(`๐**\`User Tag\`**`, `${newMember.user.tag}`, true)
        .addField(`โฐ๏ธ**\`Old Nickname\`**`, `${oldNickname}`, true)
        .addField(`๐ฅณ**\`New Nickname\`**`, `${newNickname}`, true)
        .setAuthor(`โกไนฮฃTะฏแปNโโข`, `https://i.postimg.cc/bwrSWMdK/XeTron.gif`),
      ],
    });
  } else if (newMember.user.username !== oldMember.user.username) {
    let oldusername = oldMember.user.username;
    let newusername = newMember.user.username;
    newMember.guild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [new Discord.MessageEmbed().setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL(`https://github.com/krakinz`)
        .setThumbnail(`${newMember.user.avatarURL()}`)
        .setTitle(`\`\`\`Member๐Update\`\`\``)
        .addField(`๐**\`${newMember.user.tag}\`**`, `**Changed their Username**`)
        .addField(`๐**\`User Tag\`**`, `${newMember.user.tag}`, true)
        .addField(`โฐ๏ธ**\`Old Username\`**`, `${oldusername}`, true)
        .addField(`๐ฅณ**\`New Username\`**`, `${newusername}`, true)
        .setAuthor(`โกไนฮฃTะฏแปNโโข`, `https://i.postimg.cc/bwrSWMdK/XeTron.gif`),
      ],
    });
  } else if (newMember.user.avatarURL() !== oldMember.user.avatarURL()) {
    let oldavatar = oldMember.user.avatarURL();
    let newavatar = newMember.user.avatarURL();
    newMember.guild.channels.cache.get(data.ำผษศถสึีผฦษฆษจษ).send({
      embeds: [new Discord.MessageEmbed().setTimestamp()
        .setImage(`${newavatar}`)
        .setThumbnail(`${oldavatar}`)
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL(`https://github.com/krakinz`)
        .setImage(`${newMember.user.avatarURL()}`)
        .setTitle(`\`\`\`Member๐Update\`\`\``)
        .addField(`๐**\`${newMember.user.tag}\`**`, `**Changed their Avatar**`)
        .addField(`๐**\`User Tag\`**`, `${newMember.user.tag}`, true)
        .setAuthor(`โกไนฮฃTะฏแปNโโข`, `https://i.postimg.cc/bwrSWMdK/XeTron.gif`),
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