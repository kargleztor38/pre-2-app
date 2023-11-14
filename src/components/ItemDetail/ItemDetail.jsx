/* eslint-disable react/prop-types */

import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({ name, category, precio, stock, img, description }) => {

    const onAdd = (item) => {
        alert(`Se agregaron ${item} al carrito`)
    }

  return (
    <article className="cardDetail">
        <header className="detailHeader">
            {name}
        </header>
        <picture>
            <img src={img} alt={name} className="detailImg"/>
        </picture>
        <section>
            <p className="info">
                Categoria: {category}
            </p>
            <p className="info">
                Descripcion: {description}
            </p>
            <p className="info">
                Precio: {precio}
            </p>
        </section>
        <footer>
            <ItemCount stock={stock} onAdd={onAdd}/>
        </footer>
    </article>
  )
}
