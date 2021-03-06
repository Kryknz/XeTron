"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐";
"๐";
const welcomeData = require("../../XษTrฯฮทโญDatabase/welcome");
const welcomemsg = require("../../XษTrฯฮทโญDatabase/joinmsg");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const XeTronCanvas = require("canvas");
const Greeters = [
  "GroundXeno/Greet/h0.png",
  "GroundXeno/Greet/h1.png",
  "GroundXeno/Greet/h2.png",
  "GroundXeno/Greet/h3.png",
  "GroundXeno/Greet/h4.png",
  "GroundXeno/Greet/h5.png",
  "GroundXeno/Greet/h6.png",
  "GroundXeno/Greet/h7.png",
  "GroundXeno/Greet/h8.png",
  "GroundXeno/Greet/h9.png",
];
module.exports = async (member) => {
  const data = await welcomeData.findOne({
    ำผษศถสึีผึษจษ: member.guild.id,
  });
  if (data) {
    const data2 = await welcomemsg.findOne({
      ำผษศถสึีผึษจษ: member.guild.id,
    });
    if (data2) {
      var joinmessage = data2.JoinMsg;
      joinmessage = joinmessage.replace("{user.mention}", `${member}`);
      joinmessage = joinmessage.replace("{user.name}", `${member.user.tag}`);
      joinmessage = joinmessage.replace("{server}", `${member.guild.name}`);
      joinmessage = joinmessage.replace(
        "{membercount}",
        `${member.guild.memberCount}`
      );
      let embed = new MessageEmbed()
        .setDescription(joinmessage)
        .setColor("GREEN");
      let channel = data.Welcome;
      member.guild.channels.cache.get(channel).send({ embeds: [embed] });
    } else if (!data2) {
      let channel = data.Welcome;
      const XeCanvas = XeTronCanvas.createCanvas(1772, 633);
      const XeCtx = XeCanvas.getContext("2d");
      let Greeter = Greeters[Math.floor(Math.random() * Greeters.length)];
      const background = await XeTronCanvas.loadImage(Greeter);
      XeCtx.drawImage(background, 0, 0, XeCanvas.width, XeCanvas.height);
      XeCtx.strokeStyle = "#FFFFFF";
      XeCtx.strokeRect(0, 0, XeCanvas.width, XeCanvas.height);
      var Joined__User = `${member.user.username}`;
      if (Joined__User.length >= 10) {
        XeCtx.font = "bold 120px Symbola";
        XeCtx.fillStyle = "#FFFFFF";
        XeCtx.fillText(
          `๐? ${Joined__User} `,
          720,
          XeCanvas.height / 2 + 20,
          720,
          XeCanvas.width / 2 - 200,
          500,
          500
        );
      } else {
        XeCtx.font = "bold 140px Symbola";
        XeCtx.fillStyle = "#FFFFFF";
        XeCtx.fillText(
          `๐? ${Joined__User} `,
          720,
          XeCanvas.height / 2 + 20,
          720,
          XeCanvas.width / 2 - 200,
          500,
          500
        );
      }
      XeCtx.beginPath();
      XeCtx.arc(315, XeCanvas.height / 2, 200, 0, Math.PI * 2, true);
      XeCtx.closePath();
      XeCtx.clip();
      const avatar = await XeTronCanvas.loadImage(
        member.user.displayAvatarURL({ format: "png" })
      );
      XeCtx.drawImage(avatar, 90, XeCanvas.height / 2 - 200, 500, 500);
      member.guild.channels.cache.get(channel).send({
        embeds: [
          new MessageEmbed()
            .setTimestamp()
            .setTitle("Welcome")
            .setColor(process.env.XeTrons || "#FFBF00")
            .setDescription(
              `${member}, Welcome to **${member.guild.name}**! We hope you like our Server! Enjoy Your Stay here!`
            )
            .setThumbnail(`${member.user.displayAvatarURL()}`)
            .addField(
              `** Member Count **โก`,
              `ษดแดแด: #${member.guild.memberCount} `,
              true
            )
            .addField(
              `** Discriminator **๐ณ`,
              `ษชแด: #${member.user.discriminator} `,
              true
            )
            .addField(`** Server Name **๐ก`, `${member.guild.name} `, true)
            .setFooter(
              `๐ฅ๐ฐ ๐ฏ๐ฐ๐ต ๐ง๐ฐ๐ณ๐จ๐ฆ๐ต ๐ต๐ฐ ๐ณ๐ฆ๐ข๐ฅ ๐ข๐ฏ๐ฅ ๐ข๐ค๐ค๐ฆ๐ฑ๐ต ๐ต๐ฉ๐ฆ ๐ณ๐ถ๐ญ๐ฆ๐ด ๐ฐ๐ง ๐ด๐ฆ๐ณ๐ท๐ฆ๐ณ.`,
              `${member.user.displayAvatarURL()}`
            ),
        ],
        files: [
          new MessageAttachment(XeCanvas.toBuffer(), "welcome-image.png"),
        ],
      });
    }
  }
};
