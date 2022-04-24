import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

export default class Success extends React.Component {
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
        {this.props.isError ? (
          <LottieView
            ref={(animation) => {
              this.animation = animation;
            }}
            style={{
              width: 300,
              height: 300,
              backgroundColor: "#eee",
            }}
            source={require("./error.json")}
          />
        ) : (
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
            // OR find more Lottie files @ https://lottiefiles.com/featured
            // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
          />
        )}
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
