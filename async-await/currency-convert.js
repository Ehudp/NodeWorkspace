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
    try {

        const response = await axios.get('http://data.fixer.io/api/latest?access_key=fd86bfd1a027c73621fae0a1ff6550fc');

        const euro = 1 / response.data.rates[from];
        const rate = euro * response.data.rates[to];

        if (isNaN(rate)) {
            throw new Error();
        }

        return rate;
    } catch (e) {
        throw new Error(`Unable to get exchange rate from ${from} and ${to}`);
    }
};

// const getCountries = (currencyCode) => {

//     return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
//         .then((response) => {
//             return response.data.map((country) => country.name);
//         });
// };

const getCountries = async (currencyCode) => {
    try {
        var response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);

        return response.data.map((country) => country.name);

    } catch (error) {
        throw new Error(`Unable to get countries that use ${currencyCode}`);
    }

};


// const convertCurrency = (from, to, amount) => {

//     let convertedAmount;
//     return getExchangeRate(from, to).then((rate) => {
//         convertedAmount = (amount * rate).toFixed(2);
//         return getCountries(to);
//     }).then((countries) => {
//         return `${amount} ${from} is worth ${convertedAmount} ${to} you can spend it in the following countries ${countries.join(', ')}`;
//     });
// };


const convertCurrency = async (from, to, amount) => {

    var rate = await getExchangeRate(from, to);
    var convertedAmount = (amount * rate).toFixed(2);
    var countries = await getCountries(to);

    return `${amount} ${from} is worth ${convertedAmount} ${to} you can spend it in the following countries ${countries.join(', ')}`;

};

convertCurrency('USD', 'ILS', 1)
    .then((message) => console.log(message))
    .catch((e) => console.log(e.message));
// getExchangeRate('USD', 'ILS').then((rate) => {
//     console.log(rate);
// });

// getCountries('ILS').then((countries) => {
//     console.log(countries);
// });

const add = async (a, b) => {
    return a + b + c;
};

const doWork = async () => {
    const result = await add(12, 13);
    return result;
};

doWork().then((data) => {
    console.log(data);
}).catch((e) => {
    console.log('something get wrong');
});