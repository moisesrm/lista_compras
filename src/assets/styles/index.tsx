import { StyleSheet } from 'react-native';
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
    // borderColor: '#f9c2ff',
    borderWidth: 1,
    height: 45,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 20,
    marginVertical: 8,
    // backgroundColor: "#fff"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

export { styles }