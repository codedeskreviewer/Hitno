import styles from "../../styles/Home.module.css";
import React from "react";
import { collection, getDocs, orderBy } from "firebase/firestore";
import { firebaseApp, storage, db } from "../../connect/firebase";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import Head from "next/head";
import HomeFooter from "../../components/HomeFooter";
import Image from "next/image";

export default class AdPost extends React.Component {
  async router() {
    adId = router.query.slug;
  }

  constructor(props) {
    super(props);
    this.state = { ads: [] };
    this.init.bind(this);
    this.getImgUrl.bind(this);
    this.getAds.bind(this);
    this.init();
  }

  async init() {
    let adsCollectionRef = collection(db, "ads");

    const data = await getDocs(adsCollectionRef);
    let ads = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    this.setState({ ads: ads });

    let adsReady = setInterval(() => {
      if (Object.keys(this.state.ads).length > 0) {
        clearInterval(adsReady);
        ads.map((ad, index) => {
          this.getImgUrl(ad, index);
        });
      }
    }, 100);
  }

  async getImgUrl(ad, index) {
    let imgRef = ref(storage, "ad_images/" + ad.adImg);
    let state = Object.assign({}, this.state);
    getDownloadURL(imgRef).then((url) => {
      if (typeof state.ads[index].previewImg == "undefined") {
        state.ads[index].previewImg = url;
        this.setState(state);
      }
    });
  }

  getAds() {
    return this.state.ads
      .filter((ad) => ad.adTitle.toLowerCase().includes(""))
      .map((ad) => {
        return (
          <div key={ad.id}>
            <Head>
              <title>{ad.adTitle}</title>
              <meta name="description" content={ad.adDesc} />
              <link rel="icon" href="/favicon.ico" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              ></meta>
            </Head>
            <div className={styles.ad_container}>
              <div className={styles.single_ad_nav_icons}>
                <div className={styles.nav_icons_wrapper}>
                  <div className={styles.single_ad_back_btn}>
                    <img src="/../../icons/left.svg" alt=" " />
                  </div>
                  <div className={styles.single_ad_like_btn}>
                    <img src="/../../icons/heart.svg" alt=" " />
                  </div>
                </div>
              </div>

              <img
                className={styles.single_ad_img}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/hitno-97e2f.appspot.com/o/ad_images%2F00520ad1-2ded-416e-a8b2-898b1849c97ftwo-sisters-cellar-ridge-construction-img_ce51fef70f31cdf7_4-5532-1-942a31e.jpeg" +
                  ad.adImg +
                  "?alt=media&token=0f97fd0c-8a14-4d0f-b715-3288a4a226ba"
                }
                alt=" "
              />
              <div className={styles.ad_title}>{ad.ad_title}</div>
              <div className={styles.ad_location}>
                <img src="/../../icons/pin.svg" alt=" " /> {ad.ad_location}
              </div>
              <div className={styles.ad_desc}>{ad.adDesc}</div>
              <div className={styles.currency}>
                ${ad.product_price} {ad.AdCurrency}
              </div>

              <div className={styles.ad_phone}>
                {" "}
                <img src="/../../icons/phone.svg" alt="" /> 078 366 289
              </div>

              <div className={styles.bid_container}>
                <input
                  type="number"
                  className={styles.bid_input}
                  placeholder="4,800"
                ></input>{" "}
                $<br></br>
                <button className={styles.send_bid_btn}>Испрати понуда</button>
              </div>
            </div>
          </div>
        );
      });
  }

  render() {
    return (
      <div>
        <div className={styles.desktop_header}>
          <div className={styles.desktop_size}>
            <div className={styles.desktop_logo}>
              <img src="/icons/hitno.png" alt=" " />
            </div>
            <div className={styles.desktop_menu_btn}>
              <img src="/icons/more.svg" alt=" " />
            </div>
          </div>
        </div>

        <div className={styles.desktop_container}>
          <div className={styles.desktop_filter_section}>
            {/*<HomeCategories />*/}
          </div>

          <div className={styles.container}>
            {this.getAds()}

            <HomeFooter />
          </div>

          <div className={styles.desktop_signup_secton}>
            <div className={styles.desktop_signup_header}>
              Продади се за 24 часа!
            </div>
            <div className={styles.desktop_signup_buttons}>
              <div className={styles.d_signup_btn}>
                <img src="../icons/facebook.svg" alt="" /> Зачлени се со
                Facebook
              </div>
              <div className={styles.d_signup_btn}>
                <img src="/icons/google.svg" alt=" " /> Зачлени се со Google
              </div>
            </div>

            <div className={styles.or_splitter}>
              <div className={styles.split_line}></div>
              <div className={styles.split_text}>or</div>
              <div className={styles.split_line}></div>
            </div>
            <div className={styles.email_signup_btn}>Зачлени се со eMail</div>
            <div className={styles.terms_text}>
              Зачленувајќи се, се сложуваш со нашата
              <a href=""> Полиса на Корисници</a> и
              <a href=""> Полиса на приватност</a>, вклучувајќи и
              <a href=""> Употреба на колачиња.</a>
            </div>

            <div className={styles.already_have_text}>
              Веќе имаш сметка кај нас?
            </div>
            <div className={styles.d_signin_btn}>Најави се</div>
          </div>
        </div>
      </div>
    );
  }
}
