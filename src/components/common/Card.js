import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 8,
        borderWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 3,
        marginTop: 10,
        flex: 1,
        width: null,
        backgroundColor: '#ffffff',
        height: 50,
    }
};

export { Card };