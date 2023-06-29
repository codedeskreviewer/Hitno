import React from "react";
import style from "../styles/User.module.css";
import Link from "next/link";
import Image from "next/image";

function NavUserBarBids() {
  return (
    <div>
      <div className={style.user_mobile_header}>
        <div className={style.user_mobile_header_container}>
          <div className={style.user_back_btn}>
            <Link href="user-dashboard/">
              <img src="../icons/left.svg" alt="" />
            </Link>
          </div>
          <div className={style.user_event_header}>Мои Понуди</div>

          <div className={style.user_menu_btn}>
            <Link href="user-dashboard/">
              <img src="../icons/menu_icon.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavUserBarBids;
