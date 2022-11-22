import { View, StyleSheet, ScrollView, Linking } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { SafeAreaView } from 'react-native-safe-area-context'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import 'react-native-gesture-handler';
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg'
import { Pressable } from 'react-native'

export default function Details({navigation, route}) {
  const planet = route.params.planet;
  const {name, description, rotationTime, revolutionTime, radius, avgTemp, wikiLink} = planet;
  console.log("planet->", planet);

  const renderImage = () =>{
    switch(name){
      case "mercury":
      return<MercurySvg/>;
      case "venus":
        return<VenusSvg/>;
      case "earth":
      return<EarthSvg/>;
      case "mars":
        return<MarsSvg/>;
      case "jupiter":
      return<JupiterSvg/>;
      case "saturn":
        return<SaturnSvg/>;
      case "uranus":
      return<UranusSvg/>;
      case "neptune":
        return<NeptuneSvg/>;
    }
  };

  const PlanetSection = ({title, value})=>{
    return(
      <View style={styles.PlanetSection}>
        <Text preset='h5' style={{textTransform: 'uppercase'}}>{title}</Text>
        <Text preset='h2'>{value}</Text>
      </View>
    )
  };
  const onPressLink = ()=>{
    Linking.openURL(wikiLink)
  }

  return (
    <SafeAreaView style={styles.container}>
        <PlanetHeader backBtn={true}/>
        <ScrollView>
          <View style={styles.imgView}>
            {renderImage(name)}
          </View>
          <View style={styles.detailsView}>
            <Text preset='h1' style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.source}>
            <Text>Source: </Text>
            <Pressable onPress={onPressLink}>
              <Text preset='h5' style={styles.wikipedia}>Wikipedia</Text>
            </Pressable>
            </View>
          </View>
          <View style={{height: 40}}/>
          <PlanetSection title="Rotation Time" value={rotationTime}/>
          <PlanetSection title="REVOLUTION TIME" value={revolutionTime}/>
          <PlanetSection title="RADIUS" value={radius}/>
          <PlanetSection title="AVG TEMPARATURE" value={avgTemp}/>
        </ScrollView>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: colors.black,
    },
    imgView:{
      marginTop: spacing[8],
      alignItems: "center",
      justifyContent: "center",
    },
    detailsView:{
      marginTop: 10,
      marginHorizontal: spacing[6],
      alignItems:'center',
    },
    name:{
      textTransform: 'uppercase',
      textAlign: 'center'
    },
    description:{
      textAlign: 'center',
      marginTop: spacing[5],
      lineHeight: 21,
    },
    source:{
      flexDirection: 'row',
      textAlign: 'center',
      marginTop: spacing[5],
    },
    wikipedia:{
      textDecorationLine: 'underline',
    },
    PlanetSection:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: spacing[5],
      paddingVertical: spacing[5],
      borderWidth: 1,
      borderColor: colors.green,
      marginHorizontal: spacing[6],
      marginBottom: spacing[4],
    }
})