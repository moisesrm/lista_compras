import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  sectionItens: {
    marginHorizontal: 10,
  },
  sectionForm: {
    backgroundColor: "#f9c2ff",
  },
  form: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  item: {
    backgroundColor: "#f9c2ff",
    paddingHorizontal: 8,
    marginVertical: 8,
    borderRadius: 5,
    flex:1,
    flexDirection: 'row',
    alignItems: "space-between",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  },
  textoItem: {
    color: "#000",
    flexGrow: 3,
    justifyContent: "center",
    textAlign: "left",
    alignContent: "center",
    marginVertical: 8,
  },
  novoDivisor:{
    height: 15,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 10,
    backgroundColor: "#fff",
  },
  botao: {
    borderWidth: 2.5,
    borderRadius: 5,
    borderColor: '#a30fb3',
    backgroundColor: "#a30fb3",
    paddingVertical: 16,
    height: 36,
    justifyContent: "center",
    textAlign: "center",
    marginVertical: 8,
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  },
  textoBotao: {
    fontWeight: "medium",
    letterSpacing: "1.25px",
    fontSize: 14,
    color: "#FFF"
  },
  botaoItem: {
    borderWidth: 2.5,
    borderRadius: 100,
    borderColor: "#a30fb3",
    backgroundColor: "#a30fb3",
    height: 36,
    width: 36,
    marginVertical: 8,
    marginHorizontal: 8,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    float: "right",
    fontWeight: "normal",
    fontSize: 14,
    letterSpacing: "0.5px",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  },
  title: { 
    fontSize: 20,
    marginVertical: 8,
    width: 100
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputSelect: {
    backgroundColor: "#fff",
    borderColor: '#a30fb3',
    borderRadius: 5,
    borderWidth: 2.5,
    height: 50,
    paddingLeft: 16,
    paddingRight: 12,
    paddingHorizontal: 16,
    marginVertical: 8,
    fontWeight: "normal",
    fontSize: 14,
    letterSpacing: "0.5px"
  },
  texto:{
    fontWeight: "normal",
    fontSize: 16,
    letterSpacing: "0.5px"
  }
});

export { styles }