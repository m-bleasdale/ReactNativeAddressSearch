import { StyleSheet } from 'react-native';

const primaryColour = '#0D9212';

const SearchFromHomeStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    titleContainer: {
        alignItems: 'center'
    },

    title: {
        fontSize: 50,
        fontWeight: '600',
        paddingBottom: 20
    },

    searchButton: {
        borderWidth: 1,
        borderColor: '#E6E6E6',
        borderRadius: 100,            
        padding: 10,
        width: '90%',

        backgroundColor: '#fff',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },

    searchLabel: {
        paddingLeft: '5%',
        fontSize: 15,
        fontWeight: '500'
    },

    searchLocations: {
        paddingLeft: '5%',
        fontSize: 18, 
        color: '#898989'
    },
    searchLocationsSelected: {
        paddingLeft: '5%',
        fontSize: 18,
        color: primaryColour
    }

});

export default SearchFromHomeStyles;

