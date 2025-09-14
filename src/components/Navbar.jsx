import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
     <div className='flex justify-between
       items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to="/">
            <img src={logo} alt="Logo" width={160} height={32} loading='lazy' />
        </Link>

        <nav >
            <ul className='flex space-x-9
              text-white font-medium'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>

            </ul>
        </nav>

        <div className='flex space-x-4 ml-5
             items-center'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-blue-500 text-white px-4 py-2 rounded'>
                        Login in
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button className='bg-blue-500 text-white px-4 py-2 rounded'>
                        Sign Up
                    </button>
                </Link>
            }
            {
                isLoggedIn &&
                <Link to="/">
                    <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={
                        () => {
                            setIsLoggedIn(false)
                            toast.success("Logged out successfully")
                        }
                    }>
                        Log Out
                    </button>
                </Link>
            }
            {
                isLoggedIn &&
                <Link to="/dashboard">
                    <button className='bg-green-500 text-white px-4 py-2 rounded'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>

     </div>
  );
}

export default Navbar
