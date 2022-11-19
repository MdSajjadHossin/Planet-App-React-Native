import { SafeAreaView, View, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'
import { PLANET_LIST } from '../data/planet-list'
import { spacing } from '../theme/spacing'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader/>
      <FlatList
      data={PLANET_LIST}
      keyExtractor={(item, index) => item.name}
      renderItem={({item, index}) =>{
        const {name, color} = item;
        return(
            <View style={styles.item}>
                <View style={{flexDirection: 'row'}}>
                <View style={[styles.circle, {backgroundColor:color}]}></View>
                <Text preset='h4' style={styles.itemName}>{name}</Text>
                </View>
                <AntDesign name="right" size={18} color="white"/>
            </View>
        );
      }}
      ItemSeparatorComponent = {()=> <View style={styles.itemSeparator}/>}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: colors.black,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    item:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: spacing[4],
    },
    list:{
        padding: spacing[5],
    },
    circle:{
        width: 30,
        height: 30,
        borderRadius: 20,
    },
    itemName:{
        textTransform: 'uppercase',
        marginLeft: spacing[4]

    },
    itemSeparator:{
        borderBottomColor: colors.white,
        borderWidth: 0.5,
        marginLeft: spacing[4],
        marginRight: spacing[4],
    }
})