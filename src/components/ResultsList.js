import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from '../components/ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
    if(!results.length){
        return null
    }

    return (
        <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList horizontal={true} data={results} keyExtractor={(result)=>result.id} 
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item})=>{
                    return (
                    <TouchableOpacity onPress={()=> navigation.navigate('ResultsShow', 
                    {id: item.id} )}>
                    <ResultsDetail result={item} />
                    </TouchableOpacity>
                    ) }}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom:15
    }
})

export default withNavigation(ResultsList); 

