import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support'],
            description: 'Gets the support group links',
            category: 'general',
            usage: `${client.config.prefix}Support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
                `*📮𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗚𝗿𝗼𝘂𝗽𝘀*\n\n
                 *「ENJOY GROUP LINK 」*:https://chat.whatsapp.com/EAjN9UVOurJ9cjlaVmSCj5 \n
                 *「owner's number」*:👑-1 https://wa.me//+917892202052\n\n👑-2 https://wa.me//+9845987565`,
           MessageType.text
        ))
        const n = [
            'https://i.pinimg.com/564x/e5/ab/cc/e5abcca9633085d2b54b31362017b9ec.jpg'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `Regarding this, I have sent you a personal message in your DM📪\n` }
        )
 
        }
}
