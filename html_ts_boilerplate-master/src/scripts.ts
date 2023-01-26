import axios from 'axios';

import {
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
} from './constants'

import {
  renderData,
  Country
} from './functions'



axios.get<Country[]>('http://localhost:3004/countries?_page=1&_limit=20').then(({ data }) => {
  renderData(data)
})



//CAPITALIZES WORDS IN SEARCH FIELDS
const capitalizeFirst = (string: string) => {
  return string[0].toUpperCase() + string.substring(1)
}


//SEARCH BUTTON
let searchValue = ''

searchbtn!.addEventListener('click',  function(event) { 
    event.preventDefault()
    if ((<HTMLInputElement>searchName).value !== '') {
      searchValue = (<HTMLInputElement>searchName).value
      tableBody!.replaceChildren()
      axios.get<Country[]>(`http://localhost:3004/countries?name=${capitalizeFirst(searchValue)}`).then(({ data }) => {
        renderData(data)
      })
    } else if ((<HTMLInputElement>searchCapital).value !== '') {
      searchValue = (<HTMLInputElement>searchCapital).value
      tableBody!.replaceChildren()
      axios.get<Country[]>(`http://localhost:3004/countries?capital=${capitalizeFirst(searchValue)}`).then(({ data }) => {
        renderData(data)
      })
    } else if ((<HTMLInputElement>searchCurrency).value !== '') {
      searchValue = (<HTMLInputElement>searchCurrency).value
      tableBody!.replaceChildren()
      axios.get<Country[]>(`http://localhost:3004/countries?currency.name=${capitalizeFirst(searchValue)}`).then(({ data }) => {
        renderData(data)
      })  
    } else if ((<HTMLInputElement>searchLanguage).value !== '') {
      searchValue = (<HTMLInputElement>searchLanguage).value
      tableBody!.replaceChildren()
      axios.get<Country[]>(`http://localhost:3004/countries?language.name=${capitalizeFirst(searchValue)}`).then(({ data }) => {
        renderData(data)
      })

    }  
})


//LOAD MORE BUTTON
let pageCount = 1

loadBtn!.addEventListener('click',  function(event) { 
  event.preventDefault()
  pageCount += 1
  axios.get<Country[]>(`http://localhost:3004/countries?_page=${pageCount}&_limit=20`).then(({ data }) => {
      renderData(data)  
  })    
})



//SORT BY NAME
let nameSortCount = 0

nameSort?.addEventListener('click',  function(event) { 
  event.preventDefault()
  
  if (nameSortCount === 0) {
    axios.get<Country[]>(`http://localhost:3004/countries?_limit=${20 * pageCount}&_sort=name&_order=desc`).then(({ data }) => {
      tableBody!.replaceChildren()
      renderData(data)
    })
    nameSortCount = 1
  } else if (nameSortCount === 1) {  
    axios.get<Country[]>(`http://localhost:3004/countries?_limit=${20 * pageCount}&_sort=name`).then(({ data }) => {
      tableBody!.replaceChildren()
      renderData(data)
    })
    nameSortCount = 0
  }
  
})


//SORT BY CAPITAL
let capitalSortCount = 0

capitalSort?.addEventListener('click',  function(event) { 
  event.preventDefault()
  
  if (capitalSortCount === 0) {
    axios.get<Country[]>(`http://localhost:3004/countries?_limit=${20 * pageCount}&_sort=capital&_order=desc`).then(({ data }) => {
      tableBody!.replaceChildren()
      renderData(data)
    })
    capitalSortCount = 1
  } else if (capitalSortCount === 1) {  
    axios.get<Country[]>(`http://localhost:3004/countries?_limit=${20 * pageCount}&_sort=capital`).then(({ data }) => {
      tableBody!.replaceChildren()
      renderData(data)
    })
    capitalSortCount = 0
  }
  
})

//SORT BY CURRENCY
let currencySortCount = 0

currencySort?.addEventListener('click',  function(event) { 
  event.preventDefault()
  
  if (currencySortCount === 0) {
    axios.get<Country[]>(`http://localhost:3004/countries?_limit=${20 * pageCount}&_sort=currency.name&_order=desc`).then(({ data }) => {
      tableBody!.replaceChildren()
      renderData(data)
    })
    currencySortCount = 1
  } else if (currencySortCount === 1) {  
    axios.get<Country[]>(`http://localhost:3004/countries?_limit=${20 * pageCount}&_sort=currency.name`).then(({ data }) => {
      tableBody!.replaceChildren()
      renderData(data)
    })
    currencySortCount = 0
  }
  
})


//SORT BY LANGUAGE
let languageSortCount = 0

languageSort?.addEventListener('click',  function(event) { 
  event.preventDefault()
  
  if (languageSortCount === 0) {
    axios.get<Country[]>(`http://localhost:3004/countries?_limit=${20 * pageCount}&_sort=language.name&_order=desc`).then(({ data }) => {
      tableBody!.replaceChildren()
      renderData(data)
    })
    languageSortCount = 1
  } else if (languageSortCount === 1) {  
    axios.get<Country[]>(`http://localhost:3004/countries?_limit=${20 * pageCount}&_sort=language.name`).then(({ data }) => {
      tableBody!.replaceChildren()
      renderData(data)
    })
    languageSortCount = 0
  }
  
})

