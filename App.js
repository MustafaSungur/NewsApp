import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text } from "react-native";
import news_data from "./src/repository/news_data.json";
import News from "./src/components/News";
import News_banner from "./src/components/News_banner";
export default function App() {
  const renderItem = ({ item }) => <News news={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>Global News</Text>
      <FlatList
        ListHeaderComponent={<News_banner />}
        keyExtractor={(item) => item.u_id.toString()}
        data={news_data}
        renderItem={renderItem}
      />
      <StatusBar style="auto" hidden={false} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",

    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
  logo: {
    fontSize: 35,
    fontWeight: "bold",
    padding: 10,
    marginLeft: 20,
  },
});
