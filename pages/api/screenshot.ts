
import puppeteer from 'puppeteer'
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
                        type: 'png',
                        clip: {
                            scale: 2,
                            x: bounding.x,
                            y: bounding.y,
                            width: bounding.width,
                            height: bounding.height,
                        }
                    });
                    await browser.close();
                    const base64URI = `data:image/png;base64,${base64}`
                    // console.log(base64)
                    res.status(200).json({ base64: base64URI })
                }


        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
}

export default Screenshot