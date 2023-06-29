import React from "react";
import styles from "../styles/Home.module.css";

function SignupHeader() {
  return (
    <div>
      <div className={styles.signup_header_container}>
        <div className={styles.signup_header_logo}>
          <img src="../icons/hitno_mk_logo.png" alt="Hitno.mk" />
        </div>
      </div>
    </div>
  );
}

export default SignupHeader;
