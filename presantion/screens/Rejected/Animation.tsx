import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

export default class Animation extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
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
          source={require("./request.json")}
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
