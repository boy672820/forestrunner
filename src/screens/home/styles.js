const React = require("react-native");
const { Dimensions } = React;
const win = Dimensions.get("window");

export default {
  contentContainer: {
    flex: 1
  },

  treeContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  tree: {
    width: win.width / 3,
    height: win.height / 3,
    resizeMode: "contain",
  },

  runlistContainer: {
    flex: 1
  },
  
  submitContainer: {
    flex: 1,
    padding: 20
  },
};
