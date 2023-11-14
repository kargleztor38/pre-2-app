import { useEffect, useState } from "react"
import { getProductsId } from "../../asyncMook"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { id } = useParams();

    useEffect(() => {
      getProductsId(id)
        .then(resp => setProduct(resp))
        .catch(error => console.error(error))
    }, [id])
    
  return (
    <div className="itemDetailContainer">
        { product && <ItemDetail {...product} />}
    </div>
  )
}
