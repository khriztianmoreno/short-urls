import Airtable from 'airtable'

const apiKey = process.env.AIRTABLE_KEY
const base = process.env.AIRTABLE_BASE
const table = process.env.AIRTABLE_TABLE
const shortCodeField = process.env.AIRTABLE_SHORT_CODE_FIELD
const longLinkField = process.env.AIRTABLE_LONG_LINK_FIELD

export default async function handler (req, res) {
  const { code } = req.body
  console.log("🚀 ~ file: getCodeUrl.js ~ line 11 ~ handler ~ code", code)
  try {
    console.log(`Attempting to get long link for code "${code}"`)
    const result = await new Airtable({apiKey})
      .base(base)(table)
      .select({
        maxRecords: 1,
        fields: [longLinkField],
        filterByFormula: `{${shortCodeField}} = "${code}"`,
      })
      .firstPage()

    const longLink = result[0].get(longLinkField)
    if (longLink) {
      return res.status(200).send({ longLink })
    } else {
      console.log(`There was no Long Link associated with "${code}".`)
      return res.status(404).send(`There was no Long Link associated with "${code}".`)
    }
  } catch (error) {
    return res.status(500).send({err: error})
  }
}
