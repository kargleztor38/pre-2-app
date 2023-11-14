import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProducts } from '../../asyncMook'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [isLoadding, setIsLoading] = useState(true)

  const { category } = useParams()

  useEffect(() => {

    getProducts()
      .then((resp) => {
        if(category) {
          const productFilter = resp.filter(product => product.category === category);
          setProducts(productFilter);
          setIsLoading(false);
        } else {
          setProducts(resp);
          setIsLoading(false);
        }
      })
      .catch(error => console.error(error))
  }, [category])
  
  return (
    <div className="itemListContainer">
        <h1>{greeting}</h1>
        { isLoadding ? <h2>Cargando Productos..</h2> : <ItemList products={products}/> }
    </div>
  )
}
