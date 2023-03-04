import React, {useState} from "react"
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

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

  const [materia1, setMateria1] = useState("Inscribe una materia")
  const [materia2, setMateria2] = useState("Inscribe una materia")
  const [materia3, setMateria3] = useState("Inscribe una materia")
  const [activo, setMostrar] = useState(true)

  return (
    <View style={styles.container}>

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
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:10  
  },
  cajaTexto:{
    height:40,
    borderColor:"pink",
    borderWidth:2,
    minWidth:200,
    margin:10
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textoNorm:{
    fontSize: 20,
    color:"green",
    margin:10  
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