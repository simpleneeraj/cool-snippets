
import puppeteer from 'puppeteer'
import path from 'path'
import { NextApiRequest, NextApiResponse } from 'next'

const Screenshot = async (req: NextApiRequest, res: NextApiResponse) => {
    const { url } = req.body
    if (url) {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(url);
            await page.waitForSelector('#smooth-shot')
            const element = await page.$(`#smooth-shot`,)
            const bounding = await element?.boundingBox()
            if (element)
                if (bounding) {
                    const base64 = await element.screenshot({
                        encoding: 'base64',
                        type: 'webp',
                        clip: {
                            scale: 2,
                            x: bounding.x,
                            y: bounding.y,
                            width: bounding.width,
                            height: bounding.height,
                        }

                    });
                    await browser.close();
                    // console.log(base64)
                    res.status(200).json({ base64: `data:image/webp;base64,${base64}` })
                }


        } catch (error) {
            console.log(error)
        }
    }
}

export default Screenshot