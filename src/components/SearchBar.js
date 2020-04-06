import React from 'react' ;
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit })=> {
    return (
    <View style={styles.backgoundStyle}>
    
        <Feather name="search" style={styles.iconStyle} />
        <TextInput placeholder="Search" 
                   style={styles.inputStyle}
                   autoCapitalize="none"
                   value={term}
                   onChangeText={onTermChange}
                   onEndEditing={onTermSubmit}
        /> 
    </View>
    )}

const styles=StyleSheet.create({
    backgoundStyle: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 20
    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
   
})

export default SearchBar;