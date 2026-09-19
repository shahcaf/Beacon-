// Site Configuration
const SITE_CONFIG = {
    botName: "Beacon",
    botInviteUrl: "https://discord.com/oauth2/authorize?client_id=1500120229341171742&permissions=8&integration_type=0&scope=bot",
    discordUrl: "https://discord.gg/Mx5xEZAYMS",
    commandCount: "600+"
};

// Features based on actual Beacon modules
const FEATURES = [
    { id: 'safety', icon: '🛡️', title: 'Safety & Staff', desc: 'Enterprise-grade Moderation, AntiNuke, AntiRaid, and Honeypot systems.' },
    { id: 'community', icon: '👥', title: 'Community', desc: 'Engage members with Tickets, Suggestions, ReactionRoles, and Starboards.' },
    { id: 'growth', icon: '📈', title: 'Growth & Fun', desc: 'Boost activity with Economy, Levelling, Giveaways, and Internet Culture.' },
    { id: 'systems', icon: '⚙️', title: 'Core Systems', desc: 'Advanced EmbedTools, LoggingSystem, and Operations Plus.' },
    { id: 'customization', icon: '🎨', title: 'Bot Customisation', desc: 'Tailor Beacon exactly to your server with 39+ customization commands.' },
    { id: 'utility', icon: '⚡', title: 'Utility & System', desc: 'Over 200+ utility commands to streamline your everyday server management.' },
    { id: 'roblox', icon: '🎮', title: 'Roblox Integration', desc: 'Dedicated Roblox commands to bridge your game and community.' },
    { id: 'premium', icon: '💎', title: 'Premium Options', desc: 'Unlock the ultimate potential with 27 exclusive premium features.' }
];

// Commands (using . prefix as shown in the bot)
const COMMANDS = [
    { name: '.help <command>', desc: 'Shows detailed information about a specific command.', category: 'Quick Commands', permission: 'None', usage: '.help ban' },
    { name: '.cmds', desc: 'Displays the full list of 621 commands.', category: 'Quick Commands', permission: 'None', usage: '.cmds' },
    
    // Safety & Staff
    { name: '.ban', desc: 'Bans a member from the server.', category: 'Safety & Staff', permission: 'Ban Members', usage: '.ban @user [reason]' },
    { name: '.lockdown', desc: 'Engages AntiRaid lockdown procedures.', category: 'Safety & Staff', permission: 'Administrator', usage: '.lockdown' },
    { name: '.antinuke toggle', desc: 'Toggles the AntiNuke protection system.', category: 'Safety & Staff', permission: 'Server Owner', usage: '.antinuke toggle' },
    
    // Community
    { name: '.ticket setup', desc: 'Initializes the ticket support system.', category: 'Community', permission: 'Administrator', usage: '.ticket setup' },
    { name: '.suggest', desc: 'Submit a suggestion for the server to vote on.', category: 'Community', permission: 'None', usage: '.suggest <idea>' },
    { name: '.rr add', desc: 'Adds a ReactionRole to a message.', category: 'Community', permission: 'Manage Roles', usage: '.rr add <msgID> <emoji> <role>' },
    
    // Growth & Fun
    { name: '.economy start', desc: 'Initializes your economy bank account.', category: 'Growth & Fun', permission: 'None', usage: '.economy start' },
    { name: '.giveaway create', desc: 'Starts a new interactive giveaway.', category: 'Growth & Fun', permission: 'Manage Events', usage: '.giveaway create' },
    { name: '.rank', desc: 'Check your current level and XP.', category: 'Growth & Fun', permission: 'None', usage: '.rank' },
    
    // Systems
    { name: '.embed create', desc: 'Launch the interactive embed builder.', category: 'More Systems', permission: 'Manage Messages', usage: '.embed create' },
    { name: '.log config', desc: 'Configure the advanced logging system channels.', category: 'More Systems', permission: 'Administrator', usage: '.log config' }
];

// FAQ
const FAQ = [
    { question: 'What is Beacon?', answer: 'Beacon is a massive, all-in-one multipurpose Discord bot featuring over 621 commands across Moderation, Economy, Tickets, and more.' },
    { question: 'What is the command prefix?', answer: 'Beacon uses the `.` prefix by default (e.g., `.help`).' },
    { question: 'Does Beacon have Anti-Nuke?', answer: 'Yes, Beacon features an enterprise-grade Safety & Staff module including AntiNuke, AntiRaid, and Honeypot systems.' },
    { question: 'How do I invite Beacon?', answer: `You can invite Beacon by clicking the "Add Beacon" button anywhere on this site.` },
    { question: 'What can Beacon do?', answer: 'With 621+ commands, Beacon handles everything from robust moderation and logging to economy, levelling, tickets, and even Roblox integrations.' },
    { question: 'Where can I get help?', answer: `You can get help by joining our official Discord community server or using the \`.help <command>\` feature.` }
];
