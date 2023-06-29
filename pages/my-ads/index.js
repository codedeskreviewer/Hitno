
import React from 'react'
import NavUserBar from '../../components/NavUserBarBids'
import style from '../../styles/User.module.css'
import Link from 'next/link'

function index() {
  return (
    <div>
<NavUserBar/>
<div className={style.bids_container}>

<div className={style.all_bids_header}>Твои огласи</div>

    <div className={style.all_ads_wrapper}>


    <div className={style.ad_bids_box}>
          
          <div className={style.ad_bid_content}>
           <div className={style.ad_bid_title}>Хитно продавам стан од 45 m2 во населба Тафталиџе</div>
           <div className={style.ad_price_amount}>2,200 EUR</div>
          </div>
          <div className={style.ad_action_btns}>
          <div className={style.ad_action_btn}>Измени</div>
          <div className={style.ad_action_btn}>Обнови</div>
          <div className={style.ad_action_btn}>Избриши</div>
          </div>
       </div>

        <div className={style.ad_bids_box}>
          
          <div className={style.ad_bid_content}>
           <div className={style.ad_bid_title}>Хитно продавам стан од 45 m2 во населба Тафталиџе</div>
           <div className={style.ad_price_amount}>2,200 EUR</div>
          </div>
          <div className={style.ad_action_btns}>
          <div className={style.ad_action_btn}>Измени</div>
          <div className={style.ad_action_btn}>Обнови</div>
          <div className={style.ad_action_btn}>Избриши</div>
          </div>
       </div>


        <div className={style.ad_bids_box}>
          
           <div className={style.ad_bid_content}>
            <div className={style.ad_bid_title}>Хитно продавам стан од 45 m2 во населба Тафталиџе</div>
            <div className={style.ad_price_amount}>2,200 EUR</div>
           </div>
           <div className={style.ad_action_btns}>
           <div className={style.ad_action_btn}>Измени</div>
           <div className={style.ad_action_btn}>Обнови</div>
           <div className={style.ad_action_btn}>Избриши</div>
           </div>
        </div>

    </div>


</div>



    </div>
  )
}

export default index