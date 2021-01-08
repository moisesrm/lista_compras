import React, { Component } from 'react';
import Realm from 'realm';
import { 
  TextInput, View, TouchableOpacity, StyleSheet, 
  SafeAreaView, Text, ScrollView, VirtualizedList
} from 'react-native';
import { ItemSchema } from './assets/models/listaCompraSchema'
import {Picker} from '@react-native-picker/picker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: { fontSize: 20 },
  item: {
    backgroundColor: "#f9c2ff",
    paddingHorizontal: 8,
    marginVertical: 8,
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: "center"
  },
  botao: {
    backgroundColor: "#a30fb3",
    padding: 20,
    marginVertical: 8,
    fontSize: 20,
    textAlign: "center",
    color: "#FFF"
  },
  botaoItem: {
    backgroundColor: "#a30fb3",
    padding: 15,
    width: 50,
    marginVertical: 8,
    fontSize: 20,
    textAlign: "center",
    color: "#FFF",
    float: "right"
  },
  title: { 
    fontSize: 20,
    marginVertical: 8,
    width: 100
  },
  input: { 
    borderColor: '#f9c2ff',
    borderWidth: 1,
    height: 45,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 20,
    marginVertical: 8
  },
  select: { 
    borderColor: '#f9c2ff',
    borderWidth: 1,
    height: 45,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 20,
    marginVertical: 8,
    backgroundColor: "#fff"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

const Separator = () => ( <View style={styles.separator} /> );

const Item = ({ item, incrementarItem, diminuirItem, removerItem })=> {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{ item.quantidade } { item.tipo } { item.descricao }</Text>
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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      lista: [], 
      descricao: '', 
      quantidade: '',
      tipo: '',
    };
  }
  
  adicionaItem(){
    let descricao:string = this.state.descricao.trim();
    let quantidade:string = this.state.quantidade.trim();
    let tipo:string = this.state.tipo.trim();
    
    if( ( descricao.length || quantidade.length ) > 0 ){
      let lista = this.state.lista.reverse();
      lista.push({ descricao: descricao, quantidade:quantidade, tipo:tipo });
      lista = lista.reverse();
      this.setState({ lista: lista, descricao: '', quantidade: '', tipo: '' });

      // Realm.open({schema: [ ItemSchema ]})
      //   .then(realm => {
  
      //     realm.write(() => {
      //       const meuItem = realm.create('Item', {
      //         descricao: descricao,
      //         quantidade: quantidade,
      //         tipo: '',
      //       });
      //     });
        
      //     const itens = realm.objects('Item');
      //     realm.close();
      //   })
      //   .catch(error => console.log(error) );
    }

  }

  incrementarItem(indice){
    let lista = this.state.lista;
    let qtd = parseInt(lista[indice].quantidade);

    if( isNaN(qtd) ) { qtd = 0; }
    lista[indice].quantidade = qtd + 1;
    this.setState(state => state.lista = lista);
  }

  removerItem(indice){
    let lista = this.state.lista;
    lista = lista.filter((item, index) => (index != indice) );
    this.setState(state => state.lista = lista);
  }

  diminuirItem(indice){
    let lista = this.state.lista;
    let qtd:any = parseInt(lista[indice].quantidade) - 1;

    if( isNaN(qtd) || (qtd <= 0) ) { qtd = ''; }

    lista[indice].quantidade = qtd;
    this.setState(state => state.lista = lista);
  }


  render() {
    return (
      <SafeAreaView style={ styles.container }>

        <View style={ styles.section }>

          <TextInput
            style={ styles.input }
            onChangeText={ text => this.setState({ descricao: text }) }
            value={ this.state.descricao }
            placeholder='Item'
          />

          <TextInput
            style={ styles.input }
            onChangeText={ text => this.setState({ quantidade: text }) }
            value={ this.state.quantidade }
            placeholder='Quantidade'
          />
          <Picker
            selectedValue={this.state.tipo}
            style={ styles.select }
            onValueChange={ (valor, indice) => this.setState({ tipo: valor }) }
          >
            <Picker.Item label="-" value="" />
            <Picker.Item label="Caixa(s)" value="caixa" />
            <Picker.Item label="Fardo(s)" value="fardo" />
            <Picker.Item label="g(s)" value="g" />
            <Picker.Item label="Kg(s)" value="kg" />
            <Picker.Item label="Pacote(s)" value="pacote" />
          </Picker>

          <TouchableOpacity onPress={() => this.adicionaItem()}>
            <Text style={styles.botao}>Adicionar Item</Text>
          </TouchableOpacity>
          
          <Separator />
        </View >
        <ScrollView style={ styles.section }>
          <VirtualizedList
            data={ this.state.lista }
            initialNumToRender={ this.state.lista.length }
            renderItem={({ item, index }) => <Item 
                item={ item } 
                incrementarItem={ () => this.incrementarItem(index) }
                diminuirItem={ () => this.diminuirItem(index) }
                removerItem={ () => this.removerItem(index) }
              /> 
            }
            keyExtractor={ (item,index) => index.toString() }
            getItemCount={ () => this.state.lista.length }
            getItem={ (data, index) => data[ index ] }
          />

        </ScrollView>

      </SafeAreaView>
    );
  }
}
