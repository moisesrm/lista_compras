
const ItemSchema = {
  name: 'Item',
  primaryKey: 'id',
  properties: {
    id: 'int',
    descricao: 'string',
    quantidade: 'string?',
    tipo: 'string?',
  }
};

export default ItemSchema;