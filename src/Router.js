/**
 * Created by sujiexu on 17/5/8.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image
} from 'react-native';

import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MineScreen from './pages/Personal/Index';
import HomeScreen from './pages/Home/Index';
import SettingScreen from './pages/Setting/Index';

const MainScreenNavigator = TabNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions:{
            tabBarLabel:"首页",
            tabBarIcon:({tintColor,focused}) => (
                <Ionicons name={focused?'ios-home':'ios-home-outline'}
                    selectedIconName="ios-home" size={20}
                          style={{color:tintColor}}
                />
            ),
        }
    },
    Personal:{
        screen:MineScreen,
        navigationOptions:{
            tabBarLabel:"个人中心",
            tabBarIcon:({tintColor,focused}) => (
                <Ionicons name={focused?'ios-people':'ios-people-outline'}
                          selectedIconName="ios-people" size={20}
                          style={{color:tintColor}}
                />
            ),
        }
    },
    Setting:{
        screen:SettingScreen,
        navigationOptions:{
            tabBarLabel:"设置",
            tabBarIcon:({tintColor,focused}) => (
                <Ionicons name={focused?'ios-settings':'ios-settings-outline'}
                          selectedIconName="ios-settings" size={20}
                          style={{color:tintColor}}
                />
            ),
        }
    }
},{
    animationEnabled:false, //切换页面时 不显示动画
    tabBarPosition:'bottom', //显示在底端,android 默认显示在顶端
    swipeEnabled:false, //禁止左右滑动
    backBehavior: 'none', //按back 键是否跳转到第一个Tab none 为不跳转
    tabBarOptions:{
        activeTintColor:'#008AC9', //文字和图片选中颜色
        inactiveTintColor:'#999',//文字和图片默认颜色
        showIcon:true, //android 默认不显示icon 需要设置为true
        indicatorStyle:{height:0}, //android 中TabBar 下面会显示一条线,高度为0 后就不显示
        style:{
            backgroundColor:'#fff', //TabBar 颜色
        },
        labelStyle:{
            fontSize:14,
        }
    }
});

const SimpleApp = StackNavigator({
    Home:{screen:MainScreenNavigator},
});

export default SimpleApp;