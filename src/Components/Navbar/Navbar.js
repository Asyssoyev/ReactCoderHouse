import "./Navbar.css"

import {CartWidget} from './CartWidget' 
export const Navbar = () => {
        return <nav className='nav'>
            <a href='/' className="titulo">Timberland</a>
            <ul>
                <li>
                    <a href='/Hombres'>Hombres</a>
                 </li><li>
                    <a href='/Mujeres'>Mujeres</a>
                </li><li>
                    <a href='/Niños'>Niños</a>
                </li>
                <li><CartWidget/></li>
            </ul>
        </nav>
}