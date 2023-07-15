
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const Home=({navigation})=> {
  const img1=require('../assets/img1.jpeg')
  const img2=require('../assets/img2.jpeg')
  const img3=require('../assets/img3.jpeg')
  return (
    <ScrollView style={{backgroundColor:'#708090'}}>
      <View style={styles.intro}>
          <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/jessi.jpg')} style={{borderColor:'green'}} />
            <Text style={{color:'white',fontSize:28,fontWeight:'bold'}}>JESSY</Text>
            <TouchableOpacity style={{justifyContent:'flex-end',alignSelf:'center'}}>
            <Octicons name="three-bars" size={24} color="white" style={{marginLeft:150}}/>
            </TouchableOpacity>
          </View>
      <View style={{flexDirection:'column'}}>
      <Text style={styles.txt}>
      <Ionicons name="ellipsis-horizontal-outline" size={24} color="#7fffd4" />
      Introduction</Text>
      <Text style={styles.text}>Hello</Text>
      <Text style={styles.text}>I'm Jessy</Text>
      <Text style={styles.text}>Walter</Text>
      <Text style={{color:'white',fontSize:14}}>Since beginning my journey as a freelance designer nearby 7 years ago, I 've done remote work for agencies, consulted for startup, and collaborated with talented people to create digital products.</Text>
      <TouchableOpacity style={{backgroundColor:'gold',borderRadius:10,padding:10, margin:20}}>
        <Text style={{alignSelf:'center', fontSize:18}} >Contact Me</Text>
      </TouchableOpacity>
      <View>
      <Image source={require('../assets/jessiimg.jpg')} style={{height:450, width:300, padding:40, alignSelf:'center'}}/>
      </View>
      </View>
      </View>
    <View style={styles.container}>
      <View>
      <Text style={styles.txt}>
      <Ionicons name="ellipsis-horizontal-outline" size={24} color="#7fffd4" />
      MySkill</Text>
      <Text style={{fontSize:26, color:'white'}}>Why Hire Me For Next Project?</Text>
      <Text style={{fontSize:16, color:'white'}}>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</Text>
      <TouchableOpacity style={{backgroundColor:'gold',borderRadius:10,padding:10,margin:20}}>
        <Text style={{alignSelf:'center', fontSize:18}} >Download CV</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.press} onPress={()=>{navigation.navigate('demo')}}>
      <Image source={img1} style={styles.img}/>
      </TouchableOpacity>
      <Text style={styles.txt}>
      <Ionicons name="ellipsis-horizontal-outline" size={24} color="#7fffd4" />
      Project 1
      </Text>
      <Text style={styles.heading}>Branding Nice Studio</Text>
      <Text style={styles.textheader}>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</Text>
      <Text style={{fontSize:16, color:'gold'}}><Entypo name="arrow-right" size={18} color="gold" style={{marginRight:15}}/>Read More</Text>
      <TouchableOpacity style={styles.press} onPress={()=>{navigation.navigate('mobile')}}>
      <Image source={img2} style={styles.img}/>
      </TouchableOpacity>
      <Text style={styles.txt}>
      <Ionicons name="ellipsis-horizontal-outline" size={24} color="#7fffd4" />
      Project 2</Text>
      <Text style={styles.heading}>Mobile Card App</Text>
      <Text style={styles.textheader}>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</Text>
      <Text style={{fontSize:16, color:'gold'}}><Entypo name="arrow-right" size={18} color="gold" style={{marginRight:15}}/>Read More</Text>
      <TouchableOpacity style={styles.press} onPress={()=>{navigation.navigate('studio')}}>
      <Image source={img3} style={styles.img}/>
      </TouchableOpacity>
      <Text style={styles.txt}>
      <Ionicons name="ellipsis-horizontal-outline" size={24} color="#7fffd4" />
      Project 3</Text>
      <Text style={styles.heading}>Resturant Landing Page</Text>
      <Text style={styles.textheader}>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</Text>
      <Text style={{fontSize:16, color:'gold'}}><Entypo name="arrow-right" size={18} color="gold" style={{marginRight:15}}/>Read More</Text>
      <TouchableOpacity style={{backgroundColor:'white',borderRadius:10,padding:10,margin:20,height:40}}>
        <Text style={{alignSelf:'center', fontSize:18}} >View All</Text>
      </TouchableOpacity>
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
    
      // <Demo/>
   
  );
}
export default Home;
const styles = StyleSheet.create({
   container: {
    flex: 1,
   // alignItems: 'center',
   // justifyContent: 'center',
    margin:40
  },
  img: {
    height:200,
    width: 230,
    borderRadius: 14,
    padding: 30,
  },
  txt: {
    fontSize:16,
    color:'#7fffd4',
    padding:10,
    
  },
  press:{
    alignSelf:'center',
    backgroundColor:'gray',
    padding:40,
    borderRadius:16,
    marginTop:100,
    transform:[{rotateY:'10deg'},{rotateZ:'10deg'}]
  },
  intro:{
    backgroundColor:'black',
    padding:20,
    marginTop:20

  },
  text:{
    color:'white',
    fontSize:40,
    fontWeight:'bold'
  },
  heading:{
    fontSize:28,
    color:'white'
  },
  textheader:{
    fontSize:16,
    color:'white'
  }

  
});
