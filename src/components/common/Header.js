import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText} </Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#3F51B5',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOpacity: .3,
        shadowOffset: { width: 1, height: 5},
    },
    textStyle: {
        paddingTop: 8,
        fontSize: 18,
        fontWeight: 'normal',
        color: '#ffffff',
        
    }
}

export { Header };