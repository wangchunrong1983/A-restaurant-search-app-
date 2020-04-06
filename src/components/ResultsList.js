import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from '../components/ResultsDetail';

const ResultsList = ({ title, results }) => {
    return (
        <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList horizontal={true} data={results} keyExtractor={(result)=>result.id} 
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item})=>{
                    return <ResultsDetail result={item} /> }}
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

export default ResultsList; 

