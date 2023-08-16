import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location=useLocation()
    return (
        <>
        <div className="hello" >
            {location.pathname==='/' && (<Link to='/signup' >Don't have an account? singup here.</Link>)}
            {location.pathname==='/signup' && (<Link to='/' >Already have an account? Login here.</Link>)}

        </div>
        </>
    )
};
export default Footer;
