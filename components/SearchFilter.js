import styles from "../styles/Home.module.css";
import DesktopRangeSlider from "./DesktopRangeSlider";
import Image from "next/image";

export default function SearchFilter() {
  return (
    <div>
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

          <DesktopRangeSlider />

          <div className={styles.search_action_buttons}>
            <button className={styles.clear_btn}>Избриши</button>
            <button className={styles.search_btn}>
              <img
                className={styles.white_search_icon}
                src="../icons/search_icon.svg"
                alt=""
                layout="fill"
              />{" "}
              Барај
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
