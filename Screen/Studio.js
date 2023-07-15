import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image,SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import react from 'react';

export default function Studio() {
  const[count,setCount]=react.useState(67);
   const [heartColor, setHeartColor] = react.useState('#7fffd4');
   const [shareColor, setShareColor] = react.useState('#7fffd4');
   const [likeTextColor, setLikeTextColor] = react.useState('white');
   
   const increment = () => {
    if (heartColor === '#7fffd4') {
      setCount(count + 1);
      setHeartColor('orange');
      setLikeTextColor('orange');
    } else {
      setCount(count - 1);
      setHeartColor('#7fffd4');
      setLikeTextColor('white');
    }
  };
   
  const handleSharePress = () => {
    setShareColor('orange');
    setHeartColor('#7fffd4');
  };

  const handleOnpress=()=>{
     increment();
  }

 
    return (
<SafeAreaView >
        <ScrollView>
          <View>
          <View style={{justifyContent:'center', alignSelf:'center',paddingTop:40,backgroundColor: "gray", padding:20}}>
            <Image source={require('../assets/img3.jpeg')} style={styles.img}/>
          
          <Text style={{fontSize:30, fontWeight:'bold',paddingTop:20,color:'#7fffd4'}}>Restaurant Landing page</Text>
          <Text style={{fontSize:18, color:'white'}}>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because those who do not know how to pursue pleasure rationally</Text>
          </View>
         <View style={{flexDirection:'row',backgroundColor:'gray',padding:20}}>
          <TouchableOpacity style={{backgroundColor:'#2f4f4f',borderRadius:8, padding:10}} onPress={handleOnpress}>
          <Entypo name="heart" size={24} color={heartColor} />
            </TouchableOpacity>
            <Text style={{color:likeTextColor, fontSize:22, marginLeft:10}}>Likes({count})</Text>
            <TouchableOpacity style={{backgroundColor:'#2f4f4f',borderRadius:8, padding:10, marginLeft:40}} onPress={handleSharePress}>
            <Entypo name="share" size={24} color={shareColor} />
            </TouchableOpacity>
            <Text style={{color:'white', fontSize:22, marginLeft:10}}>Share</Text>

            </View>
            <View style={{backgroundColor:'gray', padding:20}}>
                <Text style={{fontSize:20, color:'orange'}}>Categories</Text>
                <Text style={{color:'white',fontSize:16}}>App Design</Text>
                <Text style={{fontSize:20, color:'orange',paddingTop:20}}>Client</Text>
                <Text style={{color:'white',fontSize:16}}>Company Name</Text>

            </View>
          </View>
          <View style={{backgroundColor:'black',padding:20,justifyContent:'center',alignContent:'center'}}>
            <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center', paddingTop:10}}>
            <Image source={require('../assets/jessi.jpg')} style={{borderColor:'green'}} />
            <Text style={{color:'white',fontSize:28,fontWeight:'bold'}}>JESSY</Text>
            </View>
            <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',paddingTop:10}}>
            <Text style={{color:'white',fontSize:12}}>&copy; 2023 Freelancer - Phlox Elementor </Text>
            <Text style={{color:'white',fontSize:12}}>WordPress Theme. All rights reserved.</Text>
            <View style={{flexDirection:'row',paddingTop:20}}>

            <TouchableOpacity style={{backgroundColor:'#2f4f4f',borderRadius:4, padding:10}}>
            <MaterialCommunityIcons name="message-processing-outline" size={24} color="orange" />
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor:'#2f4f4f',borderRadius:4,marginLeft:8, padding:10}}>
            <Entypo name="linkedin" size={24} color="orange" />
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor:'#2f4f4f',borderRadius:4,marginLeft:8,padding:10}}>
            <Entypo name="instagram" size={24} color="orange" />
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor:'#2f4f4f',borderRadius:4,marginLeft:8,padding:10}}>
            <Entypo name="behance" size={24} color="orange" />
            </TouchableOpacity>
            </View>
            </View>
          </View> 
        </ScrollView>
        </SafeAreaView>      
    );
  }

const styles = StyleSheet.create({
 img:{
  height:280,
  width:320,
  borderRadius:18,
  marginLeft:10
 }
});
