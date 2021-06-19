import React, { Component } from 'react';
import { View, Text, ScrollView, Pressable, Linking } from 'react-native';
import { Card, CardItem } from 'react-native-elements';


class Contact extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Card
                        title = 'Contact Information'
                        wrapperStyle={{margin: 20}}
                    >
                            <Text>1 Nucamp Way</Text>
                            <Text>Seattle, WA 98001</Text>
                            <Text style={{marginBottom: 10}}>U.S.A.</Text>

                            <Text onPress={()=>{Linking.openURL('tel:1-206-555-1234');}} >Phone: 1-206-555-1234</Text>
                            <Text  onPress={()=>{Linking.openURL('mailto:campsites@nucamp.co');}} >Email: campsites@nucamp.co</Text>

                    </Card>
            </View>

            </ScrollView>
        );
    }
}

export default Contact;