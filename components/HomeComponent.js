import React, { Component } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { Card, CardItem } from 'react-native-elements';

import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        promotions: state.promotions,
        partners: state.partners
    };
};

function RenderItem(props) {
    
    const {item} = props;

    if (props.isLoading) {
        return <Loading />;
    }
    if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }
    if (item) {
        console.log(item.id);
        return (
            <View>
                <Pressable
                    onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}>
                    <Card
                        featuredTitle={item.name}
                        image={{uri: baseUrl + item.image}}>

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

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem
                    item={this.props.campsites.campsites.filter(campsite => campsite.featured)[0]}
                    isLoading={this.props.campsites.isLoading}
                    errMess={this.props.campsites.errMess}
                />
                <Text style={{ textAlign: "center" }}>Featured Campsite</Text>
                <RenderItem
                    item={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
                    isLoading={this.props.promotions.isLoading}
                    errMess={this.props.promotions.errMess}
                />
                <Text style={{ textAlign: "center" }}>Featured Promotion</Text>
                <RenderItem
                    item={this.props.partners.partners.filter(partner => partner.featured)[0]}
                    isLoading={this.props.partners.isLoading}
                    errMess={this.props.partners.errMess}
                />
                <Text style={{ textAlign: "center" }}>Featured Partner</Text>
            </ScrollView>
        );
    }
}

                
export default connect(mapStateToProps)(Home);