
const ItemSchema = {
  name: 'Item',
  properties: {
    descricao: 'string',
    quantidade: 'string',
    tipo: 'string',
  }
};

const ListaSchema = {
  name: 'Lista',
  properties: {
    itens: 'Item[]',
    model: 'string',
    miles: {type: 'int', default: 0},
  }
};

export { ItemSchema, ListaSchema }