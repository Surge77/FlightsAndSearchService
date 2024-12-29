//The purpose of this is to avoid repetitive required in multiple services requiring different repository files
//When our files increase in the repository folder we will be needing to write require for all the files
//So we combined all the files into an object in the form of key value pair and require the necessary object

module.exports = {
    CityRepository : require('./city-repository')
}