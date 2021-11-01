import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';

import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, handleRegistration, handleEmailChange, handlePasswordChange, error, isLogin, toggleLogin, handleResetPassword, handleNameChange, setUser, processLogin, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLoginDirect = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user)
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div className=' mt-5 mx-auto container'>
            {/* <form onSubmit={processLogin}> */}
            <h2 className='text-primary mb-4'>Please Login</h2>

            {/* <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" onBlur={handleEmailChange} className="form-control w-50" placeholder='Your Email' required id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" onBlur={handlePasswordChange} className="form-control w-50 " placeholder='Your Password' required id="inputPassword3" />
                    </div>
                </div>


                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-primary">Login</button>
                <span className='ms-3'><Link to='/registration'>Create a new Account</Link></span>
                <br />
                <br />

                <button className='btn btn-warning' onClick={handleResetPassword}>Reset Password</button>
            
            <br />
            <br />
            <div>----------or-------------</div> */}
            {/* </form> */}
            <br />
            <br />
            <button onClick={handleGoogleLoginDirect} className='btn btn-warning mt-2 mb-md-5'>Google Sign In</button>


        </div>
    );
};

export default Login;