import React from "react";
import style from "../styles/User.module.css";
import Link from "next/link";
import Image from "next/image";

function UserHeader() {
  return (
    <div>
      <div className={style.user_mobile_header}>
        <div className={style.user_mobile_header_container}>
          <div className={style.user_mobile_header_logo}>
            <Link href="/">
              <img src="icons/hitno.png" alt=" " />
            </Link>
          </div>
          <div className={style.user_mobile_header_menu_btn}>
            <img src="icons/user.svg" alt=" " />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHeader;
