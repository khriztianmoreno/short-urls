import shorten from '../../utils/shorten'
import {LINK_NOT_PROVIDED} from '../../utils/messages'

export default async function handler (req, res) {
  const { url, code } = req.body

  if (!url) {
    console.log(LINK_NOT_PROVIDED)
    return res.status(400).json({err: LINK_NOT_PROVIDED})
  }

  try {
    const shortUrl = await shorten(url, code)
    console.log('exports.handler -> shortUrl', shortUrl)

    return res.status(200).send({ url, shortUrl })
  } catch (error) {
    console.log("🚀 ~ file: shortUrl.js ~ line 18 ~ handler ~ error", error)
    return res.status(500).send({err: error})
  }
}
