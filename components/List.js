import React from 'react';
import {View, Text} from 'react-native';


export default function List(props){
    let item = []
    for (let x of props.items){
        item.push(<Text>{x}</Text>)
    }

    return(
        <View>
            {item}
        </View>
    )
}