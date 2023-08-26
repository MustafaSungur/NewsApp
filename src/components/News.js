import { View, Text, Image } from "react-native";
import styles from "./News_style";

import React from "react";

const News = ({ news }) => {
  return (
    <View style={styles.conteiner}>
      <Image source={{ uri: news.imageUrl }} style={styles.image} />
      <View style={styles.inner_content}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.content}>{news.description}</Text>
        <Text style={styles.author}>{news.author}</Text>
      </View>
    </View>
  );
};

export default News;
