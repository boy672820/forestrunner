const React = require("react-native");
const { StyleSheet, Dimensions } = React;
const win = Dimensions.get("window");

export default {
    contentContainer: {
      flex: 1,
    },

    runinfoContainer: {
        flex: 1,
    },

    distanceContainer: {
        flex: 1,
        flexDirection: "row",
    },
    runSubContainer: {
        flex: 1,
        flexDirection: "row",
    },
    infoRowContainer: {
        borderBottomColor: "#000",
        borderBottomWidth: 1,
    },

    distance: {
        flex: 1,
        flexDirection: "colomn",
        justifyContent: "center",
        alignItems: "center"
    },
    runSub: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    runSubAfter: {
        borderRightColor: "#000",
        borderRightWidth: 1
    },

    distanceValue: {
        fontSize: 60,
        fontWeight: "bold"
    },
    distanceValueUnit: {
        fontsize: 12
    },
    runSubValue: {
        fontSize: 40,
    },
    runSubValueUnit: {
        fontsize: 12
    },

    mapContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
};
