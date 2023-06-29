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
        <div className={style.all_bids_header}>Избери оглас</div>

        <div className={style.all_ads_wrapper}>
          <Link href="my-bids/">
            <div className={style.ad_bids_box}>
              <div className={style.ad_bid_content}>
                <div className={style.ad_bid_title}>
                  Хитно продавам стан од 45 m2 во населба Тафталиџе
                </div>
                <div className={style.ad_bid_amount}>164 Добиени понуди</div>
              </div>
              <div className={style.ad_bid_action_btn}>
                <img src="../icons/next.svg" alt="" />
              </div>
            </div>
          </Link>

          <Link href="my-bids/">
            <div className={style.ad_bids_box}>
              <div className={style.ad_bid_content}>
                <div className={style.ad_bid_title}>
                  Хитно продавам стан од 45 m2 во населба Тафталиџе
                </div>
                <div className={style.ad_bid_amount}>2 Добиени понуди</div>
              </div>
              <div className={style.ad_bid_action_btn}>
                <img src="../icons/next.svg" alt="" />
              </div>
            </div>
          </Link>

          <Link href="my-bids/">
            <div className={style.ad_bids_box}>
              <div className={style.ad_bid_content}>
                <div className={style.ad_bid_title}>
                  Хитно продавам стан од 45 m2 во населба Тафталиџе
                </div>
                <div className={style.ad_bid_amount}>13 Добиени понуди</div>
              </div>
              <div className={style.ad_bid_action_btn}>
                <img src="../icons/next.svg" alt="" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
