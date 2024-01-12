import { StatusBar } from 'expo-status-bar';
import { React } from 'react';
import { Text, View, FlatList, Button, SafeAreaView } from 'react-native';

import CommonStyles from '../Styles/CommonStyles';
import HomeStyles from '../Styles/HomeStyles';

import SearchFromHome from '../Components/SearchFromHome';


const HomeScreen = ({navigation}) => {

    return (

        <SafeAreaView style={CommonStyles.topContainer}>

            <StatusBar style="auto" />

            <View style={HomeStyles.titleContainer}>
                <Text style={HomeStyles.title}>Carshare</Text>
            </View>
            

            <SearchFromHome navigation={navigation}></SearchFromHome>

        </SafeAreaView>
        
    )

}

export default HomeScreen;