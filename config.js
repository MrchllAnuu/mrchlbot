const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = true //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['6281381685954'] //ganti nomer lu
global.ownername = "ππ§πππ‘π‘ππ€π¨π©" //ganti nama lu
global.developer = "πΈπππππππππ" //nama lu
global.ytname = "YT: MRCHLL" //ur yt chanel name
global.socialm = "https://www.instagram.com/hijklmarchel" //taroh sosialmedia lu kalo ga punya biarin aja
global.sgc = "https://chat.whatsapp.com/" //ganti group lu
global.location = "Surabaya" //ganti lokasi lu

//bot bomdy 
global.owner = ['6281381685954'] //ur number
global.ownernomer = "6281381685954" //ur number
global.ownertag = '6281381685954' //ur tag number
global.premium = ['6281381685954'] //ur premium number
global.botname = 'ππ§πππ‘π‘ππ€π¨π©' //ur bot name
global.ownername = "πΈπππππππππ"
global.linkz = "https://www.mrchllanuu.biz.id" //your theme url which will be displayed on whatsapp
global.dana = "6281381685954"
global.pulsa = "6281381685954"
global.websitex = "https://youtube.com/@angga_official01" //ur website to be displayed
global.websitex1 = "https://youtube.com/shorts/N6cPd_V-IME?feature=share"
global.botscript = 'https://wa.me/+6281381685954' //script link
global.themeemoji = "π¦" //ur theme emoji
global.packname = "Sticker By" //ur sticker watermark packname
global.author = "ππ§πππ‘π‘ππ€π¨π©" //ur sticker watermark author
global.wm = "πΈπππππππππ" //ur watermark

// Other
global.sessionName = 'Session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Doneβ',
    admin: 'ππ’π―πΊπ’ ππͺπ΄π’ π₯πͺ ππΆπ―π’π¬π’π― ππ­π¦π© ππ₯π?πͺπ― ππ°π₯!!',
    botAdmin: 'ππ°π΅ ππΆπ¬π’π― ππ₯π?πͺπ― π€π°π¬',
    premime: 'ππ’π―πΊπ’ ππͺπ΄π’ π₯πͺ ππΆπ―π’π¬π’π― ππ΄π¦π³ ππ³π¦π?πͺπΆπ?!',
    owner: 'ππ’π―πΊπ’ ππͺπ΄π’ π₯πͺ ππΆπ―π’π¬π’π― π°π­π¦π© ππΈπ―π¦π³!',
    group: 'ππ’π―πΊπ’ ππͺπ΄π’ ππͺ π¨πΆπ―π’π¬π’π― ππͺ ππ³π°πΆπ±',
    private: 'ππ’π―πΊπ’ ππͺπ΄π’ π₯πͺ ππΆπ―π’π¬π’π― ππͺ ππ©π’π΅ ππ³πͺπ·π’π΅π¦!',
    bot: 'ππ°π΅ ππ―π­πΊ!',
    wait: 'ππ’πͺπ΅ ππ¦π₯π’π―π¨ ππͺ ππ³π°π΄π¦π΄....',    linkm: 'Where is the link?',
    endLimit: 'ππͺπ?πͺπ΅ ππ¬π’π― ππͺ π³π¦π΄π¦π΅ 12 ππ’π³πͺ',
    nsfw: 'ππͺπ΅πΆπ³ ππ΄π§πΈ ππ¦π­πΆπ? ππͺ π’π¬π΅πͺπ§π¬π’π― ππ­π¦π© ππ₯π?πͺπ―',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thum = fs.readFileSync("./Media/theme/20221215_112428.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Media/theme/20221215_112428.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Media/theme/20221215_112428.jpg") //ur error pic
global.thumb = fs.readFileSync("./Media/theme/20221215_112428.jpg") //ur thumb pic
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//module api
module.exports = {
api:{
     removebg: ['zNKnayDFH1nugtA81fkPMzXn','5CyygkXiT5vrki2Z6ZsUCE8u','Mz4yJkagrCLotdgsr4Ms39ud','vEeWnzQws9kJoYNMYKhbT1s6','2arViktax9HUdMqy9U7wFLKT','sfZpRHNwVPAG57nZVHijYZ9v','oqVVyQ2rBDYdUrxThg4GdjhA','rGp4axHpQ56Y5tRLX7J789QC','NfPx6NgTkpVYLnKUZHCAM1P3'],//https://remove.bg/api
     unscreen: ['N6J4Bjbyh2V4eqhAPTWYtFER','fcKJkPstNXp4pjntYt3bR38E'],
     upscaling: '1255173112',
     imgsuper: ['198f69d4b2msh0021bb0690669a6p1f3a80jsn9cab1ae485cc','85731a45bbmshf7bd86f09b300c2p14e544jsncd18a8d5dba2'],//https://super-image1.p.rapidapi.com/
     speechtotext: ['897beebb3ac74ceeaa6f8d0903b2297a']
   }
   }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
