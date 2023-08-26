import React from "react";
import { ScrollView, Image } from "react-native";
import styles from "./News_banner_styles";
import news_banner_data from "../repository/news_banner_data.json";
import { ScrollViewBase } from "react-native";

const News_banner = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {news_banner_data.map((banner) => (
        <Image
          key={banner.id}
          source={{ uri: banner.imageUrl }}
          style={styles.image}
        />
      ))}
    </ScrollView>
  );
};
export default News_banner;
