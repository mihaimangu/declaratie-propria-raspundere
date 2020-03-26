
import React, {useState} from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer';




Font.register({
    family: "Roboto",
    src:
      "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf"
  });


const styles ={
    page: {
        backgroundColor: 'white',
        fontFamily:'Roboto',
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
        display: 'flex',
        flexDirection: 'column',
        width: 100,
        paddingTop: '30px'
    },
    heading:{
        textAlign: 'center',
        backgroundColor: 'red',
        borderColor: 'green',
        borderWidth: 10,
        borderRadius: 5,

    },
    section: {
      margin: 10,
      padding: 10,
        border: '1px solid black'

    },
    input:{
        borderRadius: 10,
        borderWidth: "1px",
        borderColor: '#fff',
        backgroundColor: 'red',
        display: 'inline-block',
        minWIdth: '20%',
    },
    textWrapper:{
        // backgroundColor: "blue",
    }

  };


const MyDocument = ({values}) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.heading}>
          <Text>Declaratie pe pe propria răspundere </Text>
        </View>
        <View style={styles.section}>
          <View style={styles.textWrapper}>
              <View>
                    <Text>Nume, prenume</Text>
              </View>
              <View>
                    <Text>Data nasterii</Text>
              </View>
              <View>
                    <Text>Adresa locuintei</Text>
              </View>
           
            
           
            </View>
        </View>
      </Page>
    </Document>
  );

  export default MyDocument;