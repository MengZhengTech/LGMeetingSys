/**
 * Created by sujiexu on 17/5/8.
 */
'use strict';
import React,{ Component } from 'react';
import {
    Button, View, Text,
} from 'react-native';

class Setting extends Component{
    static navigationOptions = {
        tabBarLabel:'设置', //tab按钮名称
        title:'设置', //标题
    };
    render(){
        return (
            <View><Text>设置页面测试修改</Text></View>
        )
    }
}

export default Setting;