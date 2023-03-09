import React, {useState} from "react"
import { Button, StyleSheet, Text, TextInput, View, FlatList, StatusBar } from 'react-native';

export default function App() {

  /**
  const getDatosALumno = (nombre,carrera, especialidad) => {
    return nombre +" "+ carrera + " " + especialidad;
  }
  //const [activo, setActivo] = useState(true)
  //const [materia, setMateria] = useState("Inscribe una materia")
  /**const Materias=(props) => {
    return(
      <view>
        <Text>{props.nombre}</Text>
      </view>
    )
  }*/

    const [datos, setDatos] = useState([
      { key: "Materia 1", color: false },
      { key: "Materia 2", color: false },
      { key: "Materia 3", color: false },
      { key: "Materia 4", color: false },
      { key: "Materia 5", color: false },
      { key: "Materia 6", color: false },
      { key: "Materia 7", color: false },
      { key: "Materia 8", color: false },
      { key: "Materia 9", color: false },
      { key: "Materia 10", color: false },
      { key: "Materia 11", color: false },
    ]);

    

    let materiaBuscada = "";
    const Materias = (props) => {
      return (
        <View>
          <Text style={props.color ? styles.materiasActiva : styles.textoNorm}>
            {props.nombre}
          </Text>
        </View>
      );
    };

  /*
  const [materia1, setMateria1] = useState("Inscribe una materia")
  const [materia2, setMateria2] = useState("Inscribe una materia")
  const [materia3, setMateria3] = useState("Inscribe una materia")
  const [activo, setMostrar] = useState(true)
  */

  return (
    <View style={styles.container}>
      <Text style={styles.topbar}>{"Materias"}</Text>

      <FlatList
        data={datos}
        renderItem={({ item }) => (
          <Materias nombre={item.key} color={item.color} />
        )}
      />

      <TextInput
        style={styles.disenhoCaja}
        onChangeText={(newText) => (materiaBuscada = newText)}
        placeholder={"Buscar una materia"}
      />
      <Button
        onPress={() => {
          for (let index = 0; index < datos.length; index++) {
            if (datos[index].key === materiaBuscada) {
              console.log(datos[index].key);
              const datosnuevos = [...datos];
              datosnuevos[index].color = true;
              setDatos(datosnuevos);
            }
          }
        }}
        title={"Revisar materia"}
      />
      <StatusBar style="auto" />
    </View>
  );

  /*
  return (
    <View style={styles.container}
    >

      <Text style={{
        fontSize:25,
        fontWeight:"bold",
        color:"blue"
      }}>
        Registro de materias</Text>

      <TextInput
      style={styles.cajaTexto}
      defaultValue={materia1}    
      onChangeText={(newText) => setMateria1(newText)}
      />
      <TextInput
      style={styles.cajaTexto}
      defaultValue={materia2}
      onChangeText={(newText) => setMateria2(newText)}  
      />
      <TextInput
      style={styles.cajaTexto}
      defaultValue={materia3}
      onChangeText={(newText) => setMateria3(newText)}
      />

      <Button
      onPress={()=>{
        setMostrar(!activo)
      }}
      style={styles.button}
      title = {"Imprimir"}
      />
      <View >
      {activo ? <Text>Sin materias</Text>:<><Text
      style={styles.textoNorm}>1- {materia1}</Text><Text
      style={styles.textoNorm}>2- {materia2}</Text><Text
      style={styles.textoNorm}>3- {materia3}</Text></>}
      </View>

    </View>
  );*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cajaTexto:{
    height:40,
    borderColor:"pink",
    borderWidth:2,
    minWidth:200,
    margin:10
  },
  button: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textoNorm:{
    fontSize: 20,
    color:"green",
    margin:10  
  },
  topbar: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 20,
    width: 500,
    color:"#23E4ED",
    backgroundColor: "#BB1880",
    textAlign: "center",
  },
  materiasActiva: {
    fontSize: 30,
    textAlign: "center",
    margin: 5,
    fontStyle: "italic",
    color: "pink",
    backgroundColor: "blue"
  }
});

/**
<Text>Hola {getDatosALumno("Daniel Alejandro","ISC","FullStack")}</Text>
      <TextInput 
        style={styles.cajaTexto}
        defaultValue="Proporciona el nombre"
      />
      <Text>MATERIAS</Text>
      <Materias nombre="Aplicacionez hibridas"/>
      <Materias nombre="I teligencia artificial"/>
      <Materias nombre="Administracion de redes"/>
      <Materias nombre="Arquitectura de Servicios"/>

      <TextInput
      style={styles.cajaTexto}
      onChange={(newText) => setMateria(newText)}
      defaultValue={materia}
      />

      <Button
        onPress={() => {
          setActivo(false);
        }}
        disabled={activo}
        title={activo ? "Click...":"No activo"}
      /> 
      <StatusBar style="auto" />
*/