import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import {
    Container,
    Content,
    Button,
    Icon
} from "native-base";
import MapView from "react-native-maps";

import styles from "./styles";

class Run extends Component {
    render() {
        const { width, height } = Dimensions.get('window');
        const ratio = width / height;
        const coordinates = {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0922 * ratio,
        };

        return (
            <Container>
                <View style={styles.contentContainer}>
                    <View style={styles.runinfoContainer}>
                        <View style={[ styles.distanceContainer, styles.infoRowContainer ]}>
                            <View style={styles.distance}>
                                <Text style={styles.distanceValue}>0.22</Text>
                                <Text style={styles.distanceValueUnit}>거리(KM)</Text>
                            </View>
                        </View>
                        {/** distanceContainer */}
                        <View style={[ styles.runSubContainer, styles.infoRowContainer ]}>
                            <View style={[ styles.runSub, styles.runSubAfter ]}>
                                <Text style={styles.runSubValue}>01:32</Text>
                                <Text style={styles.runSubValueUnit}>운동 시간(분:초)</Text>
                            </View>
                            <View style={styles.runSub}>
                                <Text style={styles.runSubValue}>52</Text>
                                <Text style={styles.runSubValueUnit}>칼로리</Text>
                            </View>
                        </View>
                        {/** runSubContainer */}
                    </View>
                    {/** runinfoContainer */}

                    <View style={styles.mapContainer}>
                        <MapView
                        style={styles.map}
                        initialRegion={coordinates}
                        />
                    </View>
                    {/** mapContainer */}
                </View>
            </Container>
        );
    }
}

export default Run;