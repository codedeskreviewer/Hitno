import React from "react";
import NavUserBar from "../../components/NavUserBar";
import style from "../../styles/User.module.css";
import Link from "next/link";
import Image from "next/image";

function Moderation() {
  return (
    <div>
      <NavUserBar />
      <div className={style.ad_form_container}>
        <div className={style.success_icon}>
          <img src="../icons/check.svg" alt="fr" layout="fill" />
        </div>
        <div className={style.success_heading}>Вашиот оглас е објавен!</div>

        <div className={style.success_desc}>
          Вашиот оглас е успешно објавен, за најбрзо да најдете купувач, во
          секторот Мои понуди, следете ги понудите кои наскоро ќе почнете да ги
          добивате.
        </div>

        <div className={style.user_menu_item}>
          <Link href="../my-bids/">
            <div className={style.menu_icon}>
              <img src="../icons/dollar.svg" alt="ww" layout="fill" />
            </div>
          </Link>
          <div className={style.menu_text}>Следи понуди</div>
        </div>
      </div>
    </div>
  );
}

export default Moderation;
