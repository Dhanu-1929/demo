import react from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return(
        <header>
            <nav>
                <Link to='/homep'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/courses'>Courses</Link>
                <Link to='/contact'>Contack</Link>
                <Link to='/admission'>Admission</Link>
                <link to="button">Apply now</link>
            </nav>
        </header>
    )
}
export default Header