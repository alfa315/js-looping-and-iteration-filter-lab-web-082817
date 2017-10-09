// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function(name){return string.toLowerCase() === name.toLowerCase()})
};

function fuzzyMatch(drivers, string){
  return drivers.filter(function(name){
    return string === name.slice(0, string.length)
  })
};

function matchName(drivers, string){
  return drivers.filter(function(driver){
    return driver.name === string
  })
};
