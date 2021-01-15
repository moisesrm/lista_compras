import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#a30fb3",
    height: 50,
  },
  botoes:{
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
  },
  txtBotao: {
    color: "#fff",
    fontWeight: "normal",
    fontSize: 14,
  },
  botao: {
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 5,
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center"
  },
  title: { 
    flex: 2,
    color: "#fff",
    fontWeight: "bold",
    marginHorizontal: 8,
    alignContent: "stretch",
    alignItems: "center",
    justifyContent: "center"
  }
});

export { styles }