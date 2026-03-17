import { StyleSheet, Text, View, TextInput, label } from 'react-native';
import Titulo from '../Componentes/Titulo';
export default function Contato(){
    return(
        <View style={styles.container}>
        <Titulo></Titulo>
         <label style={styles.Entradas}> {/**Inputs para digitar */}
        Digite seu Nome: <input name="myInput" /></label>
        <label style={styles.Entradas}>
        Digite seu Email: <input name="myInput" /></label>
        <label style={styles.Entradas}>
        Sua mensagem: <input name="myInput" /></label>
        <button onClick={'Enviar'}></button>

        </View>)

}
{/*Criar variavel para Stylesheet / adicionar container e a entradas para o texto */}
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Entradas: {
    flexGrow: 'row',
    color: 'green',
    textAlign: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
  Botao: {
    paddingBottom: 50,
  }
})