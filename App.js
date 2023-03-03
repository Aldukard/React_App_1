import React, {useState} from "react"
import { StatusBar } from 'expo-status-bar';
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
      
      title = {"Imprimir"}
      />
      <View >
      {activo ? "Sin materias": <><Text>Materias Inscritas</Text><Text>{materia1}</Text><Text>{materia2}</Text><Text>{materia3}</Text></>}

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
  },
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