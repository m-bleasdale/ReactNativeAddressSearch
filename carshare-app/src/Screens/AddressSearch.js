//React
import { StatusBar } from 'expo-status-bar';
import { React, useEffect, useState, useRef } from 'react';
import { View, SafeAreaView, TextInput, Text, TouchableWithoutFeedback, TouchableOpacity, KeyboardAvoidingView, FlatList } from 'react-native';

//Other libraries
import * as Location from 'expo-location';
import * as Haptics from 'expo-haptics';

//Icons
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

//Styles
import CommonStyles from '../Styles/CommonStyles';
import AddressSearchStyles from '../Styles/AddressSearchStyles';

//Components
import PoweredByGoogle from '../Components/PoweredByGoogle';
import backendAPI from '../BackendAPI';

//Store
import { WhereQuery } from '../Store/SearchQuery';

const AddressSearch = ({navigation}) => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [addressResults, setAddressResults] = useState([]);
    const [locationPermission, setLocationPermission] = useState();

    const searchBarRef = useRef(null);

    const {setWhere} = WhereQuery();

    //On first load 
    useEffect(() => {

        //Get location permission once when component loads
        async function getLocationPermission(){
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setLocationPermission(false);
            }
            else{ 
                setLocationPermission(true) 
            }
        }
        getLocationPermission();

        //Search bar auto focus
        setTimeout(() => {
            if (searchBarRef.current) {
                searchBarRef.current.focus();
            }
          }, 550); //Slide in animation is over by 550ms

    }, []);

    //Update results after search input changes
    function updateResults(searchTerm){

        if(searchTerm.length > 3){
            if(locationPermission === true){

                Location.getCurrentPositionAsync({}).then((currentLocation) => {
    
                    backendAPI.get(`/mapping/autocompleteAddress?input=${searchTerm}&location=${currentLocation.coords.latitude}%2C${currentLocation.coords.longitude}`)
                    .then((response) => {
                        setAddressResults(response.data.predictions);
                    })
                    .catch(err => {
                        console.error(err);
                    });
                });
    
            }
            else{
                backendAPI.get(`/mapping/autocompleteAddress?input=${searchTerm}`)
                .then((response) => {
                    setAddressResults(response.data.predictions);
                })
                .catch(err => {
                    console.error(err);
                });
            }
        }
        
    }

    //Components

    const AddressItem = (address) => {

        function truncateAddress(){

            const maxLength = 70;

            if(address.item.description.length <= maxLength){
                return address.item.description;
            }
            else{

                const terms = {
                    first: address.item.terms[0].value,
                    second: address.item.terms[1].value,
                    final: address.item.terms[address.item.terms.length - 1].value
                }

                const truncateOptions = {
                    first: `${terms.first}, ${terms.second}, ${terms.final}`,
                    second: `${terms.first}, ${terms.final}`,
                    third: terms.first
                }
                    
                if(truncateOptions.first.length <= maxLength){
                    return truncateOptions.first;
                }
                else if(truncateOptions.second.length <= maxLength){
                    return truncateOptions.second;
                }
                else{
                    return truncateOptions.third;
                }

            }

        }

        const BoldText = ({ text, matchingString }) => {
            const textArray = text.split(RegExp(matchingString, "ig"));
            const match = text.match(RegExp(matchingString, "ig"));

            const Strong = (props) => <Text style={{fontWeight: 600}}>{props.children}</Text>
            
            const content = [];
            textArray.forEach((item, index) => {
                content.push(
                    item,
                    index !== textArray.length - 1 && match && (
                        <Strong key={`strong-${index}`}>{match[index]}</Strong>
                    )
                );
            });

            return <Text numberOfLines={2} ellipsizeMode="tail" style={AddressSearchStyles.addressText}>{content}</Text>;
        }

        function handleTouch(){

            backendAPI.get(`/mapping/geocode/${address.item.place_id}`)
            .then((response) => {

                Haptics.selectionAsync();

                const coordinates = response.data.results[0].geometry.location;
                setWhere(displayAddress, [coordinates.lat, coordinates.lng]);

                navigation.goBack();

            })
            .catch(err => {
                console.error(err);
            });

        }

        const displayAddress = truncateAddress();

        return(
            <TouchableOpacity onPress={handleTouch}>

                <View style={AddressSearchStyles.addressItem}>
                    <View style={AddressSearchStyles.iconContainer}>
                        <Ionicons name="location-sharp" size={35} color="black" />
                    </View>
                    <BoldText 
                        text={displayAddress}
                        matchingString={searchPhrase}
                    />
                </View>

            </TouchableOpacity>
        )

    }

    const CurrentLocationButton = () => {

        if(locationPermission === true){

            function handleTouch(){
                Location.getCurrentPositionAsync({}).then((currentLocation) => {

                    const coordinates = currentLocation.coords;
                    setWhere('Current location', [coordinates.latitude, coordinates.longitude]);

                    Haptics.selectionAsync();

                    navigation.goBack();

                });
            }

            return(
                <TouchableOpacity onPress={handleTouch}>
                    <View style={AddressSearchStyles.currentLocation}>
                        <View style={AddressSearchStyles.iconContainer}>
                            <MaterialIcons name="my-location" size={35} color="black" />
                        </View>
                        <Text style={AddressSearchStyles.currentLocationText}>Current location</Text>
                    </View>
                </TouchableOpacity>
            )
        
        }
        else {
            return <></>;
        }

    }
     
    return (

        <SafeAreaView style={CommonStyles.topContainer}>
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="padding"
        >

            <StatusBar style="auto" />

            <View style={AddressSearchStyles.searchBarContainer}>
                <View style={AddressSearchStyles.searchBar}>

                <TouchableWithoutFeedback onPress={() => {
                    navigation.goBack(null);
                }}>

                    <Ionicons name="chevron-back-sharp" size={30} color="black" />
                </TouchableWithoutFeedback>

                <TextInput
                    style={AddressSearchStyles.searchBarText}
                    ref={searchBarRef}
                    placeholder='Search locations...'
                    placeholderTextColor="#898989"
                    value={searchPhrase}
                    onChangeText={(text) => {
                        setSearchPhrase(text);
                        updateResults(text);
                    }}
                />

                {searchPhrase && (

                    <TouchableWithoutFeedback onPress={() => {
                        setSearchPhrase('');
                        setAddressResults([]);
                    }}>

                        <Ionicons name="close-circle-outline" size={24} color="#898989" />

                    </TouchableWithoutFeedback>
                    
                )}

                </View>
            </View>
            
            
            {addressResults.length > 1 && searchPhrase.length > 3 
            ? 
            (
                //Render default list of results
                <FlatList 
                    style={AddressSearchStyles.addressListScroll}
                    data={addressResults}
                    keyboardShouldPersistTaps="always"
                    renderItem={(item) => AddressItem(item)}
                    keyExtractor={(item, index) => index.toString()}
                    ListFooterComponent={PoweredByGoogle}
                    ListFooterComponentStyle={AddressSearchStyles.addressListFooter}
                />            
                
            )
            : addressResults.length === 0 && searchPhrase.length > 3
            ?
            (
                //No results found
                <View style={AddressSearchStyles.noResults}>
                    <Text style={AddressSearchStyles.noResultsText}>No results</Text>
                    <PoweredByGoogle style={AddressSearchStyles.addressListFooter}/>
                </View>
            )
            :
            (
                //Give option for current location
                <CurrentLocationButton />
            )                   
                
            }

            
        </KeyboardAvoidingView>
        </SafeAreaView>
        
    )

}

export default AddressSearch;