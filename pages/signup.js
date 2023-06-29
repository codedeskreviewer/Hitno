import React from "react";
import SignupHeader from "../components/SignupHeader";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function Signup() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  return (
    <div>
      <SignupHeader />

      <div className={styles.signup_form_container}>
        <div className={styles.signup_heading_text}>Креирај сметка</div>
        <form>
          <div className={styles.signup_label}>eMail</div>
          <input
            type="email"
            className={styles.signup_input}
            placeholder="Твојот eMail"
            onChange={(event) => setRegisterEmail(event.target.value)}
          />

          <div className={styles.signup_label}>Лозинка </div>
          <input
            type="password"
            className={styles.signup_input}
            placeholder="Избери лозинка"
            onChange={(event) => setRegisterPassword(event.target.value)}
          />
          <br></br>

          <Link href="user-dashboard/">
            <button className={styles.signup_btn}>Креирај сметка</button>
          </Link>
        </form>

        <div className={styles.or_text}>Веќе имаш сметка?</div>

        <Link href="login">
          <button className={styles.login_btn}>Најави се</button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
