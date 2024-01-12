import { React, memo } from 'react';
import { View, Text, Image, } from 'react-native';

import AddressSearchStyles from '../Styles/AddressSearchStyles';

const PoweredByGoogle = () => {
    return(
        <View style={AddressSearchStyles.poweredBy}>
            <Text style={AddressSearchStyles.poweredByText}>powered by </Text>
            <Image source={require('../../assets/google-logo/google_on_white.png')} style={AddressSearchStyles.poweredByImage} />
        </View>
    )

}

export default memo(PoweredByGoogle);