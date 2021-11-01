const Discord = require("discord.js");

module.exports = {
  name: "dashboard",
  description: "View the dashboard for the required category.",
  botPerms: ["MANAGE_GUILD"],
  userPerms: ["ADMINISITRATOR"],
  run: async (client, message, args) => {
    if (!args[0]) {
      return message.reply(
        `\`\`\`fix
Please specify an option! Available Options:
Admin
Welcomer
Logging
\`\`\``
      );
    }
    if (args[0] === "admin") {
      const adminMenu = new Discord.MessageActionRow().addComponents(
        new Discord.MessageSelectMenu()
          .setCustomId("adminMenu")
          .setPlaceholder("Admin Menu")
          .setMinValues(1)
          .setMaxValues(1)
          .addOptions([
            {
              label: "Antilink",
              description: "Enable or Disable Antilink System!",
              value: "antilink",
            },
            {
              label: "AutoRole",
              description: "Enable or Disable AutoRole System!",
              value: "autorole",
            },
            {
              label: "AutoMod",
              description: "Enable or Disable AutoMod System!",
              value: "automod",
            },
            {
              label: "Prefix",
              description: "Change the bot's prefix for your server!",
              value: "prefix",
            },
          ])
      );

      return message.reply({
        content: "Admin Settings",
        components: [adminMenu],
      });
    } else if (args[0] === "welcomer") {
      const welcomerMenu = new Discord.MessageActionRow().addComponents(
        new Discord.MessageSelectMenu()
          .setCustomId("welcomerMenu")
          .setPlaceholder("Welcomer Menu")
          .setMinValues(1)
          .setMaxValues(1)
          .addOptions([
            {
              label: "Welcome Channel",
              description: "Set the welcome channel for the server!",
              value: "welcome_channel",
            },
            {
              label: "Leave Channel",
              description: "Set the leave channel for the server!",
              value: "leave_channel",
            },
            {
              label: "Welcome Message",
              description: "Set the welcome message for the server!",
              value: "welcome_message",
            },
            {
              label: "Leave Message",
              description: "Set the leave message for the server!",
              value: "leave_message",
            },
            {
              label: "Variables for Welcomer",
              description:
                "Shows all the available variables for use in custom messages",
              value: "variables",
            },
          ])
      );

      return message.reply({
        content: "Welcomer Settings",
        components: [welcomerMenu],
      });
    } else if (args[0] === "logging") {
      const loggingMenu = new Discord.MessageActionRow().addComponents(
        new Discord.MessageSelectMenu()
          .setCustomId("loggingMenu")
          .setPlaceholder("Logging Menu")
          .setMinValues(1)
          .setMaxValues(1)
          .addOptions([
            {
              label: "Channel Updates",
              description: "Set the channel for logging channel updates",
              value: "channel_logs",
            },
            {
              label: "Member Updates",
              description: "Set the channel for logging member updates",
              value: "member_updates",
            },
            {
              label: "Message Logs",
              description: "Set the channel for message logs",
              value: "message_logs",
            },
            {
              label: "Role Updates",
              description: "Set the channel for logging role updates",
              value: "role_updates",
            },
            {
              label: "Server Updates",
              description: "Set the channel for logging the server updates",
              value: "server_updates",
            },
            {
              label: "Voice State Updates",
              description: "Set the channel for logging voice state updates",
              value: "voice_state_updates",
            },
          ])
      );

      return message.reply({
        content: "Logging Settings",
        components: [loggingMenu],
      });
    } else {
      return message.reply("That option doesn't seem to exist!");
    }
  },
};
