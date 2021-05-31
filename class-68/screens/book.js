import * as React from 'react';
import {Text,TouchableOpacity,View,StyleSheet} from 'react-native';
import * as Permission from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';


export default class BookScreen extends React.Component{

  constructor(){
    super();
    this.state = {
      hasCameraPermission: null,
      scanned: false,
      scannedData: '',
      buttonState: 'normal'
    }
  }

  getCameraPermission=async()=>{

    const {status} = await Permission.askAsync(Permission.CAMERA);

    this.setState({

      hasCameraPermission: status === 'granted',
      buttonState: 'clicked',
      scanned: false
    });

  }

  handleBarCodeScanned = async({type, data})=>{
    this.setState({
      scanned: true,
      scannedData: data,
      buttonState: 'normal'

    })
  }
  render(){
    const hasCameraPermission = this.state.hasCameraPermission;
    const buttonState= this.state.buttonState;
    const scanned = this.state.scanned;

    if(buttonState === "clicked" && this.state.hasCameraPermission){
      return(
        <BarCodeScanner
        onBarCodeScanned = {scanned ? undefined : handleBarCodeScanned}
        />
)
      
    }
    else if(buttonState === 'normal'){
  return(
    <View style={styles.container}>

    <Text  style={styles.displayText}>
    {
     hasCameraPermission === true ? this.state.scannedData: "Request Camera Permission" 
    }
    </Text>

    <Text style={styles.displayText}>Dummy QR Code Output</Text>
    <TouchableOpacity 
    onPress = {this.getCameraPermission}>
      <Text style={styles.scanButton}>Scan QR Code</Text>
    </TouchableOpacity>
    </View>
  )
  }
}
}

const styles=StyleSheet.create({

container:{
  flex:1,
  alignItems:'center',
  justifyContent:'center'
},
displayText:{
  fontSize:15,
  textDecorationLine: 'underline'
},
scanButton:{
  backgroundColor: '#2196F3',
  padding:10,
  margin:10
}
})