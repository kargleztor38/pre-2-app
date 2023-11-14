import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'

export const NavBar = () => {
  return (
    <nav className="nav">
      <Link to={'/'}>
        <h3> Productos Artesanles </h3>
      </Link>
        <div className="container-button">
          <Link to={'/category/Camiseta'}>
            <button>Camiseta</button>
          </Link>
          <Link to={'/category/Camisas'}>
            <button>Camisas</button>
          </Link>
          <Link to={'/category/Cuadros'}>
            <button>Cuadros</button>
          </Link>
        </div>
        <CartWidget />
    </nav>
  )
}
