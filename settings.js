const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

global.APIKeys = {
	'https://zenzapis.xyz': '5e4ccb6901',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['553288416873'] //ur owner number
global.ownername = "Iury X." //ur owner name
global.ytname = "YT: N/A" //ur yt chanel name
global.socialm = "GitHub: Iury-Xavier" //ur github or insta name
global.location = "Minas Gerais, Brasil" //ur location

//bot bomdy 
global.owner = ['553288416873']
global.ownertag = '553288416873' //ur tag number
global.botname = '𝗔𝗴𝘂𝗮 𝗕𝗢𝗧' //ur bot name
global.linkz = "[...]" //your theme url which will be displayed on whatsapp
global.websitex = "[...]" //ur website to be displayed
global.botscript = 'https://github.com/Iury-Xavier/WPPBOT' //script link
global.reactmoji = "💧" //ur menu react emoji
global.themeemoji = "💧" //ur theme emoji
global.packname = "𝗔𝗴𝘂𝗮 [𝗦𝘁𝗶𝗰𝗸𝗲𝗿𝘀]" //ur sticker watermark packname
global.author = "𝗜𝘂𝗿𝘆 𝗫." //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//damtabase
global.premium = ['553288416873'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = false
global.prefa = ['#']
global.sp = '⭔'
global.mess = {
    success: 'Feito ✓',
    admin: 'Este recurso é apenas para administradores!',
    botAdmin: 'Bot deve ser administrador primeiro!',
    owner: 'Este recurso é apenas para o dono!',
    group: 'Recurso usado apenas para grupos!',
    private: 'Recursos usados apenas para bate-papo privado!',
    bot: 'Este recurso é apenas para o bot',
    wait: 'Aguarde...',
    linkm: 'Cade o link?',
    error: 'Erro!!',
    endLimit: 'Seu limite diário expirou, o limite será redefinido a cada 12 horas',
    ban: 'Você foi banido pelo dono, se quiser ser desbanido entre em contato com o dono.',
    nsfw: 'O recurso nsfw não foi ativado, entre em contato com o administrador para ativar',
    banChat: 'O bot foi banido neste grupo, por favor entre em contato com o dono para desbanir'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
