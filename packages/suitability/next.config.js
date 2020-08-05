// use transpile modules then fix the microbundle
const withTM = require('next-transpile-modules')(['@warren/ui'])

module.exports = withTM()
