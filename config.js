const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/jcqboe.jpg" || "https://files.catbox.moe/jcqboe.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "`powered by QUEEN_KYLIE-V1` 👸❤️🧸" 


global.devs = "27615045572" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "27615045572, 2347048805308";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27615045572";




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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""SUHAIL_09_14_12_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIzLFxuICAgICAgICAzNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcxLFxuICAgICAgICA3NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODksXG4gICAgICAgIDkwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUwLFxuICAgICAgICAzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDY1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA5OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYyLFxuICAgICAgICA3OSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MixcbiAgICAgICAgODksXG4gICAgICAgIDg4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAxNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMxLFxuICAgICAgICA4NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTczLFxuICAgICAgICA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkyLFxuICAgICAgICA5OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI2LFxuICAgICAgICA3MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDYxLFxuICAgICAgICA5LFxuICAgICAgICA2MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkQ0Qy90NkJkT0JpRjMwallzNk5VbXBQcnhJdVIybytKUmtuQjd6V3FCQXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi1pWTVoLWFHUkdTOE4yb284a0hvV3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDEwZDU3NTQtNzBhZi00N2E1LTk5YTAtODYxZWE3MDM2MjdkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNixcbiAgICAgIDQ0LFxuICAgICAgMTYyLFxuICAgICAgMjE4LFxuICAgICAgMTM0LFxuICAgICAgMTcwLFxuICAgICAgOTYsXG4gICAgICAxODMsXG4gICAgICAxMTgsXG4gICAgICAxMTYsXG4gICAgICAxNzAsXG4gICAgICAxOTgsXG4gICAgICAxMTgsXG4gICAgICA5MCxcbiAgICAgIDIyOSxcbiAgICAgIDQ2LFxuICAgICAgMTA4LFxuICAgICAgODcsXG4gICAgICAxMDUsXG4gICAgICAyMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgMTQsXG4gICAgICAxNDYsXG4gICAgICAxNDMsXG4gICAgICAyMDMsXG4gICAgICAxNzQsXG4gICAgICAyMzUsXG4gICAgICAzLFxuICAgICAgMTQsXG4gICAgICAxMDEsXG4gICAgICA2OSxcbiAgICAgIDg3LFxuICAgICAgMjYsXG4gICAgICAxLFxuICAgICAgMTc1LFxuICAgICAgMTc0LFxuICAgICAgMyxcbiAgICAgIDIwNCxcbiAgICAgIDQyLFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktINUpERzVNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzYxNTA0NTU3MjoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIldlaXJkbyAtIOacgOacgFwiLFxuICAgIFwibGlkXCI6IFwiNzU1ODMzNTQ2MjYxOTI6MjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGF2d29ZRkVOdjB0Ym9HR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJuRnJBa1BCWXVZRWVXb29MODlMSTBId1kvZ2ZuNlpsRFg5MUQ3eU82QVdzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklrU29waUQvcWVqMTRpOXVqdmlESm9DYjN0K0dvV2JnTHJHTHpyMDNZK0pNTlJoTk5mMkp1dXhyZjh2M1EwZ1lpQ0NuSTRyNytsREU3aTEyemg1OUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlV4L1JPKzNFZXQwM0IrSjZ3QTYvcGVzdU1FLzcyVnJIMmNRN1g1bTBFeStmakRlQyszVXQwSFlMSWxSUUNYWXExR3pjSFR4SExEVUVMaHptRXN4NmpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NjE1MDQ1NTcyOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzEzMDg0OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBwNlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUHA2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiMmY2OElsYW5NQnJTNXpraVJFemF3VDhrTzVyTzcybjVQT3M2c3ZCc3BEdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzU1ODQ3NjA2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzMwMjUxMjM5NTBcIn0iCn0=  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ QUEEN_KYLIE-V1 👸❤️🧸® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Sir Cylee ❤️🧸",
  packname: process.env.PACK_NAME || "Kylie👸❤️",
  botname : process.env.BOT_NAME  || "Cylee Tech",
  ownername:process.env.OWNER_NAME|| "Cadillac Cylee",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "k y l i e"  ).toUpperCase(),



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
