import styles from "../styles/Home.module.css";
import RangeSlider from "./RangeSlider";
import { Transition } from "react-transition-group";
import { useState } from "react";
import Image from "next/image";

export default function SearchHeader(props) {
  const [isActive, setActive] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredAds, setFilteredAds] = useState(props.ads);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <div className={styles.header_search_box}>
        <div className={styles.search_icon}>
          <img src="../icons/search_icon.svg" alt="Search icon" />
        </div>

        <div className={styles.search_input}>
          <input
            type="text"
            className={styles.search_input_text}
            placeholder="Што бараш?"
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <div className={styles.search_undertext}>
            Одбери категорија, град или цена
          </div>
        </div>

        <div className={styles.search_filter} onClick={toggleClass}>
          <img src="../icons/filter_option.svg" alt="Search icon" />
        </div>
      </div>
      {isActive ? (
        <div className={styles.search_dropdown}>
          <div className={styles.search_dropdown_wrapper}>
            <div className={styles.search_label}>Одбери град</div>

            <select className={styles.cat_option} id="gradovi">
              <option value="Skopje">Цела Македонија</option>
              <option value="Kumanovo">Kumanovo</option>
              <option value="Tetovo">Tetovo</option>
              <option value="Veles">Veles</option>
              <option value="Kumanovo">Kumanovo</option>
              <option value="Tetovo">Tetovo</option>
              <option value="Veles">Veles</option>
              <option value="Kumanovo">Kumanovo</option>
              <option value="Tetovo">Tetovo</option>
              <option value="Veles">Veles</option>
            </select>

            <div className={styles.search_label}>Одбери категорија</div>

            <select className={styles.cat_option} id="gradovi">
              <option value="Skopje">Сите категории</option>
              <option value="Kumanovo">Недвижнини</option>
              <option value="Tetovo">Мобилни телефони</option>
              <option value="Veles">Veles</option>
              <option value="Kumanovo">Kumanovo</option>
              <option value="Tetovo">Tetovo</option>
              <option value="Veles">Veles</option>
              <option value="Kumanovo">Kumanovo</option>
              <option value="Tetovo">Tetovo</option>
              <option value="Veles">Veles</option>
            </select>

            <div className={styles.search_label}>Одбери под категорија</div>

            <select className={styles.cat_option} id="gradovi">
              <option value="Skopje">Сите</option>
              <option value="Kumanovo">Недвижнини</option>
              <option value="Tetovo">Мобилни телефони</option>
              <option value="Veles">Veles</option>
              <option value="Kumanovo">Kumanovo</option>
              <option value="Tetovo">Tetovo</option>
              <option value="Veles">Veles</option>
              <option value="Kumanovo">Kumanovo</option>
              <option value="Tetovo">Tetovo</option>
              <option value="Veles">Veles</option>
            </select>

            <div className={styles.search_label}>Опсег на цена</div>

            <RangeSlider />

            <div className={styles.search_action_buttons}>
              <button className={styles.clear_btn} onClick={toggleClass}>
                Избриши
              </button>
              <button className={styles.search_btn}>
                <img
                  className={styles.white_search_icon}
                  src="icons/search_icon.svg"
                  alt=""
                />{" "}
                Барај
              </button>
            </div>
          </div>{" "}
          {/*Dropdown wrapper*/}
        </div>
      ) : null}
    </div>
  );
}
