/**
 * Created by sujiexu on 17/5/8.
 */
import React,{ Component } from 'react';
import {
    Button,View, Text,
} from 'react-native';

class MyNotificationsScreen extends Component{
    static navigationOptions = {
        tabBarLabel:'个人中心',
        title:'个人中心'
    };
    render(){
        return (
            <View>
                <Text>
                    个人中心页
                </Text>
            </View>
        )
    }
}

export default MyNotificationsScreen;