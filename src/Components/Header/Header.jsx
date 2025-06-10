import react from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return(
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/courses'>Courses</Link>
                <Link to='/contact'>Contack</Link>
                <Link to='/admission'>Admission</Link>
               
            </nav>
        </header>
    )
}
export default Header