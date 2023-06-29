import React from "react";
import UserHeader from "../../components/UserHeader";
import style from "../../styles/User.module.css";
import Link from "next/link";
import Image from "next/image";

function Index() {
  return (
    <div>
      <UserHeader />

      <div className={style.user_dashboard_wrapper}>
        <div className={style.user_menu}>
          <div className={style.user_menu_item && style.create_ad_btn}>
            <div className={style.menu_icon}>
              <img src="../icons/write.svg" alt="" />{" "}
            </div>
            <div className={style.menu_text}>
              <Link href="new-ad/">Креирај нов оглас</Link>
            </div>
          </div>
          <div className={style.user_menu_item}>
            <div className={style.menu_icon}>
              <img src="../icons/choice.svg" alt="" />
            </div>
            <div className={style.menu_text}>
              <Link href="my-ads/">Мои огласи</Link>
            </div>
          </div>

          <div className={style.user_menu_item}>
            <div className={style.menu_icon}>
              <img src="../icons/dollar.svg" alt="" />
            </div>
            <div className={style.menu_text}>
              <Link href="all-bids/">Мои понуди</Link>
            </div>
          </div>

          <div className={style.user_menu_item}>
            <div className={style.menu_icon}>
              <img src="../icons/heart.svg" alt="" />
            </div>
            <div className={style.menu_text}>
              <Link href="my-bookmarks/">Зачувани огласи</Link>
            </div>
          </div>

          <div className={style.user_menu_item}>
            <div className={style.menu_icon}>
              <img src="../icons/settings.svg" alt="" />
            </div>
            <div className={style.menu_text}>
              <Link href="update-user-data/">Лични податоци</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
