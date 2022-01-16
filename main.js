const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    Browsers,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { getBuffer, info, start, success} = require('./lib/functions')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')

fakeyoi = setting.FakeNya

baterai = 'unknown'
charging = 'unknown'


//nocache
require('./rifqikhanif.js')
nocache('../rifqikhanif.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

const starts = async (rifqikhanif = new WAConnection()) => {
	rifqikhanif.logger.level = 'warn'
	console.log(color(figlet.textSync('rifqikhanif', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[SELAMAT TAHUN BARU 2022]', 'yellow'), color('\nSUPORT rifqikhanif CHANEL', 'yellow'))
	console.log(color('SC INI GRATIS YA BAYAR PAKE SUBSCRIBER', 'yellow'))
	console.log(color('SEMANGAT RECODE', 'yellow'))
	rifqikhanif.browserDescription = ["rifqikhanif Chanel", "Chrome", "3.0.0"];

	// Menunggu QR
	rifqikhanif.on('qr', () => {
		console.log(color('[', 'pink'), color('!', 'red'), color(']', 'pink'), color('SCAN KODE NYA WAKTU 20 DETIK!'))
	})

	// Menghubungkan
	fs.existsSync(`./${setting.sessionName}.json`) && rifqikhanif.loadAuthInfo(`./${setting.sessionName}.json`)
	rifqikhanif.on('connecting', () => {
		console.log(color('[ rifqikhanif Chanel ]', 'yellow'), color('PROSES NYAMBUNG...'));
	})
const spinner = { 
  "interval": 120,
  "frames": [
    "H",
    "HE",
    "HER",
    "HERM",
    "HERMA",
    "rifqikhanif",
    "rifqikhanif J",
    "rifqikhanif JE",
    "rifqikhanif JEL",
    "rifqikhanif JELE",
    "rifqikhanif JELEK",
    "rifqikhanif JELEK T",
    "rifqikhanif JELEK TA",
    "rifqikhanif JELEK TAP",
    "rifqikhanif JELEK TAPI",
    "rifqikhanif JELEK TAPI B",
    "rifqikhanif JELEK TAPI BO",
    "rifqikhanif JELEK TAPI BOO",
    "rifqikhanif JELEK TAPI BOON",
    "rifqikhanif JELEK TAPI BOONG",
    "rifqikhanif JELEK TAPI BOONG A",
    "rifqikhanif JELEK TAPI BOONG AW",
    "rifqikhanif JELEK TAPI BOONG AWK",
    "rifqikhanif JELEK TAPI BOONG AWKO",
    "rifqikhanif JELEK TAPI BOONG AWKOW",
    "rifqikhanif JELEK TAPI BOONG AWKOWK",
    "rifqikhanif JELEK TAPI BOONG AWKOWKO",
    "rifqikhanif JELEK TAPI BOONG AWKOWKO ?不",
    "rifqikhanif JELEK TAPI BOONG AWKOWKO ?不 Y",
    "rifqikhanif JELEK TAPI BOONG AWKOWKO ?不 YT",
    "rifqikhanif JELEK TAPI BOONG AWKOWKO ?不 YT H",
    "rifqikhanif JELEK TAPI BOONG AWKOWKO ?不 YT HE",
    "rifqikhanif JELEK TAPI BOONG AWKOWKO ?不 YT HER",
    "rifqikhanif JELEK TAPI BOONG AWKOWKO ?不 YT HERM",
    "rifqikhanif JELEK TAPI BOONG AWKOWKO ?不 YT HERMA",
    "rifqikhanif JELEK TAPI BOONG AWKOWKO ?不 YT rifqikhanif",
    "rifqikhanif JELEK TAPI BOONG AWKOWKO ?不 YT rifqikhanif C",
    "rifqikhanif JELEK TAPI BOONG AWKOWKO ?不 YT rifqikhanif CH",
    "rifqikhanif JELEK TAPI BOONG AWKOWKO ?不 YT rifqikhanif CHA",
    "rifqikhanif JELEK TAPI BOONG AWKOWKO ?不 YT rifqikhanif CHAN",
    "rifqikhanif JELEK TAPI BOONG AWKOWKO ?不 YT rifqikhanif CHANE",
    "rifqikhanif JELEK TAPI BOONG AWKOWKO ?不 YT rifqikhanif CHANEL",
    "rifqikhanif JELEK TAPI BOONG AWKOWKO ?不 YT rifqikhanif CHANEL Y",
    "rifqikhanif JELEK TAPI BOONG AWKOWKO ?不 YT rifqikhanif CHANEL YO"
  ]}

	//connect
	rifqikhanif.on('open', () => {
		console.log(color('[HC]', 'white'), color('BOT SUDAH SIAP DI GUNAKAN'));
	})

	// session
	await rifqikhanif.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(rifqikhanif.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	rifqikhanif.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	rifqikhanif.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
      kma = gam1;
      mhan = await rifqikhanif.prepareMessage(id, kma, MessageType.image);
       buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      }
      rifqikhanif.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
    }
	// welcome
	rifqikhanif.on('group-participants-update', async (anu) => {

const htod = "17155448800@s.whatsapp.net"

	try {

		mdata = await rifqikhanif.groupMetadata(anu.jid)
		memeg = mdata.participants.length
        num = anu.participants[0]
        let v = rifqikhanif.contacts[num] || { notify: num.replace(/@.+/, "") }
        anu_user = v.vname || v.notify || num.split("@")[0]

		console.log(anu)

		if (anu.action == 'add') {

			num = anu.participants[0]

			try {

				ppUrl = await rifqikhanif.getProfilePicture(num)

				} catch {

					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'

				}

				img = await getBuffer(ppUrl)
				
				teks = `Eh ads Member baru nih..\nHalo @${num.split('@')[0]}\nSelamat Datang di ${mdata.subject}\nJangan Lupa Intro\nNama:\nAsal:\nKelas:\nDan Jangan Lupa Patuhi Rules Grup`
				sendButImage(anu.jid, teks, `${fakeyoi}`, img,but = [{buttonId:`donasi`, 

               buttonText:{displayText: 'WELCOME'},type:1}], options = {contextInfo: {mentionedJid: [num, htod]}})

			} else if (anu.action == 'remove') {

			num = anu.participants[0]

			try {

				ppUrl = await rifqikhanif.getProfilePicture(num)

				} catch {

					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'

				}

				img = await getBuffer(ppUrl)

				teks = `Yahh, ada yang keluar:(\nSelamat tinggal @${num.split('@')[0]}\nSemoga Harimu Menyenangkan`

				sendButImage(anu.jid, teks, `${fakeyoi}`, img,but = [{buttonId: `Hello World!`, buttonText: {displayText: `BYEEE !!`}, type: 1}], options = {contextInfo: {mentionedJid: [num, htod]}})

			} else if (anu.action == 'promote') {

			num = anu.participants[0]

			try {

				ppUrl = await rifqikhanif.getProfilePicture(num)

				} catch {

					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'

				}

				img = await getBuffer(ppUrl)

				teks = `?€? PROMOTE - DETECTED ?€?\n\nNama : @${num.split("@")[0]}\nStatus : Member -> Admin\nGroup : ${mdata.subject}`

				sendButImage(anu.jid, teks, ``, img,but = [{buttonId: `Hello World!`, buttonText: {displayText: `SELAMAT KAK`}, type: 1}], options = {contextInfo: {mentionedJid: [num]}})

			} else if (anu.action == 'demote') {

			num = anu.participants[0]

			try {

				ppUrl = await rifqikhanif.getProfilePicture(num)

				} catch {

					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'

				}

				img = await getBuffer(ppUrl)

				teks = `?€? DEMOTE - DETECTED ?€?\n\nNama : @${num.split("@")[0]}\nStatus : Admin -> Member\nGroup : ${mdata.subject}`

				sendButImage(anu.jid, teks, ``, img,but = [{buttonId: `Hello World!`, buttonText: {displayText: `SABAR YA`}, type: 1}], options = {contextInfo: {mentionedJid: [num]}})

			}

		} catch (e) {

			console.log(e)

			}

		})
		
	rifqikhanif.on('chat-update', async (message) => {
		require('./rifqikhanif.js')(rifqikhanif, message)
	})
}

starts()