
const tableBody = document.querySelector(".js-table-body") 
const loadBtn = document.querySelector<HTMLButtonElement>(".js-load-btn")

const nameSort = document.querySelector(".js-name-sort")
const capitalSort = document.querySelector(".js-capital-sort")
const currencySort = document.querySelector(".js-currency-sort")
const languageSort = document.querySelector(".js-language-sort")

const searchName = document.querySelector(".js-search-name")
const searchCapital = document.querySelector(".js-search-capital")
const searchCurrency = document.querySelector(".js-search-currency")
const searchLanguage = document.querySelector(".js-search-language")
const searchbtn = document.querySelector<HTMLButtonElement>(".js-search-btn")

export {
    tableBody,
    loadBtn,
    nameSort,
    capitalSort,
    currencySort,
    languageSort,
    searchName,
    searchCapital,
    searchCurrency,
    searchLanguage,
    searchbtn
}