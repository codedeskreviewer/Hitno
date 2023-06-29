import React from "react";
import NavUserBar from "../../components/NavUserBarBids";
import Image from "next/image";
import style from "../../styles/User.module.css";
import Link from "next/link";

function Index() {
  return (
    <div>
      <NavUserBar />
      <div className={style.bids_container}>
        <div className={style.all_bids_header}>Зачувани огласи</div>

        <div className={style.all_ads_wrapper}>
          <div className={style.ad_bids_box}>
            <div className={style.ad_bids_snippet}>
              <div className={style.ad_snippet_img}>
                <Image
                  src="https://mydomlux.com/wp-content/uploads/2021/02/1-10-1.jpeg"
                  alt=" "
                />
              </div>
              <div className={style.ad_snippet_content}>
                <div className={style.ad_snippet_title}>
                  Хитно продавам стан од 45 m2 во населба Тафталиџе
                </div>
                <div className={style.ad_snippet_price}>54,000 EUR</div>
              </div>
              <div className={style.delete_bookmark_btn}>
                <Image src="../icons/trash.svg" alt=" " />
              </div>
            </div>
          </div>

          <div className={style.ad_bids_box}>
            <div className={style.ad_bids_snippet}>
              <div className={style.ad_snippet_img}>
                <Image
                  src="https://mydomlux.com/wp-content/uploads/2021/02/1-10-1.jpeg"
                  alt=" "
                />
              </div>
              <div className={style.ad_snippet_content}>
                <div className={style.ad_snippet_title}>
                  Хитно продавам стан од 45 m2 во населба Тафталиџе
                </div>
                <div className={style.ad_snippet_price}>54,000 EUR</div>
              </div>
              <div className={style.delete_bookmark_btn}>
                <Image src="../icons/trash.svg" alt=" " />
              </div>
            </div>
          </div>

          <div className={style.ad_bids_box}>
            <div className={style.ad_bids_snippet}>
              <div className={style.ad_snippet_img}>
                <Image
                  src="https://mydomlux.com/wp-content/uploads/2021/02/1-10-1.jpeg"
                  alt=" "
                />
              </div>
              <div className={style.ad_snippet_content}>
                <div className={style.ad_snippet_title}>
                  Хитно продавам стан од 45 m2 во населба Тафталиџе
                </div>
                <div className={style.ad_snippet_price}>54,000 EUR</div>
              </div>
              <div className={style.delete_bookmark_btn}>
                <Image src="../icons/trash.svg" alt=" " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
