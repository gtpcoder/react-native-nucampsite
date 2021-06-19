import React, { Component } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { Card, CardItem } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';

function RenderItem({ item }) {
    if (item) {
        console.log(item.id);
        return (
            <View>
                <Pressable
                    onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}>
                    <Card
                        featuredTitle={item.name}
                        image={require('./images/react-lake.jpg')}
                    >
                        <Text style={{ margin: 10 }}>
                            {item.description}
                        </Text>
                    </Card>
                </Pressable>
            </View>
        );
    }
    return <View />;
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            promotions: PROMOTIONS,
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem
                    item={this.state.campsites.filter(campsite => campsite.featured)[0]}
                />
                <Text style={{ textAlign: "center" }}>Featured Campsite</Text>
                <RenderItem
                    item={this.state.promotions.filter(promotion => promotion.featured)[0]}
                />
                <Text style={{ textAlign: "center" }}>Featured Promotion</Text>
                <RenderItem
                    item={this.state.partners.filter(partner => partner.featured)[0]}
                />
                <Text style={{ textAlign: "center" }}>Featured Partner</Text>
            </ScrollView>
        );
    }
}

export default Home;