const database = require('./database');

// Each of this repositories contain the way to extract data from a particular entity
// It is the so-called Repository Pattern

// function to asynchronously retrieve all countries order by their code in ascending order
async function  getCountries() {
    return database.query('SELECT * from country order by code asc');
};

async function  getCountries(orderBy, orderByAscDesc, pageSize, page) {
    let sql = 'SELECT * from country' ;
    if (orderBy != null && orderBy > 0 ) {
        sql += ' order by ' + orderBy + ' '  + orderByAscDesc;
    }
    if (pageSize != null && pageSize > 0 ) {
        sql += ' LIMIT ' + pageSize;
    } 
    if (page != null && page > 0 ) {
        sql += ' OFFSET ' + pageSize*page;
    }
    return database.query(sql);
};

// function to asynchronously retrieve all countries order by their code (PK) 
async function  getCountryByCode(countryCode) {
    return database.query('SELECT * from country where Code = ?', countryCode);
};

// returns the diffferenct country codes, normally they should be distinct since it is the key
async function  getDistinctCountryCodes() {
    return database.query('SELECT DISTINCT code FROM country order by CODE');
};

// function that retrieves both code and name from the countries table
async function  getDistinctCountryCodesAndNames() {
    return database.query('SELECT DISTINCT code, name FROM country order by CODE');
};

module.exports = {
  getCountries, getCountryByCode, getDistinctCountryCodes, getDistinctCountryCodesAndNames
};