// import { useHistory, useLocation } from 'react-router';

// import { Link } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';

// const Registration = () => {
//     const { signInUsingGoogle, setUser, setIsLoading, handleNameChange, handleRegistration, handleEmailChange, handlePasswordChange } = useAuth();
//     const location = useLocation();
//     const history = useHistory();
//     const redirect_uri = location.state?.from || '/home';



//     const handleGoogleLogin = () => {
//         setIsLoading(true);
//         signInUsingGoogle()
//             .then(result => {
//                 setUser(result.user)
//                 history.push(redirect_uri);
//             })
//             .finally(() => setIsLoading(false));
//     }
//     return (
//         <div>
//             <div className='container mt-5'>
//                 <h2 className='text-primary mb-4'>Please Register</h2>
//                 <form onSubmit={handleRegistration}>
//                     <div className="row mb-3">
//                         <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
//                         <div className="col-sm-10">
//                             <input type="name" onBlur={handleNameChange} className="form-control w-50" id="inputName" required placeholder='Your Name' />
//                         </div>
//                     </div>
//                     <div className="row mb-3">
//                         <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
//                         <div className="col-sm-10">
//                             <input type="email" onBlur={handleEmailChange} required className="form-control w-50" id="inputEmail3"
//                                 placeholder='Your Email' />
//                         </div>
//                     </div>
//                     <div className="row mb-3">
//                         <label htmlFor="inputPassword3" required className="col-sm-2 col-form-label">Password</label>
//                         <div className="col-sm-10">
//                             <input type="password" onBlur={handlePasswordChange} className="form-control w-50" id="inputPassword3"
//                                 placeholder='Your Password' />
//                         </div>
//                     </div>


//                     <button type="submit" className="btn btn-primary">Register</button>
//                     <Link to='/login'><span className='ms-3'>Already have an account?</span></Link>
//                 </form>
//                 <br />
//                 <br />
//                 <div>-----------or-----------</div>
//                 <br />
//                 <br />
//                 <button onClick={handleGoogleLogin} className='btn btn-warning mb-md-5 mt-md-5'>Google Sign In</button>
//             </div>
//         </div>
//     );
// };

// export default Registration;