const React = require("react-native");
const { Dimensions } = React;
const win = Dimensions.get("window");

const tile_width = win.width / 9,
    tile_half_width = tile_width / 2,
    tile_half_height = tile_width / 3 * 2;


export default {
    contentContainer: {
        flex: 1
    },

    gardenContainer: {
        flex: 1,
        flexDirection: "colomn",
    },
    row: {
        flexDirection: "row",
    },
    tile: {
        width: tile_width,
        height: tile_width
    },

    diamondNarrow: {
        width: tile_half_height,
        height: tile_half_width
    },
      diamondNarrowTop: {
        width: 0,
        height: 0,
        borderTopWidth: tile_half_width,
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        // borderLeftWidth: tile_half_height,
        borderLeftWidth: tile_half_width,
        borderRightColor: 'transparent',
        // borderRightWidth: tile_half_height,
        borderRightWidth: tile_half_width,
        // borderBottomColor: '#fff',
        borderBottomWidth: tile_half_width,
    },
      diamondNarrowBottom: {
        width: 0,
        height: 0,
        borderTopWidth: tile_half_width,
        // borderTopColor: '#fff',
        borderLeftColor: 'transparent',
        // borderLeftWidth: tile_half_height,
        borderLeftWidth: tile_half_width,
        borderRightColor: 'transparent',
        // borderRightWidth: tile_half_height,
        borderRightWidth: tile_half_width,
        borderBottomColor: 'transparent',
        borderBottomWidth: tile_half_width,
    }
};