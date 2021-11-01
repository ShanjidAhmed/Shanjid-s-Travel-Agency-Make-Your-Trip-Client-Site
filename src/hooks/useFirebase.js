import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
// import { useHistory, useLocation } from "react-router";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
    const auth = getAuth();



    const handleRegistration = e => {
        e.preventDefault();

        if (password.length < 6) {
            setError('Password should be at least 6 characters')
            return;
        }
        isLogin ? processLogin(email, password) : registerNewUser(email, password)
        // console.log(email, password);
    }
    const processLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                // history.push(redirect_uri);
                setError("")
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError("");
                verifyEmail();
                setUserName();
                window.location.reload();
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {

            })
    }
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {

            })
    }
    const handleNameChange = (e) => {
        setName(e.target.value)

    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        setUser,
        setIsLoading,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        error,
        isLogin,
        toggleLogin,
        handleResetPassword,
        handleNameChange,
        processLogin,

    }
}
export default useFirebase;