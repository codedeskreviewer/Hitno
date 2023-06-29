import React from "react";
import SignupHeader from "../components/SignupHeader";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { collection, query, orderBy } from "firebase/firestore";
import db from "../connect/connect";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

function Login() {
  //collection ref
  const colRef = collection(db, "users");

  //Queries
  const q = query(colRef, orderBy("createdAt", "desc"));

  // display the user email

  const auth = getAuth();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [currentloginEmail, setcurrentLoginEmail] = useState("");
  const [currentloginId, setcurrentLoginId] = useState("");

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setcurrentLoginEmail(user.email);
        setcurrentLoginId(user.uid);
        console.log(currentloginId);
        router.push("home/");
      } else {
        setcurrentLoginEmail("");
        setcurrentLoginId("");
      }
    });
  }, [currentloginId]);

  const LoginUser = async () => {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then(() => {
        console.log("User loggin successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <SignupHeader />

      <div className={styles.signup_form_container}>
        <div className={styles.signup_heading_text}>Најави се</div>
        <div className={styles.signup_label}>Внеси телефон </div>
        <input
          type="email"
          id="user_email"
          className={styles.signup_input}
          onChange={(e) => setLoginEmail(e.target.value)}
          placeholder="Твојот eMail"
        />

        <div className={styles.signup_label}>Внеси лозинка </div>
        <input
          type="password"
          id="user_password"
          className={styles.signup_input}
          onChange={(e) => setLoginPassword(e.target.value)}
          placeholder="Твојата лозинка"
        />
        <br></br>
        <br></br>

        <Link href="user-dashboard/">
          <button className={styles.signup_btn} onClick={LoginUser}>
            Најави се
          </button>
        </Link>

        <div className={styles.or_text}>Немаш сметка?</div>
        <Link href="signup">
          <button className={styles.login_btn}>Креирај сметка</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
