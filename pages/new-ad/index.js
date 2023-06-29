import React from "react";
import Image from "next/image";
import NavUserBar from "../../components/NavUserBar";
import style from "../../styles/User.module.css";
import Link from "next/link";
import { categories } from "../../data/categories";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../connect/firebase";
import { useState, useEffect } from "react";
import { storage } from "../../connect/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { uuidv4 } from "@firebase/util";
import { serverTimestamp } from "@firebase/firestore";

function Index() {
  const [percent, setPercent] = useState(0);
  const [file, setFile] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [uniqueImgName, setUniqueImgName] = useState("");
  const [imgPrefixId, setImgPrefixId] = useState(v4());

  // Handle file upload event and update state
  function handleImageChange(event) {
    setFile(event.target.files[0]);
  }

  function handleUpload() {
    if (!file) {
      alert("Please choose a file first!");
    }

    const storageRef = ref(storage, `/ad_images/${imgPrefixId + file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setPreviewUrl(url);
          setImgUrl(url);
        });
      }
    );
  }
  const [adId, setadId] = useState(v4());
  const [userId, setuserId] = useState("robert12345");
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setsubCategory] = useState("");
  const [adTitle, setadTitle] = useState("");
  const [adDesc, setadDesc] = useState("");
  const [adPrice, setadPrice] = useState("");
  const [adCurrency, setadCurrency] = useState("EUR");
  const [adImg, setadImg] = useState("");
  const [ImgUrl, setImgUrl] = useState("");

  const [ads, setAds] = useState([]);

  const adsCollectionRef = collection(db, "ads");

  const createAd = async () => {
    await addDoc(adsCollectionRef, {
      adId: adId,
      userId: userId,
      mainCategory: mainCategory,
      subCategory: subCategory,
      adTitle: adTitle,
      adDesc: adDesc,
      adPrice: adPrice,
      adCurrency: adCurrency,
      adImg: imgPrefixId + adImg,
      imgUrl: ImgUrl,
      createdAt: serverTimestamp(),
    });
  };

  return (
    <div>
      <NavUserBar />
      <div className={style.ad_form_container}>
        <div className={style.new_ad_form}>
          <div className={style.ad_form_label}>Одбери категорија</div>
          <select
            className={style.cat_option}
            onChange={(e) => {
              setMainCategory(e.target.value);
            }}
            name="mainCategory"
            id="main-category"
          >
            <option key="defaultValue" value="Одбери Категорија">
              Одбери Категорија
            </option>
            {categories.map((item) => {
              return (
                <option key={item.cat_name} value={item.cat_name}>
                  {item.cat_name}
                </option>
              );
            })}
          </select>

          {mainCategory !== "" &&
            categories.find((item) => item.cat_name === mainCategory) &&
            categories.find((item) => item.cat_name === mainCategory)
              .subCategory && (
              <>
                <div className={style.ad_form_label}>Одбери под-категорија</div>
                <select
                  className={style.cat_option}
                  name="subCategory"
                  onChange={(e) => {
                    setsubCategory(e.target.value);
                  }}
                  id="sub-category"
                >
                  <option key="defaultValue" value="Одбери под-категорија">
                    Одбери под-категорија
                  </option>
                  {categories
                    .find((item) => item.cat_name === mainCategory)
                    .subCategory.map((item) => {
                      return (
                        <option key={item.sub_cat_name}>
                          {item.sub_cat_name}
                        </option>
                      );
                    })}
                </select>
              </>
            )}

          <div className={style.ad_form_label}>Наслов</div>
          <input
            type="text"
            className={style.ad_form_input}
            name="adTitle"
            onChange={(e) => {
              setadTitle(e.target.value);
            }}
            placeholder="Твојот наслов"
          />

          <div className={style.ad_form_label}>Опис на оглас</div>
          <textarea
            type="text"
            className={style.ad_form_textfield}
            name="description"
            onChange={(e) => {
              setadDesc(e.target.value);
            }}
            placeholder="Твојот опис"
          />

          <div className={style.ad_form_label}>Цена</div>

          <div className={style.price_wrapper}>
            <input
              type="number"
              name="adPrice"
              onChange={(e) => {
                setadPrice(e.target.value);
              }}
              className={style.ad_form_price_input}
              placeholder="Твојата цена"
            />

            <div className={style.currency_types_wrapper}>
              <div
                name="adCurrency"
                value="EUR"
                className={
                  adCurrency == "EUR"
                    ? style.currency_type_active
                    : style.currency_type
                }
                onClick={(e) => {
                  setadCurrency("EUR");
                }}
              >
                EUR
              </div>
              <div
                name="adCurrency"
                value="MKD"
                className={
                  adCurrency == "MKD"
                    ? style.currency_type_active
                    : style.currency_type
                }
                onClick={(e) => {
                  setadCurrency("MKD");
                }}
              >
                MKD
              </div>
            </div>
          </div>

          <div className={style.ad_form_label}>Избери слики</div>
          <input
            type="file"
            className={style.ad_photo}
            name="featured_image"
            onChange={(e) => {
              {
                setadImg(e.target.files[0].name);
              }
              handleImageChange(e);
            }}
          />

          <button className={style.uploadImgBtn} onClick={handleUpload}>
            Прикачи слика
          </button>

          <p
            className={
              percent === 0
                ? style.percent_progress
                : style.percent_progress_active
            }
          >
            {percent}% Прикачена
          </p>

          <div className={style.images_wrapper}>
            <div
              className={
                previewUrl === "" ? style.image_demo_hide : style.image_demo
              }
            >
              <img src={previewUrl} alt="" />
            </div>
          </div>

          <Link href="new-ad/moderation">
            <button className={style.publish_btn} onClick={createAd}>
              Објави
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
