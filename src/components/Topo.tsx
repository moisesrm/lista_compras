import React  from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './../assets/styles/topo';

const Topo = ({ texto, voltarPag, mostrarForm, btnTexto, btnCor })=> {
  return (
    <View style={styles.item}>
      <View style={styles.botoes}>
        <TouchableOpacity onPress={ voltarPag } style={styles.botao}>
          <Text style={styles.txtBotao}>{ "<" }</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>
        { texto }
      </Text>
      <View style={styles.botoes}>
        <TouchableOpacity 
          onPress={ mostrarForm }
          style={ [styles.botao, { backgroundColor: btnCor }] }
        >
          <Text style={styles.txtBotao}>{ btnTexto }</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Topo;