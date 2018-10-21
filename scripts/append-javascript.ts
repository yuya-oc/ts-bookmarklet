import fs from 'fs'

const target = process.argv[2]
const content = fs.readFileSync(target, 'utf-8')
fs.writeFileSync(target, "javascript:" + content + "\n")
