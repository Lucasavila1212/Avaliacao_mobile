import { StyleSheet, Text, View } from 'react-native';

export default function Titulo(){
    return(
        <View style={styles.container}>
        <Text style={styles.Titulo}>Titulo atividade</Text>
        </View>)
}
const styles = StyleSheet.create({
    Titulo:{
        height: 500,
        fontSize: 20,
        justifyContent: 'center',
        justifyItems: 'center',
        color: 'red',
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})