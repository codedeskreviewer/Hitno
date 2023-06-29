import style from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

function AdPreview(props) {
  const { data } = props;
  return (
    <div>
      <Link href={`/ads/${data.slug}`}>
        <div className={style.ad_preview_box_desktop}>
          <div className={style.time_ago_desktop}>• 2h ago </div>
          <div className={style.desktop_ad_box_flex}>
            <div className={style.new_div}>This info</div>
            <div className={style.desktop_ad_img}>
              <Image src={data.ad_featured_img_url} alt="" />
            </div>
            <div className={style.desktop_ad_content}>
              <div className={style.desktop_ad_title}>{data.ad_title}</div>
              <div className={style.desktop_ad_location}>
                <Image src="../../icons/pin.svg" alt="" /> {data.ad_location}
              </div>
              <div className={style.desktop_price}>
                ${data.product_price} {data.currency}
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
      </Link>
    </div>
  );
}

export default AdPreview;
