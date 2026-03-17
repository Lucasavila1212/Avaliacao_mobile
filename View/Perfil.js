import { StyleSheet, Text, View } from 'react-native';
import Titulo from '../Componentes/Titulo';
export default function Perfil(){
    return(
        <View style={styles.container}>
            <Titulo></Titulo>
            <View><img style={styles.Imagem}src="https://img.cdndsgni.com/preview/12705601.jpg" alt="Katherine Johnson" /></View>
            <View>
          {/*Adicionando imagens */}  <img style={styles.Imagens}src="https://th.bing.com/th/id/OIP.tJvj5_yDkPgWKWw1_BMA-AHaHo?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Katherine Johnson" />
            <img style={styles.Imagens}src="https://th.bing.com/th/id/R.479ea673f5975f4a4e9c59a1d0cc378e?rik=wmyu5Ccjem918g&pid=ImgRaw&r=0" alt="Katherine Johnson" />
            <img style={styles.Imagens}src="https://img.freepik.com/vetores-gratis/ilustracao-de-icone-vetorial-realista-conceito-de-design-de-tempo-de-viagem-elementos-com-chapeu-de-bagagem-snork_134830-1951.jpg" alt="Katherine Johnson" />
            <img style={styles.Imagens}src="https://th.bing.com/th/id/R.e13d60811b4cf8601e8512c51e0566f8?rik=u8k5KB6QQ0s0kA&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fCar-PNG-Picture.png&ehk=1Lu0Yueg3oCq4PsY1ybiizF4Q90lrwKtMEkm3KAzsSs%3d&risl=&pid=ImgRaw&r=0" alt="Katherine Johnson" />
            </View>
{/*dentro da view*/}
            <Text style= {styles.nome}>Guilherme Rodrigues</Text>
            <Text >Idade: 25</Text>
           {/*Texto de informacoes */} <Text>Curso: Informática</Text>
            <Text style={styles.informacoes}>Descrição: Educado, simples e trabalhador</Text>

        </View>)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Imagem:{
    flex: 1,
    justifyContent: 'center', 
    justifyItems: 'center',
    width: 250,
    height: 250
  },
  Imagens:{
    flexDirection: 'row',
    flexWrap: 'wrap',

    width: 50,
    height: 50,
  },
  nome: {
    color: 'red',
    fontSize: 30
  },
  informacoes:{
    paddingBottom: 20
  }
})