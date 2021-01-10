import React  from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './../assets/styles/index'

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
      <Text style={styles.title}>{ item.quantidade } { tipos[ item.tipo ] } { item.descricao }</Text>
      <TouchableOpacity onPress={ incrementarItem }>
        <Text style={styles.botaoItem}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={ diminuirItem }>
        <Text style={styles.botaoItem}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={ removerItem }>
        <Text style={styles.botaoItem}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Item;