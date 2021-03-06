import * as React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native'
import { TouchableButton, Touchable, TouchableButtonStyle ,Label,LabelStyle} from '../components/StyledText'


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import httpService from '../service/http'
import LocalService from '../service/store'
export default class TabOneScreen extends React.Component {
  state = {
    token : '',
    type:1
  }
  onPressLogin = () =>{
    httpService.author().then((rs)=>{
      console.log(rs)
      this.setState({token:rs.data.access_token})
    })
  }
  onPressLogout = () =>{
    this.setState({token:''})
    LocalService.setToken('')
  }
  componentDidMount(){
      LocalService.getToken().then((tk)=>{
          if(tk.data != undefined){
               this.setState({token:tk.data.access_token})
          }
      })
  }
  render(){
    return (
      <View style={styles.container}>
        {/* <Text style={styles.title}>Tab One</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
        <Text>{this.state.token}</Text> */}
        {/* <Text>{this.state.token}</Text>  */}
        {
          this.state.token != '' ? 
          <TouchableButton onPress={this.onPressLogout}>
            <Label style={[LabelStyle.button, { fontWeight: "bold" }]}>logout</Label>
          </TouchableButton>
          :
          <TouchableButton onPress={this.onPressLogin}>
            <Label style={[LabelStyle.button, { fontWeight: "bold" }]}>login</Label>
          </TouchableButton>
        }
        {
           this.state.token != '' &&
           <View style={{display:'flex',flexDirection:'row',marginTop:10,marginBottom:10}}>
            <TouchableButton  onPress={()=>{this.setState({type:1})}}>
              <Label style={[LabelStyle.button, { fontWeight: "bold" }]}>Create</Label>
            </TouchableButton>
            <TouchableButton onPress={()=>{this.setState({type:2})}}>
              <Label style={[LabelStyle.button, { fontWeight: "bold" }]}>Read</Label>
            </TouchableButton>
            <TouchableButton onPress={()=>{this.setState({type:3})}}>
              <Label style={[LabelStyle.button, { fontWeight: "bold" }]}>Update</Label>
            </TouchableButton>
            <TouchableButton onPress={()=>{this.setState({type:4})}}>
              <Label style={[LabelStyle.button, { fontWeight: "bold" }]}>Delete</Label>
            </TouchableButton>
        </View>
        }
        
        {
          this.state.token != '' && this.state.type == 1 &&
          <View>
            <Text>Create</Text>

          </View>
        }
        {
          this.state.token != '' && this.state.type == 2 &&
          <View>
            <Text>Read</Text>
          </View>
        }
        {
          this.state.token != '' && this.state.type == 3 &&
          <View>
            <Text>Update</Text>
            
          </View>
        }
        {
          this.state.token != '' && this.state.type == 4 &&
          <View>
            <Text>Delete</Text>
            
          </View>
        }
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
