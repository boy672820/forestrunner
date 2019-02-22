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

class Garden extends Component {
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
                    <View style={styles.gardenContainer}>
                        {
                            function() {
                                let rows = [],
                                    i_len = 8,
                                    i_compare_max = i_len - 1,
                                    i_compare_min = 0;

                                let activeArray = [];

                                for ( let i = -1; i <= i_len; i += 1 ) {
                                    activeArray.push( i );
                                }

                                for ( let i = 1; i <= i_len; i += 1 ) {
                                    let activeBottom = { borderBottomColor: "#fff" },
                                        activeTop = { borderTopColor: "#fff" };

                                    rows.push(
                                        <View style={styles.row}>
                                            {
                                                function() {
                                                    let tiles = [];
                
                                                    for ( let j = 0; j <= i_len; j += 1 ) {

                                                        if ( activeArray.indexOf( j ) > 0 ) {
                                                            activeBottom = { borderBottomColor: "red" };
                                                            activeTop = { borderTopColor: "red" };
                                                        }

                                                        tiles.push(
                                                            <View style={styles.tile}>
                                                                <View style={styles.diamondNarrow}>
                                                                    <View style={[ styles.diamondNarrowTop, activeBottom ]} />
                                                                    <View style={[ styles.diamondNarrowBottom, activeTop ]} />
                                                                </View>
                                                            </View>
                                                        );

                                                        activeBottom = { borderBottomColor: "#fff" };
                                                        activeTop = { borderTopColor: "#fff" };
                                                    }
                                                    return tiles;
                                                }()
                                            }
                                        </View>
                                    );

                                    if ( i != 0 && i <= i_len / 2 ) activeArray.splice( i_compare_min, 1 );
                                    // activeArray.splice( i_compare_max, 1 );
                                    // console.log( activeArray );
                                }
                                return rows;
                            }()
                        }
                    </View>
                </View>
            </Container>
        );
    }
}

export default Garden;