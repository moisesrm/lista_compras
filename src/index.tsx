import React, { Component } from 'react';
import { 
  TextInput, View, TouchableOpacity, ToastAndroid,
  SafeAreaView, Text, ScrollView, VirtualizedList
} from 'react-native';
import Item from './components/Item';
import { Picker } from '@react-native-picker/picker';
import { styles } from './assets/styles/index'
import ItemSchema from './assets/models/listaCompraSchema';
import Realm from "realm";

const Separator = () => ( <View style={styles.separator} /> );

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lista: [], descricao: '', quantidade: '',tipo: '', };
    
    Realm.open({ schema: [ ItemSchema ] })
      .then(realm => { 
        let itens = [];
        for( let item of realm.objects('Item').sorted('id',true) ){
          itens.push({
            id: item.id,
            descricao: item.descricao,
            quantidade: item.quantidade,
            tipo: item.tipo,
          });
        }
        realm.close();
        this.setState( state => state.lista = itens );
      });
  }

  adicionaItem(){
    let descricao:string = this.state.descricao.trim();
    let quantidade:string = this.state.quantidade.trim();
    let tipo:string = this.state.tipo.trim();
    
    if( ( descricao.length || quantidade.length ) > 0 ){

      let novo_item = {
        id: new Date().getTime(),
        descricao: descricao,
        quantidade:quantidade,
        tipo:tipo
      };

      this.setState( state => state.descricao = '' );
      this.setState( state => state.quantidade = '' );
      this.setState( state => state.tipo = '' );

      Realm.open({ schema: [ ItemSchema ] })
        .then(realm => { 
          realm.write(() => realm.create('Item', novo_item) );
          let itens = [];
          for( let item of realm.objects('Item').sorted('id',true) ){
            itens.push({
              id: item.id,
              descricao: item.descricao,
              quantidade: item.quantidade,
              tipo: item.tipo,
            });
          }
          realm.close();
          this.setState( state => state.lista = itens );

          ToastAndroid.showWithGravityAndOffset(
            'Item Adicionado',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50
          );
          
        })
        .catch( e => ToastAndroid.showWithGravityAndOffset(
          JSON.stringify(e),
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        ));
        
    }
  }

  removerItem(indice){
    let item = this.state.lista[ indice ];
    
    Realm.open({ schema: [ ItemSchema ] })
      .then(realm => { 
        let obj = realm.objectForPrimaryKey( 'Item', item.id );
        realm.write(() => realm.delete( obj ));
        
        let itens = []
        for( let item of realm.objects('Item').sorted('id',true) ){
          itens.push({
            id: item.id,
            descricao: item.descricao,
            quantidade: item.quantidade,
            tipo: item.tipo,
          });
        }
        realm.close();
        this.setState( state => state.lista = itens );

        ToastAndroid.showWithGravityAndOffset(
          'Item Removido', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 50
        );
      })
      .catch( e => ToastAndroid.showWithGravityAndOffset(
        JSON.stringify(e),
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50
      ));

  }

  incrementarItem(indice){
    let item = this.state.lista[ indice ];
    let qtd = parseInt( item.quantidade );

    if( isNaN(qtd) ) { qtd = 0; }
    item.quantidade = qtd + 1;
    
    Realm.open({ schema: [ ItemSchema ] })
      .then(realm => { 

        let obj = realm.objectForPrimaryKey('Item',item.id);
        realm.write(() => obj.quantidade = item.quantidade.toString() );

        let itens = []
        for( let item of realm.objects('Item').sorted('id',true) ){
          itens.push({
            id: item.id,
            descricao: item.descricao,
            quantidade: item.quantidade,
            tipo: item.tipo,
          });
        }
        realm.close();
        this.setState( state => state.lista = itens );
        
        ToastAndroid.showWithGravityAndOffset(
          'Item Incrementado',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
        
      })
      .catch( e => ToastAndroid.showWithGravityAndOffset(
        JSON.stringify(e),
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50
      ));
  }

  diminuirItem(indice){

    let item = this.state.lista[ indice ];
    let qtd = parseInt( item.quantidade ) - 1;

    if( isNaN(qtd) || (qtd <= 0) ) { qtd = ''; }
    item.quantidade = qtd;

    Realm.open({ schema: [ ItemSchema ] })
      .then(realm => { 

        let obj = realm.objectForPrimaryKey('Item',item.id);
        realm.write(() => obj.quantidade = item.quantidade.toString() );

        let itens = []
        for( let item of realm.objects('Item').sorted('id',true) ){
          itens.push({
            id: item.id,
            descricao: item.descricao,
            quantidade: item.quantidade,
            tipo: item.tipo,
          });
        }
        realm.close();
        this.setState( state => state.lista = itens );
        
        ToastAndroid.showWithGravityAndOffset(
          'Item Decrementado',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
        
      })
      .catch( e => ToastAndroid.showWithGravityAndOffset(
        JSON.stringify(e),
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50
      ));
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
            keyExtractor={ item => item.id.toString() }
            getItemCount={ () => this.state.lista.length }
            getItem={ (data, index) => data[ index ] }
          />

        </ScrollView>

      </SafeAreaView>
    );
  }
}
