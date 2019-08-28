const Telegraf = require('telegraf')
const status = require('./status')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply("Hello world"))

bot.command('status', async (ctx) => {

    try {
        const response = await status()

        if (response.status == 200) {
            await ctx.reply(`Google service: ✅`)
        } else {
            await ctx.reply(`Google service: ❌`)
        }

    } catch(error) {
        console.error(error)
    }
})

const startBot = async () => {
    try {
        await bot.launch()
        console.log('Bot started successfully')
    } catch(error) {
        console.error(error)
    }
}

startBot()
