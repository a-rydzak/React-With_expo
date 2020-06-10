import React from 'react';
import {
    FlatList,
    StyleSheet,
  } from "react-native";
import GoalItem from './GoalItem';

export default function GoalList(props){
    return(
      <FlatList data={props.goals} renderItem={itemData => (
          <GoalItem itemData={itemData}/>
        )}
        keyExtractor={(itemData, index) => index.toString()}
        contentContainerStyle={[viewStyles.topDown, { marginVertical: 20 }]}
      >
      </FlatList>
    )
}
//-----------------------------Styles and CSS
const viewStyles = StyleSheet.create({
    main: { flexDirection: "row", justifyContent: "center" },
    topDown: { flexDirection: "column", justifyContent: "center", width: "100%" },
  });