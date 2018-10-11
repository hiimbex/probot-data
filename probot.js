const probotApps = require('./probotApps')

const data = probotApps.results
let count = 0

for (let search in data) {
  let installations = data[search].matches[0].lineText.split(' ')
  let installation_count = installations[1]
  count += parseInt(installation_count)
}

console.log(count)
// 6357
// 6357/52 apps = an average ~122 installations per app
