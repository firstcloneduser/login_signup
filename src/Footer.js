import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location=useLocation()
    return (
        <>
        <div className="hello" >
            {location.pathname==='http://firstcloneduser.github.io/task_login' && (<Link to='/signup' >Don't have an account? singup here.</Link>)}
            {location.pathname==='http://firstcloneduser.github.io/task_login/signup' && (<Link to='/' >Already have an account? Login here.</Link>)}

        </div>
        </>
    )
};
export default Footer;
