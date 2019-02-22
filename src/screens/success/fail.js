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

const deadSeed = require( "../../../assets/trees/dead-seed.png" );

class Fail extends Component {
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
                        <Text style={styles.subject}>실패</Text>
                        <Text style={styles.supplement}>다음에는 성공하실 수 있어요!</Text>
                    </View>

                    <View style={styles.sproutContainer}>
                        <Image source={deadSeed} style={styles.sprout} />
                    </View>

                    <View style={styles.submitContainer}>
                        <Button
                        rounded
                        block
                        onPress={() => this.props.navigation.navigate( "Run" )}
                        >
                            <Text style={styles.submitText}>이번에는 꼭!</Text>
                        </Button>
                    </View>
                </View>
            </Container>
        );
    }
}

export default Fail;