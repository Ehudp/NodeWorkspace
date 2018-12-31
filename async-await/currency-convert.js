const axios = require('axios');


//http://data.fixer.io/api/latest?access_key=fd86bfd1a027c73621fae0a1ff6550fc

//https://restcountries.eu/rest/v2/currency/ils

// const getExchangeRate = (from, to) => {
//     return axios.get('http://data.fixer.io/api/latest?access_key=fd86bfd1a027c73621fae0a1ff6550fc')
//         .then((response) => {
//             const euro = 1 / response.data.rates[from];
//             const rate = euro * response.data.rates[to];

//             return rate;
//         });
// };

const getExchangeRate = async (from, to) => {

    const response = await axios.get('http://data.fixer.io/api/latest?access_key=fd86bfd1a027c73621fae0a1ff6550fc');

    const euro = 1 / response.data.rates[from];
    const rate = euro * response.data.rates[to];
    return rate;

};

// const getCountries = (currencyCode) => {

//     return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
//         .then((response) => {
//             return response.data.map((country) => country.name);
//         });
// };

const getCountries = async (currencyCode) => {

    var response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);

    return response.data.map((country) => country.name);
};

getExchangeRate('USD', 'ILS').then((rate) => {
    console.log(rate);
});

getCountries('ILS').then((countries) => {
    console.log(countries);
});