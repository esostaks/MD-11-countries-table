import {
    tableBody
} from './constants'

type Country = {
    "name": string,
    "code": string,
    "capital": string,
    "region": string,
    "currency": {
      "code": string,
      "name": string,
      "symbol": string,
    },
    "language": {
      "code": string,
      "name": string,
    },
    "flag": string,
    "dialling_code": string,
    "isoCode": string,
  }
  
  
  const renderData = (data: Country[]) => {
    data.forEach(obj => {
      const tableRow = document.createElement("tr");
      tableBody!.appendChild(tableRow);
    
      const name = document.createElement("td");
      name.innerHTML = obj.name
      tableRow.appendChild(name)
  
      const capital = document.createElement("td");
      capital.innerHTML = obj.capital
      tableRow.appendChild(capital)
  
      const currency = document.createElement("td");
      currency.innerHTML = obj.currency.name
      tableRow.appendChild(currency)
  
      const language = document.createElement("td");
      language.innerHTML = obj.language.name
      tableRow.appendChild(language)
    });
  
  }

export {
    renderData,
    Country
}