import React from "react";
import { ScrollView, StyleSheet,SafeAreaView } from "react-native";

export const Layout = () => {
    return(
      <SafeAreaView>
        <ScrollView style={styles.ScrollView}>

        </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    scrollView: {
      backgroundColor: '#08081B',
      marginHorizontal: 20,
    },
  });

export default Layout;