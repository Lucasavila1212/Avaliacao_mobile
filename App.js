import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './Componentes/Titulo';
import Perfil from './View/Perfil';
import Contato from './View/Contato'; {/**Importando..*/}
export default function App() {
  return (
    <View style={styles.container}>
      <Titulo></Titulo>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
