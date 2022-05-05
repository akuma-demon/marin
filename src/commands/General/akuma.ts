import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'akuma',
            description: 'Displays info about ✴🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀✴.',
            category: 'general',
            usage: `${client.config.prefix}akuma`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://i.ibb.co/zWMWrzw/e435b4143a83c543c9cfdc795e66d8de.jpg',
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `💖𝗛𝗘𝗟𝗟𝗢!💖I'm 𝐀𝐊𝐔𝐌𝐀 an ordinary guy who loves watching anime & play games🎮. I'm a BCA Student💖relationship with 𝐙𝐄𝐑𝐎💖.
            
💖𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏;
Wa.me/917892202052
      
💖𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊;
https://facebook.com/groups/600441174428472/
      
💖𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌;
https://www.instagram.com/akuma__24/?hl=
      
⪼𝖲𝖾𝖾 𝗒𝖺𝗁 have a great day💖💖` }
        )
    }
}
