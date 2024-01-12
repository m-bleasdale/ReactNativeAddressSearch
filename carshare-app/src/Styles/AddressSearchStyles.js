import { StyleSheet } from 'react-native';

const AddressSearchStyles = StyleSheet.create({
    searchBarContainer: {
        width: '100%',
        alignItems: 'center'
    },

    searchBar: {
        backgroundColor: '#fff',
        width: '93%',
        borderWidth: 1,
        borderColor: '#E6E6E6',
        borderRadius: 100,

        marginTop: 20,

        flexDirection: 'row',

        alignItems: 'center',

        paddingLeft: '2%'
    },

    searchBarText: {
        fontSize: 18,
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: '2%',
        width: '80%'
    },

    addressListScroll: {
        flexDirection: 'column',
        paddingTop: '2%'
    },

    addressItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '5%',
        paddingTop: '2%',
        paddingBottom: '2%',
        width: '80%'
    },

    addressText: {
        fontSize: 17,
        paddingLeft: '5%'
    },

    addressListFooter: {
        flex:1,
        alignItems: 'center'
    },

    currentLocation: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '5%',
        paddingTop: '4%'
    },

    currentLocationText: {
        fontSize: 20,
        paddingLeft: '4%'
    },

    iconContainer: {
        backgroundColor: '#E6E6E6',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        
        borderRadius: 12
    },

    poweredByContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    poweredBy: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: '1%',
        paddingBottom: '4%'
    },
    poweredByText: {
        fontSize: 16,
        position: 'relative',
        top: '-0.5%',
        color: '#898989'
    },
    poweredByImage: {
        resizeMode: 'contain',
        height: 40,
        width: 70,
    },

    noResults: {
        width: '100%',
        alignItems: 'center',
        paddingTop: '5%'
    },
    noResultsText: {
        fontSize: 20,
    }

});

export default AddressSearchStyles;