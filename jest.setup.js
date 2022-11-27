const fetchPolifill = require('whatwg-fetch')

const { TextEncoder } = require('util')

global.fetch = fetchPolifill.fetch
global.Request = fetchPolifill.Request
global.Headers = fetchPolifill.Headers
global.Response = fetchPolifill.Response
global.TextEncoder = TextEncoder
