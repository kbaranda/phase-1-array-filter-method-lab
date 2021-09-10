// Code your solution here
function findMatching(drivers, str) {
    return drivers.filter(array => array.toUpperCase() === str.toUpperCase())
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(array => array.substring(0,1).toUpperCase() === str.substring(0,1).toUpperCase())
}

function matchName(drivers, str) {
    return drivers.filter(array => array.name === str)
}