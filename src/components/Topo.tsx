import React  from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './../assets/styles/topo';

const Topo = ({ texto, removerItem })=> {
  return (
    <View style={styles.item}>
      <View style={styles.botoes}>
        <TouchableOpacity onPress={ removerItem } style={styles.botao}>
          <Text style={styles.txtBotao}>{ "<" }</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>
        { texto }
      </Text>
    </View>
  );
}

export default Topo;