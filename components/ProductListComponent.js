import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

const ProductListComponent = props => {

    return (
        <View style={styles.screen}>
            <FlatList keyExtractor={props.key} style={styles.flatList} data={props.listData} renderItem={props.renderItem} />
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatList: {
        width: '100%',
    }
})

export default ProductListComponent