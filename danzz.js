require('./set.js')
const {
	BufferJSON,
	WA_DEFAULT_EPHEMERAL,
	generateWAMessageFromContent,
	proto,
	generateWAMessageContent,
	generateWAMessage,
	prepareWAMessageMedia,
	areJidsSameUser,
	getContentType
} = require('@adiwajshing/baileys')

const fs = require('fs')
const os = require('os')
const speed = require('performance-now')
const axios = require('axios')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const timeZone = require('moment-timezone')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const { Configuration, OpenAIApi } = require("openai")
ffmpeg.setFfmpegPath(ffmpegPath);
let setting = require('./database/key.json');
const { performance } = require('perf_hooks')
const { JSDOM } = require('jsdom')
const { spawn, exec, execSync } = require("child_process")

// lib
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { jadibot, conns } = require('./lib/jadibot')

// Time
const hariini = timeZone.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const barat = timeZone.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = timeZone.tz('Asia/Makassar').format('HH:mm:ss')
const timur = timeZone.tz('Asia/Jayapura').format('HH:mm:ss')
const youtube = ('https://youtube.com/c/DanzzCoding')
const wa = `0@s.whatsapp.net`
const owner = global.owner + '@s.whatsapp.net'
const nyoutube = ('danzz') 
var time = timeZone.tz('Asia/Jakarta')
.format('HH:mm:ss')

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
let user = JSON.parse(fs.readFileSync('./database/user.json'));

randommp3 = ['males','buatapa','anjing','apa','araara','wataisi','arigatou','mastah']
const randomaudio = randommp3[Math.floor(Math.random() * (randommp3.length))]

const cekUser = (satu, dua) => { 
let x1 = false
Object.keys(user).forEach((i) => {
if (user[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return user[x1].id }
if (satu == "name"){ return user[x1].name }
if (satu == "umur"){ return user[x1].umur }
if (satu == "gender"){ return user[x1].gender }
if (satu == "resi"){ return user[x1].resi }
if (satu == "registerOn"){ return user[x1].registerOn }
}
if (x1 == false) { return null } 
}

module.exports = danzz = async (danzz, m, store, chatUpdate) => {
	try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi.test(body) ? body.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const text = q = url = args.join(" ")
        const fatkuns = (m.quoted || m)
        const reply = m.reply
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const from = m.chat
        const isMedia = /image|video|sticker|audio/.test(m.quoted ? m.quoted.mtype : m.mtype)
        const isVideo = (m.quoted ? m.quoted.mtype : m.mtype) == 'videoMessage'
        const isImage = (m.quoted ? m.quoted.mtype : m.mtype) == 'imageMessage'
        const pushname = m.pushName || "No Name"
        const botNumber = await danzz.decodeJid(danzz.user.id)
        const isOwner = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const myNumber = m.sender == botNumber ? true : false
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
        //const isRegist = cekUser(sender)

        const color = (text, color) => {
            return !color ? chalk.green(text) : chalk.keyword(color)(text)
        }
        
        // Group
        const groupMetadata = m.isGroup ? await danzz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isOwner || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
    	const rslot = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]
    
    	// Limit
    	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            
            // Afk
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = true
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: true,
            }
            
            // Reset Limit
        	let cron = require('node-cron')
        	cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        	}, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
		
	    let setting = global.db.data.settings[botNumber]
        if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = true
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateLocation' in setting)) setting.templateLocation = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: true,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateLocation: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }

        let argsLog = (budy.length > 30) ? `${q.substring(0, 30)}...` : budy

        // Setting Open AI
        if (setting.autoAI) {
            // Push Message To Console && Auto Read
            if (argsLog && !m.isGroup) {
            // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ LOGS ]')), color(argsLog, 'turquoise'), chalk.magenta('From'), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace('@s.whatsapp.net', '')} ]`))
            } else if (argsLog && m.isGroup) {
            // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ LOGS ]')), color(argsLog, 'turquoise'), chalk.magenta('From'), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace('@s.whatsapp.net', '')} ]`), chalk.blueBright('IN'), chalk.green(groupName))
            }
        } else if (!setting.autoAI) {
            if (isCmd && !m.isGroup) {
                console.log(chalk.black(chalk.bgWhite('[ LOGS ]')), color(argsLog, 'turquoise'), chalk.magenta('From'), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace('@s.whatsapp.net', '')} ]`))
                } else if (isCmd && m.isGroup) {
                console.log(chalk.black(chalk.bgWhite('[ LOGS ]')), color(argsLog, 'turquoise'), chalk.magenta('From'), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace('@s.whatsapp.net', '')} ]`), chalk.blueBright('IN'), chalk.green(groupName))
                }
        }

        if (setting.autoAI) {
            if (budy) {
                try {
                if (setting.keyopenai === 'ISI_APIKEY_OPENAI_DISINI') return reply('Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file key.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys')
                const configuration = new Configuration({
                  apiKey: setting.keyopenai, 
                });
                const openai = new OpenAIApi(configuration);
                
                const response = await openai.createCompletion({
                  model: "text-davinci-003",
                  prompt: budy,
                  temperature: 0.3,
                  max_tokens: 3000,
                  top_p: 1.0,
                  frequency_penalty: 0.0,
                  presence_penalty: 0.0,
                });
                m.reply(`${response.data.choices[0].text}\n\n`)
                } catch(err) {
                    console.log(err)
                    m.reply('Maaf, sepertinya ada yang error')
                }
            }
        }
        
        // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin`)
        let gclink = (`https://chat.whatsapp.com/`+await danzz.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ngapain Lu Ngirim Link Group Ini?`)
        if (isAdmins) return m.reply(`Admin Mah Bebas Yakan?`)
        if (isOwner) return m.reply(`Owner Bot Mah Bebas Yakan?`)
        m.reply(`[ *ANTI LINK* ]\n\nKamu Terdeteksi Mengirim Link Grup, Kamu Akan Di Kick!!!`)
        danzz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
        // Sayying time
        const hours = timeZone().tz('Asia/Jakarta').format('HH:mm:ss')
        if(hours < "23:59:00"){
        var sayyingTime = 'Selamat Malam 🌃'
}
        if(hours < "19:00:00"){
        var sayyingTime = 'Selamat Petang 🌆'
}
        if(hours < "18:00:00"){
        var sayyingTime = 'Selamat Sore 🌅'
}
        if(hours < "15:00:00"){
        var sayyingTime = 'Selamat Siang 🏙'
}
        if(hours < "10:00:00"){
        var sayyingTime = 'Selamat Pagi 🌄'
}
        if(hours < "05:00:00"){
        var sayyingTime = 'Selamat Subuh 🌉'
}
        if(hours < "03:00:00"){
        var sayyingTime = 'Selamat Tengah Malam 🌌'
}
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await danzz.setStatus(`${global.namabot} | Runtime : ${runtime(process.uptime())}`)
		setting.status = new Date() * 1
	    }
	}
	
	// Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: danzz.user.id,
            quoted: ftroli.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, danzz.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        danzz.ev.emit('messages.upsert', msg)
        }
        
        // Public & Self
        if (!danzz.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            danzz.readMessages([m.key])
            console.log(chalk.black(chalk.bgGreen('[ Chat ]')), chalk.black(chalk.blueBright(new Date)), chalk.black(chalk.greenBright(budy || m.mtype)) + '\n' + chalk.magentaBright('- from'), chalk.blueBright(pushname), chalk.greenBright(m.sender) + '\n' + chalk.blueBright('- in'), chalk.cyanBright(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
        
        // Hit
        global.hit = {}
		if (isCmd) {
		data = await fetchJson('https://api.countapi.xyz/hit/danzz-api.herokuapp.com/visitor')
		totalcmd = `${data.value}`
		dataa = await fetchJson(`https://api.countapi.xyz/hit/danzz${timeZone.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
		hittoday = `${dataa.value}`
	}
        
        if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            danzz.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await danzz.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, danzz.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await danzz.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, danzz.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await danzz.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, danzz.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await danzz.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, danzz.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await danzz.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, danzz.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await danzz.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, danzz.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await danzz.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, danzz.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await danzz.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await danzz.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    danzz.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    danzz.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) danzz.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) danzz.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) danzz.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    danzz.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) danzz.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) danzz.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    danzz.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            danzz.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
        }
        
        const reSize = async(buffer, ukur1, ukur2) => {
             return new Promise(async(resolve, reject) => {
             let jimp = require('jimp')
             var baper = await jimp.read(buffer);
             var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
             resolve(ab)
             })
             }
             
        const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 99999,status: 200, thumbnail: await reSize(thumb, 100, 100), surface: 200, message: `Danzz Coding`, orderTitle: 'Danzz Coding', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `Danzz Coding`,jpegThumbnail: await reSize(thumb, 100, 100)}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const ftextt = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})}, message: { "extendedTextMessage": {"text":`Danzz Coding`, "title": `${namabot}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
        const ftoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": await reSize(thumb, 100, 100)},"title": `Danzz Coding`, "description": `${namabot}`, "currencyCode": "IDR", "priceAmount1000": "1000000000000000000", "retailerId": `Danzz Coding`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}} 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`Danzz Coding`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `Danzz Coding`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": `Danzz Coding`, "caption": `Danzz Coding`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":`Danzz Coding`, "h": `Hmm`,'seconds': '359996400', 'caption': `Danzz Coding`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `Danzz Coding`,jpegThumbnail: await reSize(thumb, 100, 100)}}}
		const floc2 = {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "title": `Danzz Coding`,"h": `Hmm`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `Danzz Coding`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ytname,;;;\nFN:ytname\nitem1.TEL;waid=6289512545999:6289512545999\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await reSize(thumb, 100, 100), thumbnail: await reSize(thumb, 100, 100),sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": `Danzz Coding`,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": await reSize(thumb, 100, 100),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
		 
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
  }
  
        // End
		switch(command) {
		
		// Start Cmd
case 'daftar':
case 'registrasi':
case 'register':
case 'registered':
case 'regis':{
let mm = args.join(' ')
let m1 = mm.split("|")[0];
let m2 = mm.split("|")[1];
let m3 = mm.split("|")[2];
if (m.isGroup) {
m.reply('🇮🇩 _Bot telah mengirimkan list pendaftaran ke private chat, silahkan selesaikan agar dapat menggunakan fitur bot._\n\n🇺🇸 _The bot has sent a registration list to the private chat, please complete it so you can use the bot feature._')
if (!m2) return danzz.sendMessage(sender, { text: `🇮🇩 _Hi @${sender.split("@")[0]} silahkan pilih umur kamu dengan cara pencet dibawah ini._\n\n🇺🇸 _Hi @${sender.split("@")[0]} please select your age by pressing the button below._`, footer: `${namabot} © 2022`, buttonText: "Click Here", sections: [{title: "📆Select Your Age Here!!", rows: [{title: "🎰 Random Years", rowId: "#daftar "+pushname+"|"+pickRandom(["5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50",",51","52","53","54","55","56","57","58","59","60"])},{title: "💫60• Years", rowId: "#daftar "+pushname+"|"+"60"},{title: "💫59• Years", rowId: "#daftar "+pushname+"|"+"59"},{title: "💫58• Years", rowId: "#daftar "+pushname+"|"+"58"},{title: "💫57• Years", rowId: "#daftar "+pushname+"|"+"57"},{title: "💫56• Years", rowId: "#daftar "+pushname+"|"+"56"},{title: "💫55• Years", rowId: "#daftar "+pushname+"|"+"56"},{title: "💫54• Years", rowId: "#daftar "+pushname+"|"+"54"},{title: "💫53• Years", rowId: "#daftar "+pushname+"|"+"53"},{title: "💫52• Years", rowId: "#daftar "+pushname+"|"+"52"},{title: "💫51• Years", rowId: "#daftar "+pushname+"|"+"51"},{title: "💫50• Years", rowId: "#daftar "+pushname+"|"+"50"},{title: "💫49• Years", rowId: "#daftar "+pushname+"|"+"49"},{title: "💫48• Years", rowId: "#daftar "+pushname+"|"+"48"},{title: "💫47• Years", rowId: "#daftar "+pushname+"|"+"47"},{title: "💫46• Years", rowId: "#daftar "+pushname+"|"+"46"},{title: "💫45• Years", rowId: "#daftar "+pushname+"|"+"45"},{title: "💫44• Years", rowId: "#daftar "+pushname+"|"+"44"},{title: "💫43• Years", rowId: "#daftar "+pushname+"|"+"43"},{title: "💫42• Years", rowId: "#daftar "+pushname+"|"+"42"},{title: "💫41• Years", rowId: "#daftar "+pushname+"|"+"41"},{title: "💫40• Years", rowId: "#daftar "+pushname+"|"+"40"},{title: "💫39• Years", rowId: "#daftar "+pushname+"|"+"39"},{title: "💫38• Years", rowId: "#daftar "+pushname+"|"+"38"},{title: "💫37• Years", rowId: "#daftar "+pushname+"|"+"37"},{title: "💫36• Years", rowId: "#daftar "+pushname+"|"+"36"},{title: "💫35• Years", rowId: "#daftar "+pushname+"|"+"35"},{title: "💫34• Years", rowId: "#daftar "+pushname+"|"+"34"},{title: "💫33• Years", rowId: "#daftar "+pushname+"|"+"33"},{title: "💫32• Years", rowId: "#daftar "+pushname+"|"+"32"},{title: "💫31• Years", rowId: "#daftar "+pushname+"|"+"31"},{title: "💫30• Years", rowId: "#daftar "+pushname+"|"+"30"},{title: "💫29• Years", rowId: "#daftar "+pushname+"|"+"39"},{title: "💫28• Years", rowId: "#daftar "+pushname+"|"+"28"},{title: "💫27• Years", rowId: "#daftar "+pushname+"|"+"27"},{title: "💫26• Years", rowId: "#daftar "+pushname+"|"+"26"},{title: "💫25• Years", rowId: "#daftar "+pushname+"|"+"25"},{title: "💫24• Years", rowId: "#daftar "+pushname+"|"+"24"},{title: "💫23• Years", rowId: "#daftar "+pushname+"|"+"23"},{title: "💫22• Years", rowId: "#daftar "+pushname+"|"+"22"},{title: "💫21• Years", rowId: "#daftar "+pushname+"|"+"21"},{title: "💫20• Years", rowId: "#daftar "+pushname+"|"+"20"},{title: "💫19• Years", rowId: "#daftar "+pushname+"|"+"19"},{title: "💫18• Years", rowId: "#daftar "+pushname+"|"+"18"},{title: "💫17• Years", rowId: "#daftar "+pushname+"|"+"17"},{title: "💫16• Years", rowId: "#daftar "+pushname+"|"+"16"},{title: "💫15• Years", rowId: "#daftar "+pushname+"|"+"15"},{title: "💫14• Years", rowId: "#daftar "+pushname+"|"+"14"},{title: "💫13• Years", rowId: "#daftar "+pushname+"|"+"13"},{title: "💫12• Years", rowId: "#daftar "+pushname+"|"+"12"},{title: "💫11• Years", rowId: "#daftar "+pushname+"|"+"11"},{title: "💫10• Years", rowId: "#daftar "+pushname+"|"+"10"},{title: "💫9• Years", rowId: "#daftar "+pushname+"|"+"9"},{title: "💫8• Years", rowId: "#daftar "+pushname+"|"+"8"},{title: "💫7• Years", rowId: "#daftar "+pushname+"|"+"7"},{title: "💫6• Years", rowId: "#daftar "+pushname+"|"+"6"},{title: "💫5• Years", rowId: "#daftar "+pushname+"|"+"5"}]}], mentions: [`${sender}`]}, { quoted: ftroli })
}
if (!m1) return m.reply(`Ex : ${prefix+command} Nama|umur`)
if (m1 && !m2 && !m3) {
user.push({id: sender, name: m1})
fs.writeFileSync('./database/user.json', JSON.stringify(user))
}
if (m1 && m2 && !m3) {
user.push({id: sender, name: m1, umur: m2})
fs.writeFileSync('./database/user.json', JSON.stringify(user))
}
if (!m3) return danzz.sendMessage(sender, { text: `🇮🇩 _Hi @${sender.split("@")[0]} silahkan pilih jenis kelamin kamu dengan cara pencet dibawah ini._\n\n🇺🇸 _Hi @${sender.split("@")[0]} please select your gender by pressing the button below._`, footer: `${namabot} © 2022`, buttonText: "Click Here", sections: [{title: "♂Select Your Gender Here!!", rows: [{title: "♂ Male / Cowo", rowId: "#daftar "+pushname+"|"+cekUser("umur", sender)+"|"+pickRandom(["Laki-Laki","Cowo","Pria"])},{title: "♀ Female / Cewe", rowId: "#daftar "+pushname+"|"+cekUser("umur", sender)+"|"+pickRandom(["Perempuan","Cewe","Wanita"])}]}], mentions: [`${sender}`]}, { quoted: fkontak })
if (m1 && m2 && m3) {
user.push({id: sender, name: m1, umur: m2, gender: m3})
fs.writeFileSync('./database/user.json', JSON.stringify(user))
}
try {
        ppuser = await danzz.profilePictureUrl(num, 'image')
        } catch {
        ppuser = 'https://tinyurl.com/yx93l6da'
        }
const nomor_resi = require("crypto").randomBytes(5).toString("hex").toUpperCase()
let resiNya = `${nomor_resi}`
let registerOnNya = `${hariini}`
let teks_daftar =`*──────❲ VERIFIKASI SUKSES ❳──────*
*Nama :* ${m1}
*Umur :* ${m2} Tahun
*Gender :* ${m3}
*Resi :* ${resiNya}
*Register On :* ${registerOnNya}
*Nomor :* ${sender.split('@')[0]}
*Status :* ${isOwner? 'Owner':'User'} ${namabot}
*User Ke :* ${user.length}
*Hit Cmd :* 1

Silahkan ketik *#rules* sebelum memulai bot.`
if (m1 && m2 && m3) {
user.push({id: sender, name: m1, umur: m2, gender: m3, resi: resiNya, registerOn: registerOnNya})
fs.writeFileSync('./database/user.json', JSON.stringify(user))
danzz.sendMessage(sender, { text: `*Memuat Data* › @${sender.split('@')[0]}`, mentions: [ `${sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: m })
danzz.sendMessage(sender, { image: { url: ppuser }, caption: teks_daftar }, { quoted: m }) 
}
}
break
            case 'menu': case 'help': case 'm': {
            let me = m.sender
            let menu = `
*Hello ${pushname} 👋, ${sayyingTime}*,`
let menunya = `
*INFO USER*
Name: ${pushname}
Number: @${me.split('@')[0]}
Premium: ${isPremium ? '✅' : `❌`}
Limit: ${isPremium ? 'Unlimited' : `${db.data.users[m.sender].limit}`}

*INFO BOT*
Nama Bot: ${global.namabot}
Owner: @${owner.split('@')[0]}
Mode: ${danzz.public ? 'Public' : `Self`}
Prefix:「 MULTI-PREFIX 」
Total Hit: ${totalcmd}
Hit Today: ${hittoday}

*TIME*
Date: ${hariini}
Wib: ${barat} WIB
Wita: ${tengah} WITA
Wit: ${timur} WIT

*INFO CMD*
Ⓥ = Vip
Ⓟ = Premium
Ⓕ = Free
Ⓛ = Limit
Ⓖ = For Group
Ⓞ = For Owner

*MAIN*
${symbol2} ${prefix}runtime
${symbol2} ${prefix}statistic
${symbol2} ${prefix}ping
${symbol2} ${prefix}testspeed

*DATABASE*
${symbol2} ${prefix}listjadibot
${symbol2} ${prefix}totalhit
${symbol2} ${prefix}checklimit

*FEATURES*
*DOWNLOADER*
${symbol2} ${prefix}play [title] Ⓟ
${symbol2} ${prefix}ytplaymp3 [title] Ⓟ
${symbol2} ${prefix}ytplaymp4 [title] Ⓟ
${symbol2} ${prefix}ytmp3 [url] Ⓕ Ⓛ
${symbol2} ${prefix}ytmp4 [url] Ⓕ Ⓛ
${symbol2} ${prefix}ttvideo [url] Ⓕ Ⓛ
${symbol2} ${prefix}ttaudio [url] Ⓕ Ⓛ
${symbol2} ${prefix}mediafire [url] Ⓟ

*ASUPAN*
${symbol2} ${prefix}randomasupan Ⓟ
${symbol2} ${prefix}santuy Ⓕ Ⓛ
${symbol2} ${prefix}bocil Ⓕ Ⓛ
${symbol2} ${prefix}hijaber Ⓕ Ⓛ
${symbol2} ${prefix}ukhty Ⓕ Ⓛ

*CECAN*
${symbol2} ${prefix}randomcecan Ⓟ
${symbol2} ${prefix}hijaber Ⓕ Ⓛ
${symbol2} ${prefix}china Ⓟ
${symbol2} ${prefix}indonesia Ⓕ Ⓛ
${symbol2} ${prefix}japan Ⓕ Ⓛ
${symbol2} ${prefix}korea Ⓕ Ⓛ
${symbol2} ${prefix}thailand Ⓕ Ⓛ
${symbol2} ${prefix}vietnam Ⓟ

*COGAN*
${symbol2} ${prefix}randomcogan Ⓕ Ⓛ

*ANIME*
${symbol2} ${prefix}waifu Ⓕ Ⓛ
${symbol2} ${prefix}husbu Ⓕ Ⓛ
${symbol2} ${prefix}loli Ⓕ Ⓛ
${symbol2} ${prefix}milf Ⓕ Ⓛ
${symbol2} ${prefix}neko Ⓕ Ⓛ
${symbol2} ${prefix}shota Ⓕ Ⓛ

*SEARCH*
${symbol2} ${prefix}stickersearch [query] Ⓕ Ⓛ
${symbol2} ${prefix}gcwa [query] Ⓕ Ⓛ
${symbol2} ${prefix}pinterest [query] Ⓕ Ⓛ

*TEXT PRO*
${symbol2} ${prefix}pencil [text] Ⓕ Ⓛ
${symbol2} ${prefix}glitch [text] Ⓕ Ⓛ
${symbol2} ${prefix}glitch2 [text] Ⓕ Ⓛ
${symbol2} ${prefix}glitchtiktok [text] Ⓕ Ⓛ
${symbol2} ${prefix}berry [text] Ⓕ Ⓛ
${symbol2} ${prefix}blackpink [text] Ⓕ Ⓛ
${symbol2} ${prefix}neon [text] Ⓕ Ⓛ
${symbol2} ${prefix}logobear [text] Ⓕ Ⓛ
${symbol2} ${prefix}3dchristmas [text] Ⓕ Ⓛ
${symbol2} ${prefix}thunder [text] Ⓕ Ⓛ
${symbol2} ${prefix}3dbox [text] Ⓕ Ⓛ
${symbol2} ${prefix}video-game-classic [text] Ⓕ Ⓛ
${symbol2} ${prefix}marvel-studios [text] Ⓕ Ⓛ
${symbol2} ${prefix}ninja-logo [text] Ⓕ Ⓛ
${symbol2} ${prefix}green-horror [text] Ⓕ Ⓛ
${symbol2} ${prefix}magma [text] Ⓕ Ⓛ
${symbol2} ${prefix}3d-neon-light [text] Ⓕ Ⓛ
${symbol2} ${prefix}3d-orange-juice [text] Ⓕ Ⓛ
${symbol2} ${prefix}chocolate-cake [text] Ⓕ Ⓛ
${symbol2} ${prefix}3dcrackedstone [text] Ⓕ Ⓛ
${symbol2} ${prefix}strawberry [text] Ⓕ Ⓛ

*PHOTO OXY*
${symbol2} ${prefix}flaming [text] Ⓕ Ⓛ
${symbol2} ${prefix}shadow-sky [text] Ⓕ Ⓛ
${symbol2} ${prefix}metallic [text] Ⓕ Ⓛ
${symbol2} ${prefix}pubg [text] Ⓕ Ⓛ
${symbol2} ${prefix}naruto [text] Ⓕ Ⓛ
${symbol2} ${prefix}under-grass [text] Ⓕ Ⓛ
${symbol2} ${prefix}harry-potter [text] Ⓕ Ⓛ
${symbol2} ${prefix}flower-typography [text] Ⓕ Ⓛ
${symbol2} ${prefix}night-sky [text] Ⓕ Ⓛ

*MAKER*
${symbol2} ${prefix}ttp [text] Ⓕ Ⓛ
${symbol2} ${prefix}attp [text] Ⓕ Ⓛ

*FUN*
${symbol2} ${prefix}rate [option] Ⓕ Ⓛ
${symbol2} ${prefix}kapankah [text] Ⓕ Ⓛ
${symbol2} ${prefix}dimanakah [text] Ⓕ Ⓛ
${symbol2} ${prefix}halah [text] Ⓕ Ⓛ
${symbol2} ${prefix}hilih [text] Ⓕ Ⓛ
${symbol2} ${prefix}huluh [text] Ⓕ Ⓛ
${symbol2} ${prefix}heleh [text] Ⓕ Ⓛ
${symbol2} ${prefix}holoh [text] Ⓕ Ⓛ
${symbol2} ${prefix}siapakahaku Ⓕ Ⓛ
${symbol2} ${prefix}siapakahdia Ⓕ Ⓛ
${symbol2} ${prefix}cekmasadepan Ⓕ Ⓛ
${symbol2} ${prefix}cekpositifcovid Ⓕ Ⓛ
${symbol2} ${prefix}cekgay Ⓕ Ⓛ
${symbol2} ${prefix}ceklesby Ⓕ Ⓛ
${symbol2} ${prefix}cekganteng Ⓕ Ⓛ
${symbol2} ${prefix}cekcantik Ⓕ Ⓛ
${symbol2} ${prefix}cekkaya Ⓕ Ⓛ
${symbol2} ${prefix}cekmiskin Ⓕ Ⓛ
${symbol2} ${prefix}pantun Ⓕ Ⓛ
${symbol2} ${prefix}jadian Ⓖ Ⓕ Ⓛ
${symbol2} ${prefix}jodohku Ⓖ Ⓕ Ⓛ
${symbol2} ${prefix}tictactoe Ⓕ Ⓛ
${symbol2} ${prefix}family100 Ⓕ Ⓛ
${symbol2} ${prefix}tebak [option] Ⓕ Ⓛ
${symbol2} ${prefix}math [mode] Ⓕ Ⓛ
${symbol2} ${prefix}suitpvp [@tag] Ⓕ Ⓛ
${symbol2} ${prefix}afk [text] Ⓕ Ⓛ
${symbol2} ${prefix}slot Ⓕ Ⓛ

*GROUP*
${symbol2} ${prefix}linkgroup Ⓖ Ⓕ Ⓛ
${symbol2} ${prefix}ephemeral [option] Ⓖ Ⓕ Ⓛ
${symbol2} ${prefix}setppgc [image] Ⓖ Ⓕ Ⓛ
${symbol2} ${prefix}setname [text] Ⓖ Ⓕ Ⓛ
${symbol2} ${prefix}setdesc [text] Ⓖ Ⓕ Ⓛ
${symbol2} ${prefix}group [option] Ⓖ Ⓕ Ⓛ
${symbol2} ${prefix}editinfo [option] Ⓖ Ⓕ Ⓛ
${symbol2} ${prefix}add 628xxx Ⓖ Ⓕ Ⓛ
${symbol2} ${prefix}kick @user Ⓖ Ⓕ Ⓛ
${symbol2} ${prefix}hidetag [text] Ⓖ Ⓕ Ⓛ
${symbol2} ${prefix}tagall [text] Ⓖ Ⓕ Ⓛ
${symbol2} ${prefix}totag [reply] Ⓖ Ⓕ Ⓛ
${symbol2} ${prefix}antilink [on/off] Ⓖ Ⓕ Ⓛ
${symbol2} ${prefix}mute [on/off] Ⓖ Ⓕ Ⓛ
${symbol2} ${prefix}promote @user Ⓖ Ⓕ Ⓛ
${symbol2} ${prefix}demote @user Ⓖ Ⓕ Ⓛ
${symbol2} ${prefix}vote [text] Ⓖ Ⓕ Ⓛ
${symbol2} ${prefix}devote Ⓖ Ⓕ Ⓛ
${symbol2} ${prefix}upvote Ⓖ Ⓕ Ⓛ
${symbol2} ${prefix}cekvote Ⓖ Ⓕ Ⓛ
${symbol2} ${prefix}hapusvote Ⓖ Ⓕ Ⓛ

*CONVERT*
${symbol2} ${prefix}sticker [image] Ⓕ Ⓛ
${symbol2} ${prefix}stickergif [gif] Ⓕ Ⓛ
${symbol2} ${prefix}stickerwm [image] Ⓕ Ⓛ
${symbol2} ${prefix}ebinary [text] Ⓟ
${symbol2} ${prefix}dbinary [text] Ⓟ
${symbol2} ${prefix}emojimix [emoji1+emoji2] Ⓕ Ⓛ

*OTHER*
${symbol2} ${prefix}jadibot Ⓕ Ⓛ
${symbol2} ${prefix}anonymous Ⓕ Ⓛ
${symbol2} ${prefix}menfess [628xxx|your name|message] Ⓟ
${symbol2} ${prefix}ttsen [text] (text to spech english) Ⓕ Ⓛ
${symbol2} ${prefix}ttsid [text] (text to spech indo) Ⓕ Ⓛ
${symbol2} ${prefix}ttsjp [text] (text to spech japan) Ⓕ Ⓛ
${symbol2} ${prefix}ttskr [text] (text to spech korean) Ⓕ Ⓛ

*TOOLS*
${symbol2} ${prefix}get [url] Ⓕ Ⓛ
${symbol2} ${prefix}styletext [text] Ⓟ
${symbol2} ${prefix}ssweb [url] Ⓕ Ⓛ

*OWNER*
${symbol2} ${prefix}self Ⓞ
${symbol2} ${prefix}public Ⓞ
${symbol2} ${prefix}delete (msg) Ⓞ`
      	  let buttons = [
                    {buttonId: `rules`, buttonText: {displayText: 'Rules'}, type: 1},
                    {buttonId: `donasi`, buttonText: {displayText: 'Donasi'}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: 'Owner'}, type: 1}
                ]
                let buttonMessage = {
                    image: fs.readFileSync(`./media/img/1.jpg`),
                    caption: `${menu}`,
                    footer: `${menunya}\n\n${global.wm}`,
                    buttons: buttons,
                    headerType: 4
                }
                danzz.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
        }
        rvn = fs.readFileSync(`./media/audio/menu.m4a`)
		danzz.sendMessage(m.chat, { audio: rvn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
        break
            
            // Owner
            case 'author': case 'owner': case 'creator': {
                danzz.sendContact(m.chat, global.owner, m)
            }
            break
            
            case 'tqto': case 'thanksto': case 'contributor': {
            let tqto = `
*THANKS TO*`
let tag = `
@Adiwajshing (Baileys)
@Dika Ardnt (Base)
@Saipul Anuar (Partner)
@Yudha (Partner)
@Arull (Partner)
@Danzz Coding (Me)

*Penyedia Rest Api*
https://danzzapi.xyz (danzz)`
      	  let buttons = [
                    {buttonId: `rules`, buttonText: {displayText: 'Rules'}, type: 1},
                    {buttonId: `donasi`, buttonText: {displayText: 'Donasi'}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: 'Owner'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/6d3a9d6f88c9d5bbb0330.jpg' },
                    caption: `${tqto}`,
                    footer: `${tag}\n\n${global.wm}`,
                    buttons: buttons,
                    headerType: 4
                }
                danzz.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
        }
        break
        
	    	case 'rules': {
            let rules = `
*RULES*`
let rulesnya = `
1. Jangan Pernah Spam Bot
2. Jangan Call Nomer Bot
3. Jangan Mengeksploitasi Bot

Sanksi : *Warn/Soft Block*

*About Questions*

You : Bot Nya Slow Respon
Bot : Mohon Bersabar, Mungkin
Kendala Dari Jaringan, Signal,
Atau Bahkan Terbanned Dari
Pihak WhatsApp

You : Dapet Script Nya Dimana?
Bot : https://wa.me/6289512545999

You : Boleh Masukin Ke Grup Saia
Tidak?
Bot : Untuk Masalah Memasukkan
Bot Ke Dalam Grup Bisa
Menghubungi Owner

You: Apakah Bot Ini Masih
Menyimpan File Yang Saya Kirim?
Bot : Data WhatsApp Anda Hanya
Tersimpan Saat Bot Aktif, Dan Bot
Tidak Pernah Menyimpan File-file
Yang Anda Kirim

You : Min, Ada Fitur Yang Error
Bot : Jika Menemukan Bug/Error
Silahkan Langsung Hubungi
Owner/Creator Agar Segera Di Fix

Tetap Patuhi Rules Agar Tetap
Bisa Menikmati Bot

*Note* : Segala Ketentuan Dan
Kebijakan Yang Berlaku Di Pegang
Oleh Owner Bot, Sewaktu-Waktu
Owner Berhak Memakai Ataupun
Mengubah Kebijakan Dan
Ketentuan Yang Berlaku

*Thanks* Buat Kalian
User-User Yang Sudah Memakai Bot,
Yang Sudah Mau Mematuhi
Rules, Serta Para Constributor
Yang Sudah Membantu Dalam
Pembuatan Bot Ini
Ini`
      	  let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1},
                    {buttonId: `donasi`, buttonText: {displayText: 'Donasi'}, type: 1},
                    {buttonId: `tqto`, buttonText: {displayText: 'Thanks To'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/6d3a9d6f88c9d5bbb0330.jpg' },
                    caption: `${rules}`,
                    footer: `${rulesnya}\n\n${global.wm}`,
                    buttons: buttons,
                    headerType: 4
                }
                danzz.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
        }
        break
           
       case 'donasi': case 'donate': {
let payment = `
*Hai Kak ${pushname}, ${sayyingTime}*`
let donate = `
donate to me so that the bot can develop more.

*e-wallet*
Dana: 089512545999
Gopay: 089512545999`
let buttons = [
                    {buttonId: `rules`, buttonText: {displayText: 'Rules'}, type: 1},
                    {buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: 'Owner'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/6d3a9d6f88c9d5bbb0330.jpg' },
                    caption: `${payment}`,
                    footer: `${donate}\n\n${global.wm}`,
                    buttons: buttons,
                    headerType: 4
                }
                danzz.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
        }
        break
        
        // Main
        case 'ping': case 'statistic': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'testspeed': case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python tspeed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            
        case 'runtime': case 'tes': {
            	let lowq = `*Bot Telah Online Selama*\n*${runtime(process.uptime())}*`
                let buttons = [{ buttonId: 'donasi', buttonText: { displayText: 'Donasi' }, type: 1 }]
                await danzz.sendButtonText(m.chat, buttons, lowq, nyoutube, m, {quoted: fkontak})
            	}
            break
            
        case 'req': case 'request': {
            	if (!text) throw `Example : ${prefix + command} Fitur Min`
               let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${command} ${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'Thanks' }, type: 1 }]
            await danzz.sendButtonText(ownernya, buttons, pjtxt, nyoutube, m, {mentions: ments, quoted: fdoc})
            let akhji = `*Request Telah Terkirim*\n*Ke Owner @${ownernya.split('@')[0]}*\n_Terima Kasih🙏_`
            await danzz.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments, quoted: fkontak})
            }
            break
            
        // Database
        case 'listjadibot': 
try {
let user = [... new Set([...global.conns.filter(danzz => danzz.user).map(danzz => danzz.user)])]
te = "*List Jadibot*\n\n"
for (let i of user){
y = await danzz.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
danzz.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
m.reply(`Belum Ada User Yang Jadibot`)
}
break

        case 'ceklimit': case 'checklimit': case 'limit':{
			m.reply('*Your limit:* ' + (db.data.users[m.sender].limit))
			}
			break
		
		case 'totalhit': case 'hit': {
			m.reply(`*Total Hit: ${totalcmd}*\n*Total Hit Harian: ${jumlahharian}*`)
			}
			break
            
        // Features
        // Downloader
        case 'play': case 'ytplay': {
                if (!q) throw `Example : ${prefix + command} coding`
                let yts = require("yt-search")
                let search = await yts(q)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `${prefix}ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `${prefix}ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Duration : ${anu.timestamp}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}
Description : ${anu.description}
Url : ${anu.url}`,
                    footer: `${global.wm}`,
                    buttons: buttons,
                    headerType: 4
                }
                danzz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            
             case 'playmp3': case 'ytplaymp3': case 'ytplayaudio': {
        	 if (!isPremium) throw mess.notprem
         	if (!q) throw `Example : ${prefix + command} title`
         	m.reply(mess.wait)
             let ytplaymp3 = await fetchJson(`https://danzzapi.xyz/api/downloader/ytplaymp3?query=${q}&apikey=${apikeyprem}`)
             danzz.sendMessage(m.chat, { audio: { url: ytplaymp3.result.url }, mimetype: 'audio/mpeg', fileName: `${q}.mp3` }, { quoted: ftroli })
         	}
         break
            
             case 'playmp4': case 'ytplaymp4': case 'ytplayvideo': {
         	if (!isPremium) throw mess.notprem
         	if (!q) throw `Example : ${prefix + command} title`
         	m.reply(mess.wait)
             let ytplaymp4 = await fetchJson(`https://danzzapi.xyz/api/downloader/ytplaymp4?query=${q}&apikey=${apikeyprem}`)
             danzz.sendMessage(m.chat, { video: { url: ytplaymp4.result.url }, mimetype: 'video/mp4', fileName: `${q}.mp4`, caption: `Done` }, { quoted: m })
         	}
         break
         
         case 'youtubemp3': case 'ytaudio': case 'ytmp3': case 'yta': {
         	if (!url) throw `Example : ${prefix + command} url`
         	m.reply(mess.wait)
             let ytmp3 = await fetchJson(`https://danzzapi.xyz/api/downloader/ytmp4?url=${url}&apikey=${apikey}`)
             danzz.sendMessage(m.chat, { audio: { url: ytmp3.result.url }, mimetype: 'audio/mpeg', caption: `Done` }, { quoted: m })
         	}
         break
         
         case 'youtubemp4': case 'ytvideo': case 'ytmp4': case 'ytv': {
         	if (!url) throw `Example : ${prefix + command} url`
         	m.reply(mess.wait)
             let ytmp4 = await fetchJson(`https://danzzapi.xyz/api/downloader/ytmp4?url=${url}&apikey=${apikey}`)
             danzz.sendMessage(m.chat, { video: { url: ytmp4.result.url }, mimetype: 'video/mp4', caption: `Title: ${ytmp4.result.title}` }, { quoted: m })
         	}
         break
         
         case 'tiktokaudio': case 'ttaudio': case 'ttmp3': {
         	if (!url) throw `Example : ${prefix + command} url`
         	m.reply(mess.wait)
             let ttmp3 = await fetchJson(`https://danzzapi.xyz/api/downloader/ttmp3?url=${url}&apikey=${global.apikey}`)
             danzz.sendMessage(m.chat, { audio: { url: ttmp3.result.audio }, mimetype: 'audio/mpeg', fileName: `${url}.mp3` }, { quoted: ftroli })
         	}
         break
         
         case 'tiktok': case 'tiktoknowm': case 'tiktokvideo': case 'ttmp4': case 'ttaudio': case 'tt': {
         	if (!url) throw `Example : ${prefix + command} url`
         	m.reply(mess.wait)
             let ttmp4 = await fetchJson(`https://danzzapi.xyz/api/downloader/ttmp4?url=${url}&apikey=${global.apikey}`)
             danzz.sendMessage(m.chat, { video: { url: ttmp4.result.video }, mimetype: 'video/mp4', fileName: `${url}.mp4`, caption: `Done` }, { quoted: ftroli })
         	}
         break
         
         case 'mediafire': {
         	if (!isPremium) throw mess.premium
         	if (!url) throw `Example : ${prefix + command} url`
         	m.reply(mess.wait)
             let mediafire = await fetchJson(`https://danzzapi.xyz/api/downloader/mediafire?url=${url}&apikey=${global.apikeyprem}`)
             danzz.sendMessage(m.chat, { document: { url: mediafire.result.url }, mimetype: 'document/zip', fileName: `${mediafire.result.title}` }, { quoted: ftroli })
         	}
         break
         
         // Asupan
        case 'randomasupan': case 'asupan': {
        	if (!isPremium) throw mess.premium
            m.reply(mess.wait)
			asupan = await getBuffer(`https://danzzapi.xyz/api/asupan/random?apikey=${global.apikeyprem}`)
			danzz.sendMessage(m.chat, {video: asupan, mimetype: 'video/mp4', caption: `Done`}, {quoted:m})
			}
			break
			
		case 'randomasupan': case 'asupan': {
            m.reply(mess.wait)
			asupan = await getBuffer(`https://danzzapi.xyz/api/asupan/random?apikey=${global.apikeyprem}`)
			danzz.sendMessage(m.chat, {video: asupan, mimetype: 'video/mp4', caption: `Done`}, {quoted:m})
			}
			break
			
		case 'santuy': {
            m.reply(mess.wait)
			asupan = await getBuffer(`https://danzzapi.xyz/api/asupan/santuy?apikey=${global.apikeyprem}`)
			danzz.sendMessage(m.chat, {video: asupan, mimetype: 'video/mp4', caption: `Done`}, {quoted:m})
			}
			break
		
		case 'bocil': {
            m.reply(mess.wait)
			asupan = await getBuffer(`https://danzzapi.xyz/api/asupan/bocil?apikey=${global.apikey}`)
			danzz.sendMessage(m.chat, {video: asupan, mimetype: 'video/mp4', caption: `Done`}, {quoted:m})
			}
			break
		
		case 'hijaber': {
            m.reply(mess.wait)
			asupan = await getBuffer(`https://danzzapi.xyz/api/asupan/hijaber?apikey=${global.apikey}`)
			danzz.sendMessage(m.chat, {video: asupan, mimetype: 'video/mp4', caption: `Done`}, {quoted:m})
			}
			break
			
		case 'ukhty': {
            m.reply(mess.wait)
			asupan = await getBuffer(`https://danzzapi.xyz/api/asupan/ukhty?apikey=${global.apikey}`)
			danzz.sendMessage(m.chat, {video: asupan, mimetype: 'video/mp4', caption: `Done`}, {quoted:m})
			}
			break
		
		// Cecan
		case 'randomcecan': case 'cecan': {
			if (!isPremium) throw mess.premium
            m.reply(mess.wait)
			cecan = await getBuffer(`https://danzzapi.xyz/api/cecan/random?apikey=${global.apikeyprem}`)
			danzz.sendMessage(m.chat, {image: cecan, mimetype: 'image/png', caption: `Done`}, {quoted:m})
			}
			break
			
		case 'china': {
			if (!isPremium) throw mess.premium
            m.reply(mess.wait)
			cecan = await getBuffer(`https://danzzapi.xyz/api/cecan/china?apikey=${global.apikeyprem}`)
			danzz.sendMessage(m.chat, {image: cecan, mimetype: 'image/png', caption: `Done`}, {quoted:m})
			}
			break
			
		case 'indonesia': {
            m.reply(mess.wait)
			cecan = await getBuffer(`https://danzzapi.xyz/api/cecan/indonesia?apikey=${global.apikey}`)
			danzz.sendMessage(m.chat, {image: cecan, mimetype: 'image/png', caption: `Done`}, {quoted:m})
			}
			break
			
		case 'japan': {
            m.reply(mess.wait)
			cecan = await getBuffer(`https://danzzapi.xyz/api/cecan/japan?apikey=${global.apikey}`)
			danzz.sendMessage(m.chat, {image: cecan, mimetype: 'image/png', caption: `Done`}, {quoted:m})
			}
			break
			
		case 'korea': {
            m.reply(mess.wait)
			cecan = await getBuffer(`https://danzzapi.xyz/api/cecan/korea?apikey=${global.apikey}`)
			danzz.sendMessage(m.chat, {image: cecan, mimetype: 'image/png', caption: `Done`}, {quoted:m})
			}
			break
		
		case 'thailand': {
            m.reply(mess.wait)
			cecan = await getBuffer(`https://danzzapi.xyz/api/cecan/thailand?apikey=${global.apikey}`)
			danzz.sendMessage(m.chat, {image: cecan, mimetype: 'image/png', caption: `Done`}, {quoted:m})
			}
			break
		
		case 'vietnam': {
			if (!isPremium) throw mess.premium
            m.reply(mess.wait)
			cecan = await getBuffer(`https://danzzapi.xyz/api/cecan/vietnam?apikey=${global.apikeyprem}`)
			danzz.sendMessage(m.chat, {image: cecan, mimetype: 'image/png', caption: `Done`}, {quoted:m})
			}
			break
			
		// Cogan
		case 'randomcogan': case 'cogan': {
            m.reply(mess.wait)
			cogan = await getBuffer(`https://danzzapi.xyz/api/cogan/random?apikey=${global.apikey}`)
			danzz.sendMessage(m.chat, {image: cogan, mimetype: 'image/png', caption: `Done`}, {quoted:m})
			}
			break
			
		// Anime
		case 'waifu': case 'husbu': case 'loli': case 'milf': case 'neko': case 'shota': {
            m.reply(mess.wait)
			animek = await getBuffer(`https://danzzapi.xyz/api/sfw/${command}?apikey=${global.apikey}`)
			danzz.sendMessage(m.chat, {image: animek, mimetype: 'image/png', caption: `Done`}, {quoted:m})
			}
			break
		
		// Search        
		case 'stickersearch': {
			if (!q) throw `Example : ${prefix + command} meme`
			m.reply(mess.wait)
			let stick = await fetchJson(`https://danzzapi.xyz/api/search/sticker?query=${q}&apikey=${global.apikey}`)
			let sticker = `*Result:*\n${stick.result.sticker_url}`
			m.reply(`${sticker}`)
		}
		break
		
		case 'gcwa': case 'groupwa': {
			if (!q) throw `Example : ${prefix + command} kawan`
			m.reply(mess.wait)
			let gcw = await fetchJson(`https://danzzapi.xyz/api/search/gcwa?query=${q}&apikey=${global.apikey}`)
			let gcwa = `*Result:*\nName: ${gcw.result.nama}\nLink: ${gcw.result.link}`
			m.reply(`${gcwa}`)
		}
		break
		
		case 'pinterest': {
			if (!q) throw `Example : ${prefix + command} cecan`
			m.reply(mess.wait)
			let pintr = await fetchJson(`https://danzzapi.xyz/api/search/pinterest?query=${q}&apikey=${global.apikey}`)
			let pinterest = `*Result:*\n${pintr.result}`
			m.reply(`${pinterest}`)
		}
		break
		
		// Text Pro
		case 'pencil': case 'glitch': case'glitch2': case 'glitchtiktok': case 'berry': case 'blackpink': case 'neon': case 'logobear': case '3dchristmas': case 'thunder': case '3dbox': case 'video-game-classic': case 'marvel-studios': case 'ninja-logo': case 'green-horror': case 'magma': case '3d-neon-light': case '3d-orange-juice': case 'chocolate-cake': case '3dcrackedstone': case 'strawberry': {
                if (!text) throw `Example : ${prefix + command} text`
                m.reply(mess.wait)
                danzz.sendMessage(m.chat, { image: { url: `https://danzzapi.xyz/api/textpro/${command}?text=${text}&apikey=${global.apikey}` }, caption: `Done` }, { quoted: ftroli })
	    }
        break
            
        // Photo Oxy
	    case 'flaming': case 'shadow-sky': case 'metallic': case 'pubg': case 'naruto': case 'under-grass': case 'harry-potter': case 'flower-typography': case 'night-sky': {
                if (!text) throw 'No Text'
                m.reply(mess.wait)
                danzz.sendMessage(m.chat, { image: { url: `https://danzzapi.xyz/api/photooxy/${command}?text=${text}&apikey=${global.apikey}` }, caption: `Done` }, { quoted: ftroli })
            }
            break
            
		// Maker
		case 'attp': case 'ttp': {
           if (!text) throw `Example : ${prefix + command} text`
           await danzz.sendMedia(m.chat, `https://danzzapi.xyz/api/maker/${command}?text=${text}&apikey=${global.apikey}`, 'danzz', 'coding', m, {asSticker: true})
         }
         break
        
        // Fun
        case 'rate': {
			if (!text) throw `Example : ${prefix + command} ganteng`
			m.reply(mess.wait)
			let rat = await fetchJson(`https://danzzapi.xyz/api/fun/rate?text=${text}&apikey=${global.apikey}`)
			let rate = `*Result:* ${rat.result}`
			m.reply(`${rate}`)
		}
		break
		
		case 'cekmasadepan': {
			m.reply(mess.wait)
			let masa = await fetchJson(`https://danzzapi.xyz/api/fun/cekmasadepan?apikey=${global.apikey}`)
			let masadepan = `*Result:* ${masa.result}`
			m.reply(`${masadepan}`)
		}
		break
		
		case 'cekpositifcovid': {
			m.reply(mess.wait)
			let posi = await fetchJson(`https://danzzapi.xyz/api/fun/cekpositifcovid?apikey=${global.apikey}`)
			let positif = `*Result:* ${posi.result}`
			m.reply(`${positif}`)
		}
		break
		
		case 'siapakahaku': case 'siapakahdia': {
			m.reply(mess.wait)
			let siapa = await fetchJson(`https://danzzapi.xyz/api/fun/siapakahdia?apikey=${global.apikey}`)
			let siapakah = `*Result:* ${siapa.result}`
			m.reply(`${siapakah}`)
		}
		break
		
		case 'kapankah': {
			if (!text) throw `Example : ${prefix + command} saya sukses`
			m.reply(mess.wait)
			let kapan = await fetchJson(`https://danzzapi.xyz/api/fun/kapankah?text=${text}&apikey=${global.apikey}`)
			let kapankah = `*Result:* ${kapan.result}`
			m.reply(`${kapankah}`)
		}
		break
		
		case 'dimanakah': {
			if (!text) throw `Example : ${prefix + command} saya berada`
			m.reply(mess.wait)
			let dimana = await fetchJson(`https://danzzapi.xyz/api/fun/dimanakah?text=${text}&apikey=${global.apikey}`)
			let dimanakah = `*Result:* ${dimana.result}`
			m.reply(`${dimanakah}`)
		}
		break
		
		case 'cekgay': {
			m.reply(mess.wait)
			let cekg = await fetchJson(`https://danzzapi.xyz/api/fun/cekgay?apikey=${global.apikey}`)
			let cekgay = `*Result:* ${cekg.result}`
			m.reply(`${cekgay}`)
		}
		break
		
		case 'ceklesby': {
			m.reply(mess.wait)
			let cekl = await fetchJson(`https://danzzapi.xyz/api/fun/ceklesby?apikey=${global.apikey}`)
			let ceklesby = `*Result:* ${cekl.result}`
			m.reply(`${ceklesby}`)
		}
		break
		
		case 'cekganteng': {
			m.reply(mess.wait)
			let cekgan = await fetchJson(`https://danzzapi.xyz/api/fun/cekganteng?apikey=${global.apikey}`)
			let cekganteng = `*Result:* ${cekgan.result}`
			m.reply(`${cekganteng}`)
		}
		break
		
		case 'cekcantik': {
			m.reply(mess.wait)
			let cekcan = await fetchJson(`https://danzzapi.xyz/api/fun/cekcantik?apikey=${global.apikey}`)
			let cekcantik = `*Result:* ${cekcan.result}`
			m.reply(`${cekcantik}`)
		}
		break
		
		case 'cekkaya': {
			m.reply(mess.wait)
			let cekkay = await fetchJson(`https://danzzapi.xyz/api/fun/cekkaya?apikey=${global.apikey}`)
			let cekkaya = `*Result:* ${cekkay.result}`
			m.reply(`${cekkaya}`)
		}
		break
		
		case 'cekmiskin': {
			m.reply(mess.wait)
			let cekmis = await fetchJson(`https://danzzapi.xyz/api/fun/cekmiskin?apikey=${global.apikey}`)
			let cekmiskin = `*Result:* ${cekmis.result}`
			m.reply(`${cekmiskin}`)
		}
		break
		
		case 'pantun': {
			m.reply(mess.wait)
			let pant = await fetchJson(`https://danzzapi.xyz/api/fun/pantun?apikey=${global.apikey}`)
			let pantun = `*Author:* ${pant.result.author}\n*Pantun:* ${pant.result.pantun}`
			m.reply(`${pantun}`)
		}
		break
            
        case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
        break
        
        case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await danzz.sendButtonText(m.chat, buttons, jawab, danzz.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await danzz.sendButtonText(m.chat, buttons, jawab, danzz.user.name, m, {mentions: menst})
            }
            break
            
            case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break
		case 'slot': {
            const somtoy = rslot[Math.floor(Math.random() * rslot.length)]
            let sloth =`[  🎰VIRTUAL SLOT 🎰  ]\n------------------------\n\n🍒 : 🍌 : 🍇\n${somtoy}<=====\n🍇 : 🍌 : 🍒\n\n------------------------\n[  🎰 VIRTUAL SLOT 🎰  ]\n\n*Keterangan* :\n_Jika Mendapatkan 3Buah Sama_\n_Berarti Kamu Win_\n\n_Contoh : 🍒 : 🍒 : 🍒_ <=====`
            let buttons = [{ buttonId: 'slot', buttonText: { displayText: '🎰MAIN LAGI🎰' }, type: 1 }]
            await danzz.sendButtonText(m.chat, buttons, sloth, nyoutube, m)
            }
            break
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await danzz.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await danzz.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
            delete this.game[roomnya.id]
            m.reply(`Berhasil delete session room tictactoe !`)
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await danzz.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) danzz.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            
            case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await danzz.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await danzz.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: ftroli })
                    danzz.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    danzz.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, danzz.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    danzz.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    danzz.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, danzz.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    danzz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    danzz.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, danzz.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    danzz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    danzz.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, danzz.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    danzz.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    danzz.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, danzz.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    danzz.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    danzz.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, danzz.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./lib/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                danzz.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            
         // Group
         case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await danzz.groupInviteCode(m.chat)
                danzz.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === '1') {
                    await danzz.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '7') {
                    await danzz.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '90') {
                    await danzz.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await danzz.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else {
                let sections = [
                {
                title: "CHANGE EPHEMERAL GROUP",
                rows: [
                {title: "Ephemeral 1 day", rowId: `ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
                {title: "Ephemeral 7 day's", rowId: `ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
                {title: "Ephemeral 90 days's", rowId: `ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
                {title: "Ephemeral Off", rowId: `ephemeral off`, description: `Deactivate this Ephemeral group`}
                ]
                },
                ]
                danzz.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, danzz.user.name, `Hello Admin ${groupMetadata.subject}`, `Click Here`, sections, m)
                }
            }
            break
            
        case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await danzz.downloadAndSaveMediaMessage(qmsg)
                await danzz.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
                
                case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await danzz.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await danzz.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await danzz.downloadAndSaveMediaMessage(qmsg)
                await danzz.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
                
                case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: danzz.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            danzz.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: danzz.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            danzz.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: danzz.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            danzz.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${danzz.user.id}
`
danzz.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await danzz.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await danzz.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await danzz.sendButtonText(m.chat, buttons, `Mode Group`, danzz.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await danzz.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await danzz.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await danzz.sendButtonText(m.chat, buttons, `Mode Edit Info`, danzz.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await danzz.sendButtonText(m.chat, buttons, `Mode Antilink`, global.wm, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${danzz.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${danzz.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await danzz.sendButtonText(m.chat, buttons, `Mute Bot`, danzz.user.name, m)
                }
             }
             break
                
               case 'kick': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await danzz.groupParticipantsUpdate(m.chat, users, 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await danzz.groupParticipantsUpdate(m.chat, users, 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await danzz.groupParticipantsUpdate(m.chat, users, 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await danzz.groupParticipantsUpdate(m.chat, users, 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break 
                
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await danzz.downloadAndSaveMediaMessage(qmsg)
                await danzz.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
                
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                danzz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: ftroli })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            danzz.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: ftroli })
            }
            break
               case 'totag': {
               if (!m.isGroup) throw mess.group
               if (!isBotAdmins) throw mess.botAdmin
               if (!isAdmins) throw mess.admin
               if (!m.quoted) throw `Reply pesan dengan caption ${prefix + command}`
               danzz.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
               
         // Convert
         case 'sticker': case 's': case 'stickergif': case 'sgif': {
           if (/image/.test(mime)) {
           m.reply(mess.wait)
                let media = await danzz.downloadMediaMessage(qmsg)
                let encmedia = await danzz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
            m.reply(mess.wait)
                if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await danzz.downloadMediaMessage(qmsg)
                let encmedia = await danzz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
                }
            }
            break
            case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
                if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
            	m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await danzz.downloadMediaMessage(qmsg)
                    let encmedia = await danzz.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await danzz.downloadMediaMessage(qmsg)
                    let encmedia = await danzz.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
            if (!isPremium) throw mess.premium
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!isPremium) throw mess.premium
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await danzz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	  
		// Others
		case 'jadibot': {
jadibot(danzz, ftroli, from)
}
break
		case 'menfes': case 'menfess': {
		if (!isPremium) throw mess.premium
		        if (m.isGroup) throw ('fitur tidak dapat digunakan di grup')
            	if (!text) throw `Example : ${prefix + command} 6282xxxxx|nama samaran|pesan`
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
               let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: 'Lokasimu', jpegThumbnail: thumb}}}
               let mq1 = m1 + '@s.whatsapp.net'
               let kawk = ('Ciee ada yang ngirim pesan nih\n© 𝕰𝖗𝖎𝖈𝕯𝖊𝖛')
               let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
               let ivg = `https://telegra.ph/file/11ad4ee7a5b6fd2d5fcfa.jpg`
               let pjtxt = `Hai kak ada Menfess nih!!\n─────────────\n*${namabot}*\n─────────────\n\nDari : _${m2}_ \nPesan : _${m3}_`
               let buttons = [
                { buttonId: 'chatwith2 ${sender.replace("@s.whatsapp.net", "")}', buttonText: { displayText: 'Balas Menfes' }, type:1 },
                { buttonId: 'menfess', buttonText: { displayText: 'Kirim Menfesmu' }, type: 1 }]
               let but = [{ buttonId: 'menfess', buttonText: { displayText: 'kirim menfes lg' }, type: 1 }]
            await danzz.sendMessage(m1 + '@s.whatsapp.net', { caption: pjtxt, location: { jpegThumbnail: await reSize(ivg, 300, 200)}, buttons, footer: `Ciee ada yang ngirim pesan nih\n${global.wm}`}, {quoted: ftroli})
            let akhji = `Pesan Telah Terkirim\nKe @${mq1.split('@')[0]}`
            await danzz.sendButtonText(m.chat, but, akhji, nyoutube, m, {mentions: ments})
            }
            break
        case 'menfesconfirm': {
        if (!isPremium) throw mess.premium
 				danzz.sendMessage(q, {text: `Sudah Di Confirmasi Nih Menfess nyaa🤭`})
				 m.reply(`Terimakasih Menfess Telah Diterima.`)
				}
               break
case 'chatwith2': {
if (!isPremium) throw mess.premium
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Di Dalam Group!')
danzz.sendMessage(q+'@s.whatsapp.net', {text: `Sudah Di Confirmasi Nih Menfess nyaa ntar lagi dia balas🤭`})
if(!q) return m.reply("Masukan nomer target yang mau di chat")
let id = + new Date
const obj = {
id,
a: m.sender,
b: q+'@s.whatsapp.net',
state: "CHATTING",
expired: "5m"
}
anonChat.push(obj)
fs.writeFileSync('./database/menfess.json', JSON.stringify(anonChat))
m.reply(`Silahkan membalas menfess dengan ketik sesuatu maka bot akan otomatis meneruskan chat kamu ke pengirim menfes\nDan ketika pengirim menfes membalas chat kamu bot juga akan meneruskannya\nUntuk berhenti membalas ketik ${prefix}stopmenfes.`)
}
break
		case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                danzz.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await danzz.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, danzz.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await danzz.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await danzz.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await danzz.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, danzz.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await danzz.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, danzz.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await danzz.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, danzz.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await danzz.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, danzz.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await danzz.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await danzz.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await danzz.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, danzz.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await danzz.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, danzz.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await danzz.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, danzz.user.name, m)
                }
                break
            }
            
         case 'ttsen': {
         	if (!text) throw `Example : ${prefix + command} text`
         	m.reply(mess.wait)
             let tts = await fetchJson(`https://danzzapi.xyz/api/tools/tts?text=${text}&lang=id-ID&apikey=${global.apikey}`)
             danzz.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
         	}
         break
         
         case 'ttsid': {
         	if (!text) throw `Example : ${prefix + command} text`
         	m.reply(mess.wait)
             let tts = await fetchJson(`https://danzzapi.xyz/api/tools/tts?text=${text}&lang=id-ID&apikey=${global.apikey}`)
             danzz.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
         	}
         break
         
         case 'ttsja': case 'ttsjp': {
         	if (!text) throw `Example : ${prefix + command} text`
         	m.reply(mess.wait)
             let tts = await fetchJson(`https://danzzapi.xyz/api/tools/tts?text=${text}&lang=ja-JP&apikey=${global.apikey}`)
             danzz.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
         	}
         break
         
         case 'ttsko': case 'ttskr': {
         	if (!text) throw `Example : ${prefix + command} text`
         	m.reply(mess.wait)
             let tts = await fetchJson(`https://danzzapi.xyz/api/tools/tts?text=${text}&lang=ko-KR&apikey=${global.apikey}`)
             danzz.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
         	}
         break
         
       // Tools
       case 'get': {
       	if (!url) throw `Example: ${prefix + command} url`
       	m.reply(mess.wait)
       	let gt = await getBuffer(`${url}`)
       	let gett = `${gt}`
       	m.reply(`${gett}`)
       }
       break
       
       case 'styletext': {
       	if (!isPremium) throw mess.premium
       	if (!text) throw `Example: ${prefix + command} text`
       	let st = await getBuffer(`https://danzzapi.xyz/api/tools/styletext?text=${text}&apikey=${global.apikeyprem}`)
       	let styletext = `${st}`
       	m.reply(`${styletext}`)
       }
       break
       
       case 'ss': case 'ssweb': {
        	if (!url) throw `Example : ${prefix + command} url`
        	m.reply(mess.wait)
			ssweb = await getBuffer(`https://danzzapi.xyz/api/tools/sswebdesktop?url=${url}&apikey=${global.apikey}`)
			danzz.sendMessage(m.chat, {image: ssweb, mimetype: 'image/png', caption: `Done`}, {quoted:m})
			}
			break
         
         // Owner Menu
         case 'self': {
                if (!isOwner) throw mess.owner
                danzz.public = false
                m.reply('Self Mode Activate')
            }
            break
            
            case 'public': {
                if (!isOwner) throw mess.owner
                danzz.public = true
                m.reply('Public Mode Activate')
            }
            break
            
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                danzz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break

            case 'ai':
                try {
                    if (setting.keyopenai === 'ISI_APIKEY_OPENAI_DISINI') return reply('Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file key.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys')
                    if (!text) return reply(`Chattingan dengan.\nTanyakan apa saja kepada ai dengan cara penggunaan \n\n${prefix}${command} tolong berikan motivasi cinta \n\nJangan Lupa follow ig saya @ahlulmukh`)
                    const configuration = new Configuration({
                        apiKey: setting.keyopenai,
                    });
                    const openai = new OpenAIApi(configuration);
                
                    const response = await openai.createCompletion({
                        model: "text-davinci-003",
                        prompt: text,
                        temperature: 0.3,
                        max_tokens: 3000,
                        top_p: 1.0,
                        frequency_penalty: 0.0,
                        presence_penalty: 0.0,
                    });
                    m.reply(`${response.data.choices[0].text}\n\n`)
                } catch (err) {
                    console.log(err)
                    m.reply('Maaf, sepertinya ada yang error')
                }
                break
         
		// End Cmd
		default:
                if (budy.startsWith('=>')) {
                    if (!isOwner) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isOwner) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isOwner) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    danzz.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
    }


    } catch (err) {
        m.reply(util.format(err))
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
