import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, sendEmailVerification, sendPasswordResetEmail, updateProfile, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import Swal from "sweetalert2";
// import {  useLocation, useNavigate } from "react-router-dom";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // let navigate = useNavigate();
    // let location = useLocation();

    const google = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                // registerUser(result.user);
                setUser(result.user);
                // localStorage.setItem('token', result.user.uid);
                // navigate('/dashboard')
                // window.location.replace('/dashboard')
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const github = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                // registerUser(result.user);
                setUser(result.user);
                // localStorage.setItem('token', result.user.uid);
                // navigate('/dashboard')
                // window.location.replace('/dashboard')
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                Swal.fire({
                    icon: 'success',
                    title: 'Password reset email sent',
                    text: 'Please check your email for further instructions.',
                })
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
                // localStorage.clear();
                window.location.reload();
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else{
                setUser({});
            }
        });
        //eslint-disable-next-line
    }, [])

    // const registerUser = (user)=>{
    //     const name = user.displayName;
    //     const email = user.email;
    //     const phone = user.phoneNumber;
    //     const photo = user.photoURL;
    //     const password = user?.password || '';
    //     const user_created_date = user.user_created_date;
    //     const from_demo = user.fromDemo;
    //     const from_login = user.fromLogin;

    //     const newUser = {name, email, phone, photo, password, user_created_date, from_demo, from_login };
    //     localStorage.setItem('email', newUser.email);
    //     // localStorage.setItem('user', JSON.stringify(newUser));
    //     setUser(newUser);
    //     fetch('https://skillshikhun.herokuapp.com/addUser',{
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(newUser)
    //     })
    //     .then(res => res.json())
    // }

    return {
        auth,
        setUser,
        user,
        error,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        google,
        github,
        // registerUser,
        sendEmailVerification,
        updateProfile,
        logOut,
        onAuthStateChanged,
        resetPassword
    }
}

export default useFirebase;