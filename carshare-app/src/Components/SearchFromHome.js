import { React, useState } from 'react';
import { TouchableWithoutFeedback, View, Button, Text, TextInput, SafeAreaView, StyleSheet } from 'react-native';

import HomeStyles from '../Styles/HomeStyles'

import { WhereQuery } from '../Store/SearchQuery';

const SearchFromHome = ({navigation}) => {
    const [when, setWhen] = useState(null);
    
    const { description } = WhereQuery();

    const onSubmit = data => console.log(data);
    
    const WhereSearch = ({where}) => {

        function handlePress(){
            navigation.navigate('AddressSearch');
        }

        return (
            <TouchableWithoutFeedback onPress={handlePress}>

                <View style={HomeStyles.searchButton}>
                    <Text style={HomeStyles.searchLabel}>Where</Text>
                    {where
                        ? <Text numberOfLines={1} ellipsizeMode="tail" style={HomeStyles.searchLocationsSelected}>{where}</Text>
                        : <Text style={HomeStyles.searchLocations}>Search locations</Text>
                    }
                </View>

            </TouchableWithoutFeedback>
        )
    }

    const WhenSelect = () => {

        function handlePress(){
            navigation.navigate('WhenSelect');
        }

        return (
            <TouchableWithoutFeedback onPress={handlePress}>

                <View style={HomeStyles.searchButton}>
                    <View style={HomeStyles.whenInner}>
                        <View style={HomeStyles.whenButtonSection}>
                            <Text style={HomeStyles.searchLabel}>Pickup</Text>
                            <Text style={HomeStyles.searchLocations}>Add dates</Text>
                        </View>
                        <View style={HomeStyles.whenButtonSection}>
                            <Text style={HomeStyles.searchLabel}>Return</Text>
                        </View>
                    </View>
                </View>

            </TouchableWithoutFeedback>
        )
        
    }

    return (
        <SafeAreaView style={HomeStyles.container}>

            <WhereSearch where={description} />

            <WhenSelect />

            <Button title="Submit" onPress={onSubmit} />
        </SafeAreaView>
    );

}

export default SearchFromHome;