import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Logo = () => {
    return (
        <Link to='/' className='flex gap-3 items-center font-semibold'>
            <img src={logo} alt="" />
            Around the world
        </Link>
    )
}

export default Logo