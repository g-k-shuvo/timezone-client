import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import { useHistory } from "react-router";

//initialize firebase  authentication
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  let history = useHistory();

  const auth = getAuth();

  // Sign Up User
  const signUpUser = (email, password, name, imageUrl, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name, "POST");
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: imageUrl,
        })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Account Created!",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            const msg = error.message;
            Swal.fire({
              icon: "error",
              title: msg,
              showConfirmButton: false,
              timer: 1500,
            });
          });
        history.replace("/");
      })
      .catch((error) => {
        const msg = error.message;
        Swal.fire({
          icon: "error",
          title: msg,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .finally(() => setLoading(false));
  };

  // Observer
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // Sign In Functionality
  const signInUser = (email, password, location, history) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        Swal.fire({
          icon: "success",
          title: "You are now Logged In!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const msg = error.message;
        Swal.fire({
          icon: "error",
          title: msg,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .finally(() => setLoading(false));
  };

  // Sign Out
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        history.push("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Save User Function
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://secure-sierra-53556.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // Check if user is Admin
  useEffect(() => {
    fetch(`https://secure-sierra-53556.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  return {
    user,
    admin,
    loading,
    signInUser,
    signUpUser,
    signOutUser,
  };
};

export default useFirebase;
