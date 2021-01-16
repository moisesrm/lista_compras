import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  secaoFormulario: {
    backgroundColor: "#f9c2ff",
  },
  formulario: {
    margin: 5,
    marginTop: 20,
  },
  separador: {
    backgroundColor: "#f6f6f6",
    borderColor: "#f6f6f6",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 25,
    marginTop: 10,
  },
  botao: {
    backgroundColor: "#a30fb3",
    marginVertical: 8,
    borderRadius: 5,
    height: 35,
    alignItems: "center",
    justifyContent: "center"
  },
  txtBotao: {
    color: "#fff",
    fontWeight: "normal",
    fontSize: 14,
  },
  campos: {
    borderColor: "#a30fb3",
    backgroundColor: "#fff",
    borderWidth: 1,
    height: 40,
    marginBottom: 15,
    borderRadius: 5,
    paddingHorizontal: 10
  },
  campoSelect: {
    borderColor: "#a30fb3",
    backgroundColor: "#fff",
    borderWidth: 1,
    height: 40,
    marginBottom: 15,
    borderRadius: 5,
    paddingHorizontal: 1,
    paddingVertical: 1,
    justifyContent: "center"
  },
  select: {
    borderColor: "#a30fb3",
    borderRadius: 5,
    height: 40,
    fontSize: 14,
  }
});

export { styles }