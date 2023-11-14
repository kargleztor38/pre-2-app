import './Item.css'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export const Item = ({ id, name, img, precio, stock }) => {
  return (
    <article className="cardItem">
        <header className="header">
            <h4 className="itemHeader">{name}</h4>
        </header>
        <picture>
            <img src={img} alt={name} className="itemImg"/>
        </picture>
        <section>
            <p className="info">
                Precio: {precio}
            </p>
            <p className="info">
                Stock disponible: {stock}
            </p>
        </section>
            <Link to={`/Item/${id}`}>
                <button className="option">Ver detalles</button>
            </Link>
    </article>
  )
}
