import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import iphone from './components/img/11.png'
import tw from './components/img/tw.png'


export default function App() {
  const [addedProducts, setAddedProducts] = useState([])
  const [products, setProducts] = useState([
    { id: 1, title: 'Telefon', text: 'İphone', img: iphone },
    { id: 2, title: 'TW', text: 'Samsung', img: tw },
    { id: 3, title: 'Telefon', text: 'İphone', img: iphone },
    { id: 4, title: 'TW', text: 'Xaomi', img: tw },
  ])

  return (
    <div>
      <h4 className='text'>Ürün Listesi</h4>
      <div className='row'>
        {
          products.map((product, index) => (
            <div className='col-sm'>
              <Card
                key={index}
                title={product.title}
                img={product.img}
                text={product.text}
                onClick={() => {
                  const arr = [...addedProducts]
                  arr.push(product)
                  setAddedProducts(arr)
                }}
              />
            </div>
          ))
        }
      </div>

      {addedProducts.length > 0 && <div>
        <h4>Aldığınız ürünler</h4>

        {addedProducts.map((addedProduct, index) => {
          return (
            <div key={index}>
              {JSON.stringify(addedProduct)}
            </div>
          )
        })}

      </div>}

      {addedProducts.length < 1 && <div>Sepetinizde ürün bulunmamaktadır.</div>}

    </div>
  )
}
