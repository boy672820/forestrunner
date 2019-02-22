import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {
    Container,
    Header,
    Right,
    Button,
    Icon
} from 'native-base';

import styles from './styles';

const sprout = require( "../../../assets/trees/sprout.jpg" );

class Success extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Right>
                        <Button
                        transparent
                        onPress={() => this.props.navigation.openDrawer()}
                        >
                            <Icon name="md-menu" />
                        </Button>
                    </Right>
                </Header>

                <View style={styles.contentContainer}>
                    <View style={styles.subjectContainer}>
                        <Text style={styles.subject}>성공했네요!</Text>
                        <Text style={styles.supplement}>축하드립니다:)bb</Text>
                    </View>

                    <View style={styles.sproutContainer}>
                        <Image source={sprout} style={styles.sprout} />
                    </View>

                    <View style={styles.submitContainer}>
                        <Button
                        rounded
                        block
                        onPress={() => this.props.navigation.navigate( "Run" )}
                        >
                            <Text style={styles.submitText}>더 하실 수 있으세요?</Text>
                        </Button>
                    </View>
                </View>
            </Container>
        );
    }
}

export default Success;