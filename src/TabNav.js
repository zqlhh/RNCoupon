import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { HomePage, ClassifyPage, SearchPage } from "./page";
import { TabNavigator, TabBarBottom } from "react-navigation";

const TabNav = TabNavigator(
  {
    home: {
      screen: HomePage,
      navigationOptions: {
        tabBarLabel: "首页",
        tabBarIcon: ({ tintColor, focused }) => (
          <Image
            source={require("./images/nav_home.png")}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        )
      }
    },
    classify: {
      screen: ClassifyPage,
      navigationOptions: {
        tabBarLabel: "分类",
        title: "优惠券分类",
        headerLeft: <View />,
        tabBarIcon: ({ tintColor, focused }) => (
          <Image
            source={require("./images/nav_classify.png")}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        )
      }
    },
    search: {
      screen: SearchPage,
      navigationOptions: {
        tabBarLabel: "超级搜",
        title: "超级搜",
        headerLeft: <View />,
        tabBarIcon: ({ tintColor, focused }) => (
          <Image
            source={require("./images/nav_search.png")}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        )
      }
    },
    hot: {
      screen: SearchPage,
      navigationOptions: {
        tabBarLabel: "销量爆款",
        title: "销量爆款",
        initialRouteParams: {
          id: 1
        },
        headerLeft: <View />,
        tabBarIcon: ({ tintColor, focused }) => (
          <Image
            source={require("./images/nav_hot.png")}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        )
      }
    },
    today: {
      screen: SearchPage,
      navigationOptions: {
        tabBarLabel: "今日必拍",
        title: "今日必拍",
        headerLeft: <View />,
        tabBarIcon: ({ tintColor, focused }) => (
          <Image
            source={require("./images/nav_today.png")}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        )
      }
    }
  },
  {
    initialRouteName: "home",
    tabBarPosition: "bottom",
    tabBarComponent: TabBarBottom,
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    tabBarOptions: {
      activeTintColor: "#FF3C3C",
      inactiveTintColor: "#666"
    }
  }
);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
});

export default TabNav;
