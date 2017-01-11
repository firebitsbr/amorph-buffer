const Nobject = require('nobject')
const converters = new Nobject

converters.set(['array', 'buffer'], (array) => {
  return Buffer.from(array)
})

converters.set(['buffer', 'hex'], (buffer) => {
  return buffer.toString('hex')
})

converters.set(['hex', 'buffer'], (hex) => {
  return Buffer.from(hex, 'hex')
})

converters.set(['buffer', 'ascii'], (buffer) => {
  return buffer.toString('ascii')
})

converters.set(['ascii', 'buffer'], (ascii) => {
  return Buffer.from(ascii, 'ascii')
})

converters.set(['buffer', 'utf8'], (buffer) => {
  return buffer.toString('utf8')
})

converters.set(['utf8', 'buffer'], (utf8) => {
  return Buffer.from(utf8, 'utf8')
})

converters.set(['buffer', 'utf16le'], (buffer) => {
  return buffer.toString('utf16le')
})

converters.set(['utf16le', 'buffer'], (utf16le) => {
  return Buffer.from(utf16le, 'utf16le')
})

converters.set(['utf16le', 'ucs2'], (utf16le) => {
  return utf16le
})

converters.set(['ucs2', 'utf16le'], (ucs2) => {
  return ucs2
})

module.exports = converters
