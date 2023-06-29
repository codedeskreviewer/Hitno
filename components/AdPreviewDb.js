import style from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { db } from "../connect/firebase";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { storage } from "../connect/firebase";
import { ref, getDownloadURL } from "firebase/storage";

function AdPreviewDb(props) {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const adsCollectionRef = collection(db, "ads");

    const getAds = async () => {
      const data = await getDocs(adsCollectionRef);
      setAds(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getAds();
  }, []);

  return (
    <div>
      {ads.map((ad) => {
        const imgUrl =
          "https://firebasestorage.googleapis.com/v0/b/hitno-97e2f.appspot.com/o/ad_images%2F" +
          ad.adImg +
          "?alt=media&token=3861a0b5-8227-4457-9fc0-46400fc3be85";

        return (
          <div className={style.ad_preview_box_desktop} key={ad.id}>
            <div className={style.time_ago_desktop}>• 2h ago</div>
            <div className={style.desktop_ad_box_flex}>
              <div className={style.desktop_ad_img}>
                <Image src={imgUrl} alt="" />
              </div>

              <div className={style.desktop_ad_content}>
                <div className={style.desktop_ad_title}>{ad.adTitle}</div>
                <div className={style.desktop_ad_location}>
                  <Image src="../../icons/pin.svg" alt="" /> Skopje
                </div>
                <div className={style.desktop_price}>
                  ${ad.adCurrency} {ad.adPrice}
                </div>

                <div className={style.ad_stats}>
                  <div className={style.ad_data}>
                    <div className={style.ad_data_icon}>
                      <Image src="../../icons/pin.svg" alt="" />
                    </div>
                    <div className={style.ad_data_number}>123</div>
                  </div>

                  <div className={style.ad_data}>
                    <div className={style.ad_data_icon}>
                      <Image src="../../icons/pin.svg" alt="" />
                    </div>
                    <div className={style.ad_data_number}>12</div>
                  </div>

                  <div className={style.ad_data}>
                    <div className={style.ad_data_icon}>
                      <Image src="../../icons/pin.svg" alt="" />
                    </div>
                    <div className={style.ad_data_number}>5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AdPreviewDb;
