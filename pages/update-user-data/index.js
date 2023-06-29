import React from "react";
import NavUserBar from "../../components/NavUserBar";
import style from "../../styles/User.module.css";
import Link from "next/link";

function Index() {
  return (
    <div>
      <NavUserBar />

      <div className={style.user_dashboard_wrapper}>
        <div className={style.user_menu}>
          <div className={style.user_data_label}>Име и Презиме</div>
          <input
            type="text"
            className={style.user_data_input}
            placeholder="Robert Mishovski"
          />

          <div className={style.user_data_label}>Телефон</div>
          <input
            type="tel"
            className={style.user_data_input}
            placeholder="078366289"
          />

          <div className={style.user_data_label}>Град</div>
          <input
            type="text"
            className={style.user_data_input}
            placeholder="Скопје"
          />

          <div className={style.user_data_label}>eMail адреса</div>
          <input
            type="text"
            className={style.user_data_input}
            placeholder="robertmish@gmail.com"
          />
          <br></br>
          <button className={style.update_btn}>Обнови податоци</button>
        </div>
      </div>
    </div>
  );
}

export default Index;
