
import {URL} from 'url'
import Airtable from 'airtable'

import {
  LINK_NOT_PROVIDED,
  INVALID_URL,
  LINK_ALREADY_EXISTS,
} from './messages'

const apiKey = process.env.AIRTABLE_KEY
const base = process.env.AIRTABLE_BASE
const table = process.env.AIRTABLE_TABLE
const urlBase = process.env.URL_BASE
const shortCodeField = process.env.AIRTABLE_SHORT_CODE_FIELD
const longLinkField = process.env.AIRTABLE_LONG_LINK_FIELD

const airtable = new Airtable({apiKey})

/**
 * Shorten url
 * @param {string} longLink
 * @param {string} code
 */
async function shorten(longLink, code) {
  code = code || generateCode()
  if (!longLink) {
    console.log(LINK_NOT_PROVIDED)
    return
  }
  try {
    // validate URL
    new URL(longLink)
  } catch (error) {
    console.log(`${longLink} ${INVALID_URL}`)

    return `${longLink} ${INVALID_URL}`
  }

  console.log(`Attempting to set redirect "${code}" -> ${longLink}`)

  try {
    const existingRecords = await getExistingRecord(code)
    if (existingRecords && existingRecords[0]) {
      const existingLink = existingRecords[0].get(longLinkField)
      const msg = `${LINK_ALREADY_EXISTS} ${existingLink}`
      console.log(msg)

      return msg
    }
    const createdRecord = await saveShortUrl(longLink, code)

    return await `${urlBase}${createdRecord.fields[shortCodeField]}`
  } catch (error) {
    return error
  }
}

function getExistingRecord(code) {
  return airtable
    .base(base)(table)
    .select({
      maxRecords: 1,
      fields: [longLinkField],
      filterByFormula: `{${shortCodeField}} = "${code}"`,
    })
    .firstPage()
}

function saveShortUrl(longLink, code) {
  return airtable
    .base(base)(table)
    .create({
      [shortCodeField]: code,
      [longLinkField]: longLink,
    })
}

function generateCode() {
  let text = ''
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return text
}

function getEnv(name, defaultValue) {
  return process.env[name] || defaultValue
}

module.exports = shorten
