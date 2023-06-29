import React from "react";
import SignupHeader from "../components/SignupHeader";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../connect/firebase";

function SignupDemo() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {};

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <SignupHeader />

      <div className={styles.signup_form_container}>
        <div className={styles.signup_heading_text}>Креирај сметка</div>

        <div className={styles.signup_label}>eMail</div>
        <input
          type="email"
          className={styles.signup_input}
          placeholder="Твојот eMail"
          onChange={(e) => setRegisterEmail(e.target.value)}
        />

        <div className={styles.signup_label}>Лозинка </div>
        <input
          type="password"
          className={styles.signup_input}
          placeholder="Избери лозинка"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <br></br>

        <Link href="user-dashboard/">
          <button className={styles.signup_btn} onClick={register}>
            Креирај сметка
          </button>
        </Link>
        {user?.email}
        <div className={styles.or_text}>Веќе имаш сметка?</div>

        <Link href="login">
          <button className={styles.login_btn}>Најави се</button>
        </Link>
      </div>
    </div>
  );
}

export default SignupDemo;
