import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, FlatList, Image} from 'react-native';
import { useState } from 'react';

export default function App() {

  const link = "https://asmapi.herokuapp.com/getUsers"
  const [data, setData] = useState([]);

  fetch(link).then(data => data.json())
      .then(data => setData(data))
      .then(err => {})

  return (
      <View style={styles.container}>
        <FlatList data={data}
                  renderItem={({item})=>{
                    return(
                        <View style={styles.items}>
                          <Image source={{uri: item.link}} style={{width:320, height:450}}/>
                          <Text style={{color:'black', fontSize:16, fontWeight:'bold', marginTop:10}}>{item.noidung}</Text>
                          <Text style={{fontSize:14,marginHorizontal:5,marginVertical:10}}>{item.ngay}</Text>
                        </View>
                    );
                  }}/>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    paddingHorizontal:15,
    flex: 1,
    backgroundColor: '#F0F2F5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  items: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal:20,
    paddingVertical:10,
    marginVertical:5,
    borderRadius:4,
    backgroundColor:'white',
    shadowColor:'#000',
    shadowOpacity: 0.3,
    shadowRadius:10,
    shadowOffset: {width:0, height:0}
  }

});
