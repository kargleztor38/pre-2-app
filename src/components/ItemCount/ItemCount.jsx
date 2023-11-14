import { useState } from "react"
import './ItemCount.css'

// eslint-disable-next-line react/prop-types
export const ItemCount = ({ stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if ( count < stock ) {
            setCount( count + 1 )
        }
    }

    const decrement = () => {
        if ( count > 1 ) {
            setCount( count - 1 )
        }
    }
  return (
    <div className="counter">
        <div className="controls">
            <button className="button" onClick={decrement}>⟪</button>
            <h3>count: {count}</h3>
            <button className="button" onClick={increment}>⟫</button>
        </div>
        <div>
            <button className="button" onClick={() => onAdd(count)} disabled={!stock}>
                Agregar al carrito
            </button>
        </div>
    </div>
  )
}
