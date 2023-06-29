import React from "react";
import NavUserBar from "../../components/NavUserBarBids";
import style from "../../styles/User.module.css";
import Link from "next/link";
import Image from "next/image";

function Index() {
  return (
    <div>
      <NavUserBar />
      <div className={style.bids_container}>
        <div className={style.ad_stats_container}>
          <div className={style.ad_bids_snippet}>
            <div className={style.ad_snippet_img}>
              <img
                src="https://mydomlux.com/wp-content/uploads/2021/02/1-10-1.jpeg"
                alt=""
              />
            </div>
            <div className={style.ad_snippet_content}>
              <div className={style.ad_snippet_title}>
                Хитно продавам стан од 45 m2 во населба Тафталиџе
              </div>
              <div className={style.ad_snippet_price}>54,000 EUR</div>
            </div>
          </div>

          <div className={style.ad_stats_heading}>Статистика</div>

          <div className={style.ad_stats_wrapper}>
            <div className={style.ad_stats_box}>
              <div className={style.ad_stats_number}>238</div>
              <div className={style.ad_stats_label}>Прегледи</div>
            </div>

            <div className={style.ad_stats_box}>
              <div className={style.ad_stats_number}>3</div>
              <div className={style.ad_stats_label}>Понуди</div>
            </div>
          </div>
        </div>

        <div className={style.ad_bids_heading}>Мои понуди</div>
        <div className={style.bid_box}>
          <div className={style.bid_amount}>
            <div className={style.bid_amount_number}>2,200 EUR</div>
            <div className={style.bid_amount_label}>Понудена цена</div>
          </div>

          <div className={style.bid_actions}>
            <button className={style.bid_accept_btn}>Прифати</button>
            <button className={style.bid_deny_btn}>Одбиј</button>
          </div>
        </div>

        <div className={style.bid_box}>
          <div className={style.bid_amount}>
            <div className={style.bid_amount_number}>3,000 EUR</div>
            <div className={style.bid_amount_label}>Понудена цена</div>
          </div>

          <div className={style.bid_actions}>
            <button className={style.bid_accept_btn}>Прифати</button>
            <button className={style.bid_deny_btn}>Одбиј</button>
          </div>
        </div>

        <div className={style.bid_box}>
          <div className={style.bid_amount}>
            <div className={style.bid_amount_number}>1,800 EUR</div>
            <div className={style.bid_amount_label}>Понудена цена</div>
          </div>

          <div className={style.bid_actions}>
            <button className={style.bid_accept_btn}>Прифати</button>
            <button className={style.bid_deny_btn}>Одбиј</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
