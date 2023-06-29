import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import { useState, useEffect } from "react";
import { storage, db, firebaseApp } from "../../connect/firebase";
import Image from "next/image";

import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  where,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

const AdDetails = () => {
  const [ads, setAds] = useState([]);

  const router = useRouter();
  const adId = router.query.ad_id;

  const q = query(collection(db, "ads"), where("id", "==", adId));

  onSnapshot(q, (snapshot) => {
    let ads = [];
    snapshot.docs.forEach((doc) => {
      ads.push({ ...doc.data(), id: doc.id });
      setAds(ads);
      console.log(dataStatus);
    });
  });

  {
    ads.map((ad) => {
      return (
        <div key={ad.id}>
          <div className={styles.adstest}>
            <div>{ad.adTitle}</div>
          </div>
        </div>
      );
    });
  }
};

export default AdDetails;
