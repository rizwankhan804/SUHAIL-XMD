const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  |SUHAIL_19_29_10_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDk4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEzLFxuICAgICAgICA3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MCxcbiAgICAgICAgNDksXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDczLFxuICAgICAgICAxMTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk2LFxuICAgICAgICAzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NixcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk2LFxuICAgICAgICA0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDE4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDkyLFxuICAgICAgICA1NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc5LFxuICAgICAgICAxODUsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwLFxuICAgICAgICAwLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDk4LFxuICAgICAgICAwLFxuICAgICAgICA5MixcbiAgICAgICAgMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgODYsXG4gICAgICAgIDM1LFxuICAgICAgICA0NixcbiAgICAgICAgMTkyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDkzLFxuICAgICAgICA1NixcbiAgICAgICAgMzcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI5LFxuICAgICAgICA2MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDU2LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyLFxuICAgICAgICAyMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDc2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwLFxuICAgICAgICAxODksXG4gICAgICAgIDczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicVBhcGtmMzZIby9WOENjMHFOd24yb2l2YWV0dktuQy91V1Q4RnBxM2ovYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMjk4NjMwMDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZGM0M0OUYxMzU0NjE1OTQxOEUwNTBENTYyNDQxMDJGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTk3MDk2NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAyOTg2MzAwMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkVBQzhCRENBRkZENEZDNDU3RTFGNjA3NDcxRjcxMjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5OTcwOTY2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDI5ODYzMDAwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2RkQ1NkY5NURDMUM4REU3QTNEQjQ2QjBGNkI5MzI4OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjk5NzA5NjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMjk4NjMwMDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJBMzZFN0Q4ODhDNjAwMDlCRTlGQkMyQzAzREYzN0Y3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTk3MDk2OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfay1NamV3TlNXYXZnSjRSeE1LdnRnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA1NmIzMzJhLTJkZGYtNDJlNC1iNzU2LTc1MjZiMjM3OWJmOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzUsXG4gICAgICAyNTIsXG4gICAgICAxMixcbiAgICAgIDYsXG4gICAgICAyMjIsXG4gICAgICAxODEsXG4gICAgICA4MyxcbiAgICAgIDEzLFxuICAgICAgMTE4LFxuICAgICAgMjE2LFxuICAgICAgOTEsXG4gICAgICAxNTgsXG4gICAgICA0NyxcbiAgICAgIDIxNixcbiAgICAgIDE3MixcbiAgICAgIDk0LFxuICAgICAgMzYsXG4gICAgICAyMDQsXG4gICAgICAyMzgsXG4gICAgICAyMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkxLFxuICAgICAgMzQsXG4gICAgICAxODUsXG4gICAgICAyOCxcbiAgICAgIDQzLFxuICAgICAgMzgsXG4gICAgICA1NyxcbiAgICAgIDIyMixcbiAgICAgIDE0NCxcbiAgICAgIDIyNixcbiAgICAgIDE0NCxcbiAgICAgIDM2LFxuICAgICAgMTg3LFxuICAgICAgMjE4LFxuICAgICAgNjksXG4gICAgICAxNDgsXG4gICAgICA1NyxcbiAgICAgIDExOSxcbiAgICAgIDE4MCxcbiAgICAgIDIyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCUDdETFJMUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDI5ODYzMDAwOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2MDI5NzA0NjY2NzQyNDo4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlRlYW0gV29ya2luZ/CfkajigI3wn5K7XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSy9zMFBZREVKR0c5YmdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDUStmK3hVeTVQWFlhTjJQR3NwMVYrZXlBemVvU0lVdlM5TEwzck5nUEhVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkhtMlVybDhLT1JVVUQ5NGtOWk5wdkc1Mk5GZld0OTFwM1pVMStacWxKbTQya2wvaXN1MXVjc0hLeWhBZWhFc2RjdExpSnZnYW9aUjJEbWlRRzlMR0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImU3TFRQcGlmcVIrRlh0SXFGeE1KcnNEdWI2aXducXRkZGhpUFR3eTROU1hicUtlWHg1ZnFXYU0wQ0E0NzNVLzJ5ZDFuS3ZoUnJ2bklKL2cwdUM5NUJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAyOTg2MzAwMDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5OTcwOTY1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0Z1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLRnUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1QWlldzBIc0tJajRCaE9jZUhnVHdnTzZ3aHVMb2ErcXVEWUl0a2IwditBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNTQwOTQ4OTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTk3MDk2NjQ4OFwifSIKfQ==| ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
