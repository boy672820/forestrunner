import React, { Component } from "react";
import { Image, View, FlatList } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Text,
  ListItem
} from "native-base";

import styles from "./styles";

const tree = require( "../../../assets/trees/seed.png" );

const datas = [
  "1 KM",
  "3 KM",
  "5 KM"
];

class Home extends Component {
  state = {
    datas,
    selected: datas[0]
  };

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

        <Content>
          <View style={styles.contentContainer}>
            <View style={styles.treeContainer}>
              <Image source={tree} style={styles.tree} />
            </View>

            <View style={styles.runlistContainer}>
              <FlatList
                data={this.state.datas}
                extraData={this.state}
                keyExtractor={(item, index) => String(index)}
                renderItem={({ item, index }) => {
                  return (
                    <ListItem
                      selected={this.state.selected === item}
                      onPress={() => this.setState({ selected: item })}
                    >
                      <Left>
                        <Text>
                          {item}
                        </Text>
                      </Left>
                      <Right>
                        <Icon name="ios-checkmark" />
                      </Right>
                    </ListItem>
                  );
                }}
              />
            </View>
            
            <View style={styles.submitContainer}>
              <Button
              rounded
              block
              onPress={() => this.props.navigation.navigate("Run")}
              >
                <Text>달리기 시작!</Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>
    );
	}
}

export default Home;
