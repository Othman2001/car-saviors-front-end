import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

export default class Success extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={(animation) => {
            this.animation = animation;
          }}
          style={{
            width: 300,
            height: 300,
            backgroundColor: "#eee",
          }}
          source={require("./animation.json")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingTop: 50,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
