import React from "react"


const Price = (props) => {

const apiKey = "08457939b759111524af78611b408f6a"

const symbol = props.match.params.symbol

const url  = `https://financialmodelingprep.com/api/v3/quote-short/${symbol}?apikey=${apiKey}`


const [stock, setStock] = React.useState([])

const getStock = async () => {

const response = await fetch(url)
const data = await response.json()
setStock(data)

}

React.useEffect(() => {
    getStock()
  }, [])

  const loaded = () => {
    return (
      <div>
        <h1>
          {stock.symbol}
        </h1>
        <h2>{stock.price}</h2>
      </div>
    )
  }


  const loading = () => {

    return <h1>Waiting on Stocks!</h1>
  }
  
  return stock ? loaded() : loading()
  


};

export default Price;