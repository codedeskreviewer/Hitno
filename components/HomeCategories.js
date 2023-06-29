import React from "react";
import style from "../styles/Home.module.css";
import Image from "next/image";

function HomeCategories() {
  return (
    <div>
      <div className={style.home_cats_wrapper}>
        <div className={style.cat_segment}>
          <div className={style.cat_icon}>
            <Image src="../icons/home.svg" alt="" />
          </div>
          <div className={style.cat_title}>Сите категории</div>
        </div>

        <div className={style.cat_segment}>
          <div className={style.cat_icon}>
            <Image src="../icons/car.svg" alt="" />
          </div>
          <div className={style.cat_title}>Моторни возила</div>
        </div>

        <div className={style.cat_segment}>
          <div className={style.cat_icon}>
            <Image src="../icons/business-and-trade.svg" alt="" />
          </div>
          <div className={style.cat_title}>Недвижнини</div>
        </div>

        <div className={style.cat_segment}>
          <div className={style.cat_icon}>
            <Image src="../icons/smartphone.svg" alt="" />
          </div>
          <div className={style.cat_title}>Мобилни телефони</div>
        </div>

        <div className={style.cat_segment}>
          <div className={style.cat_icon}>
            <Image src="../icons/computer.svg" alt="" />
          </div>
          <div className={style.cat_title}>Компјутери</div>
        </div>

        <div className={style.cat_segment}>
          <div className={style.cat_icon}>
            <Image src="../icons/couch.svg" alt="" />
          </div>
          <div className={style.cat_title}>Дом и градина</div>
        </div>

        <div className={style.cat_segment}>
          <div className={style.cat_icon}>
            <Image src="../icons/shoe.svg" alt="" />
          </div>
          <div className={style.cat_title}>Мода и облека</div>
        </div>

        <div className={style.cat_segment}>
          <div className={style.cat_icon}>
            <Image src="../icons/musical-instrument.svg" alt="" />
          </div>
          <div className={style.cat_title}>Музички инструменти</div>
        </div>

        <div className={style.cat_segment}>
          <div className={style.cat_icon}>
            <Image src="../icons/camera.svg" alt="" />
          </div>
          <div className={style.cat_title}>ТВ, Фото и мултимедиа</div>
        </div>

        <div className={style.cat_segment}>
          <div className={style.cat_icon}>
            <Image src="../icons/camera.svg" alt="" />
          </div>
          <div className={style.cat_title}>Услуги</div>
        </div>

        <div className={style.cat_segment}>
          <div className={style.cat_icon}>
            <Image src="../icons/worker.svg" alt="" />
          </div>
          <div className={style.cat_title}>Вработување</div>
        </div>
      </div>
    </div>
  );
}

export default HomeCategories;
