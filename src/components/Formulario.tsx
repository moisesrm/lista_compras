import React  from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './../assets/styles/formulario'
import { Picker } from '@react-native-picker/picker';

const Formulario = ({ valDesc,acaoDesc, valQtd,acaoQtd, valTipo,acaoTipo, acaoBtn })=> {
  return (
    <View style={ styles.secaoFormulario }>
      <View style={ styles.formulario }>
        <TextInput
          style={ styles.campos }
          onChangeText={ texto => acaoDesc(texto) }
          value={ valDesc }
          placeholder='Item'
        />

        <TextInput
          style={ styles.campos }
          onChangeText={ texto => acaoQtd(texto) }
          value={ valQtd }
          placeholder='Quantidade'
        />

        <Picker
          style={ styles.campos }
          selectedValue={ valTipo }
          onValueChange={ valor => acaoTipo(valor) }
        >
          <Picker.Item label="-" value="" />
          <Picker.Item label="Caixa(s)" value="caixa" />
          <Picker.Item label="Fardo(s)" value="fardo" />
          <Picker.Item label="g(s)" value="g" />
          <Picker.Item label="Kg(s)" value="kg" />
          <Picker.Item label="Pacote(s)" value="pacote" />
        </Picker>

        <TouchableOpacity onPress={ acaoBtn } style={ styles.botao }>
          <Text style={styles.txtBotao}>Adicionar Item</Text>
        </TouchableOpacity>

      </View >
      <View style={ styles.separador }></View>
    </View >
  );
}

export default Formulario;