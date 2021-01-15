import React  from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './../assets/styles/item'

const tipos = { 
  "": "",
  "caixa": "caixa(s)",
  "fardo": "fardo(s)",
  "g": "g(s)",
  "kg": "kg(s)",
  "pacote": "pacote(s)",
}

const Item = ({ item, incrementarItem, diminuirItem, removerItem })=> {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>
        { item.quantidade } { tipos[ item.tipo ] } { item.descricao }
      </Text>
      <View style={styles.botoes}>
        <TouchableOpacity onPress={ incrementarItem } style={styles.botao}>
          <Text style={styles.txtBotao}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ diminuirItem } style={styles.botao}>
          <Text style={styles.txtBotao}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ removerItem } style={styles.botao}>
          <Text style={styles.txtBotao}>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Item;