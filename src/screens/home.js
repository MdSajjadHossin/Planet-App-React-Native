import { SafeAreaView, View, StyleSheet, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'
import { PLANET_LIST } from '../data/planet-list'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'

const PlanetItem = ({item}) =>{
    const {name, color} = item;
    const navigation = useNavigation();
    return(
        <Pressable onPress={()=>{
            navigation.navigate('Details', {planet: item})
        }}
        style={styles.item}>
            <View style={{flexDirection: 'row'}}>
            <View style={[styles.circle, {backgroundColor:color}]}></View>
            <Text preset='h4' style={styles.itemName}>{name}</Text>
            </View>
            <AntDesign name="right" size={18} color="white"/>
        </Pressable>
    )
    
}



export default function Home({navigation}) {
    const[list, setList] = useState(PLANET_LIST);

    const renderItem=({item}) =>{
        return(
            <PlanetItem item={item}/>
        );
      };

    const searchFilter =(text)=>{
        const filteredList = PLANET_LIST.filter((item)=>{
            const itemName = item.name.toLowerCase();
            const userTypedText = text.toLowerCase();
    
            return itemName.indexOf(userTypedText) > -1;
    
        });
        setList(filteredList);
    }

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader/>
      <TextInput placeholder="Search Here"
        placeholderTextColor={colors.white}
        autoCorrect={false}
        style={styles.searchInput}
        onChangeText={(text)=>searchFilter(text)}
        />
      <FlatList
      data={list}
      keyExtractor={(item) => item.name}
      renderItem={renderItem}
      ItemSeparatorComponent = {()=> <View style={styles.itemSeparator}/>}
      />
    </SafeAreaView>
  );
};

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
    },
    searchInput:{
        padding: spacing[4],
        color: colors.white,
        borderBottomColor: colors.grey,
        borderWidth: 0.5,
        margin: spacing[5],
    }
})