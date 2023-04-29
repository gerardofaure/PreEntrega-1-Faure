import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
  return (
    <>
          <header>
           <h1>Chilectras</h1>
           <nav>
            <ul>
                <li>Luces Led</li>
                <li>Baterias</li>
                <li>Camaras</li>
                <li>Sensores</li>
            </ul>
           </nav>

        <CartWidget />

          </header>
    </>

  )
}

export default NavBar