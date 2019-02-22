const React = require( "react-native" );
const { Dimensions } = React;
const win = Dimensions.get( "window" );

export default {
    contentContainer: {
        flex: 1
    },

    subjectContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20
    },
    subject: {
        fontSize: 40,
        fontWeight: "bold"
    },
    supplement: {
        paddingTop: 5
    },

    sproutContainer:{
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
    },
    sprout: {
        width: win.width / 3,
        height: win.height / 3,
        resizeMode: "contain",
    },

    submitContainer: {
        flex: 1,
        alignItems: "center",
        padding: 20
    },
    submitText: {
        color: "white"
    }
};