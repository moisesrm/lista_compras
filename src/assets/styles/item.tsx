import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  item: {
   flex: 1,
   flexDirection: "row",
   flexWrap: "nowrap",
   justifyContent: "flex-end",
   alignItems: "center",
   backgroundColor: "#f9c2ff",
   height: 50,
   borderRadius: 5,
   marginHorizontal: 5,
   marginVertical: 8
  },
  botoes:{
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
  },
  txtBotao: {
    color: "#fff",
    fontWeight: "normal",
    fontSize: 14,
  },
  botao: {
    backgroundColor: "#a30fb3",
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
    marginHorizontal: 8,
    alignContent: "stretch",
    alignItems: "center",
    justifyContent: "center"
  }
});

export { styles }