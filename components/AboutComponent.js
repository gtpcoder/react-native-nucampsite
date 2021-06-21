import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        partners: state.partners
    };
};

function RenderMission() {
    return (
        <View>
            <Card
                title='Our Mission'
                featuredTitle='Mission'
            >
                <Text style={{ margin: 10 }}>
                    We present a curated database of the best campsites
                    in the vast woods and backcountry of the World Wide
                    Web Wilderness. We increase access to adventure for
                    the public while promoting safe and respectful use
                    of resources. The expert wilderness trekkers on our
                    staff personally verify each campsite to make sure
                    that they are up to our standards. We also present
                    a platform for campers to share reviews on campsites
                    they have visited with each other.
                </Text>
            </Card>
        </View>
    );
}


class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    }

    render() {

        const renderPartner = ({ item }) => {
            if (item) {
                return (
                    <View>
                        <ListItem
                            title={item.name}
                            subtitle={item.description}
                            leftAvatar={{source: {uri: baseUrl + item.image}}}
                            >
                        </ListItem>
                        </View>
                );
            }
            return <View />
        };
        return (
            <ScrollView>
                <RenderMission />
                <Card
                    title='Community Partners'
                >
                    <FlatList
                        data={this.props.partners.partners}
                        renderItem={renderPartner}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(About);