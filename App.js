import { Text, SafeAreaView,View } from 'react-native';

import mascara from './css/estilo'

export default function App() {
  return (
    <SafeAreaView style={mascara.container}>
      <Text style={mascara.paragraph}>Aula 5</Text>
      <View style={mascara.cx1}></View>
      <View style={mascara.titulo}>SUZANO</View>
       <View style={mascara.cx2}></View>
    </SafeAreaView>
  );
}


