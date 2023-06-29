import React from "react";
import { getAllSlugs, getPostData } from "../../data/ads";
import styles from "../../styles/SingleAd.module.css";
import Image from "next/image";

export default function BlogPost({ props }) {
  const { postData } = props;
  return (
    <div className={styles.ad_container}>
      <Image
        className={styles.single_ad_img}
        src={postData.ad_featured_img_url}
        alt=" "
      />
      <div className={styles.ad_title}>{postData.ad_title}</div>
      <div className={styles.ad_desc}>{postData.ad_description}</div>
    </div>
  );
}

export const getStaticPaths = () => {
  const paths = getAllSlugs();
  return {
    paths,
    fallback: false,
  };
};

export function getStaticProps({ params }) {
  const postData = getPostData(params.slug);

  return {
    props: { postData },
  };
}
