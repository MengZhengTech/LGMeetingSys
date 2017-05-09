/**
 * Created by sujiexu on 17/5/8.
 */
import React,{ Component } from 'react';
import {
    View,Button,Text
} from 'react-native';

class HomeScreen extends Component{
    static navigationOptions = {
        tabBarLabel:'首页',
        title:'首页',
    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    render(){
        const {navigate} = this.props.navigation;
        return (
            <View><Text>首页</Text></View>
        )
    }
}

export default HomeScreen;