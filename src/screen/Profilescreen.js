import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';

const Profilescreen = () => {
    return (
        <View style={styles.container}>
      
      <View style={styles.imageContainer}> 
        <Image style={styles.image}
                source={require('../../assets/nle.jpg')}
        />
      </View>  

      <View style={styles.detailContainer}> 
        <View style={styles.details}>
          <Text style={styles.detaillabel}>School</Text>
          <Text style={styles.detailcontent}>Cordova High School</Text>
        </View>

        <View style={styles.details}> 
          <Text style={styles.detaillabel}>Email address</Text>
          <Text style={styles.detailcontent}>nlechopper7@gmail.com</Text>
        </View>

        <View style={styles.details}> 
          <Text style={styles.detaillabel1}>Name </Text>
          <Text style={styles.detailcontent}>Bryson Potts</Text>
          <View style={styles.line}></View>
        </View>

        <View style={styles.details}> 
          <Text style={styles.detaillabel1}>Nick name</Text>
          <Text style={styles.detailcontent}>NLE chopper</Text>
          <View style={styles.line}></View>
        </View>

        <View style={styles.details}> 
          <Text style={styles.detaillabel1}>Emergency contact</Text>
          <Text style={styles.detailcontent}>+1 423-285-2478</Text>
          <View style={styles.line}></View>
        </View>
        
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            UPDATE PROFILE
          </Text>
        </TouchableOpacity>
      </View>

     



    </View>
    )
}

export default Profilescreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20 ,
      marginHorizontal:55
    },
  
    imageContainer: {
      flex:0.3,
      alignItems: 'center',
      justifyContent:'center'
    }, 
  
    image:{
      height: 120,
      width: 120,
      borderRadius:100
    },
  
    detailContainer:{
      flex:0.6,
    },
  
    details:{
      marginVertical: 14,
      
    },
  
    detaillabel:{
      color: '#bbb',
          fontSize: 17,
          marginBottom: 4
    },
    
    detailcontent:{
      fontSize:22
    },
  
    detaillabel1:{
      color: '#27b4e4',
          fontSize: 17,
          marginBottom: 4
    },
  
    buttonContainer:{
      flex: 0.1,
      justifyContent: 'center',
      alignItems:'center',
    },
  
    button:{
      width:'100%',
      height:40,
      backgroundColor:'#27b4e4',
      borderRadius:50,
      justifyContent:'center',
      alignItems:'center',
    },
  
    buttonText:{
      color:'white'
    },
    line: {
          width: '100%',
          height: 2,
          backgroundColor: 'lightgrey',
      },
  });
  