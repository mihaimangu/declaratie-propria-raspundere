
import React, {useState} from 'react';
import { Document, Page, Text, View, Image, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer';

import RobotoLight from '../fonts/Roboto-Light.ttf';
import RobotoMedium from '../fonts/Roboto-Medium.ttf';


Font.register({
  family: "Roboto",
  src: RobotoMedium
});

Font.register({
  family: "RobotoLight",
  src: RobotoLight
});

const styles ={
    page: {
        fontFamily:'Roboto',
        flexDirection: 'row',
        // backgroundColor: '#E4E4E4',
        display: 'flex',
        flexDirection: 'column',
        width: 100,
        padding: 40,
        fontSize: 12
    },
    heading:{
        textAlign: 'center',
        marginBottom: 20,

    },
    section: {
      margin: 10,
      padding: 10,
        border: '1px solid black'

    },
    input1:{
        borderWidth: 1,
        borderColor: 'black',
        display: 'inline-block',
        marginLeft: '20px',
        minWidth: 150,
        height: 30,
        width: '70%',
        padding: 5
    },
    input2:{
      borderWidth: 1,
      borderColor: 'black',
      display: 'inline-block',
      minWidth: 150,
      height: 30,
      width: '100%',
      padding: 5,
  },
    textWrapper:{
        // backgroundColor: "blue",
    },
    formRow:{
        display:'flex',
        flexDirection:'row',
        marginBottom: 5,
        textAlign: 'left',
        justifyContent: 'space-between'
    },
    reasonsWrapper:{
      fontFamily: 'RobotoLight'
    },
    singleReason:{
      marginBottom: '5',
      display: 'flex',
      flexDirection: 'row'
    
    },
    signatureImage:{
      maxWidth: 200,
      maxHeight: 200,
    },
    textCheckMark:{
      display: 'inline',
    }

  };


const MyDocument = ({values, reasons, theDate, signature}) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.heading}>
          <Text>Declarație pe propria răspundere </Text>
        </View>
        <View style={styles.section}>
          <View style={styles.textWrapper}>
              <View style={styles.formRow}>
                    <Text>Nume, prenume</Text>
                    <View style={styles.input1}><Text>{values.fullName}</Text></View>
              </View>
              <View style={styles.formRow}>
                    <Text>Data nașterii</Text>
                    <Text style={styles.input1}>{values.birth}</Text>
              </View>
              <View style={styles.formRow}>
                    <Text>Adresa locuinței</Text>
                    <Text style={styles.input1}>{values.residence}</Text>
              </View>
           
            <View style={{display:'flex', flexDirection:'column', marginTop: 10, marginBottom: 0, justifyContent: 'flex-start', textAlign: 'left'}}>
                <Text>Locul/locurile deplasării</Text>
                <View style={styles.input2}><Text>{values.to}</Text></View>
            </View>
           
            </View>
            <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
               
            </View>
        </View>

        <View>
       
        </View>

        <View style={styles.section}>
            <Text style={{marginBottom: 5}}>Motivul deplasarii:</Text>
            <View style={styles.reasonsWrapper}>
               
                 
                 <View style={styles.singleReason}>
                   <Text style={styles.textCheckMark}> {reasons[1] ? "(x)" : "( )"}</Text>
                   <Text >Interes profesional, inclusiv între locuință/gospodărie și locul/locurile de desfășurare a activității profesionale și înapoi
                   </Text>
                 </View>
             
                <View style={styles.singleReason}>
                  <Text style={styles.textCheckMark}>{reasons[2] ? "(x)" : "( )"} </Text>
                  <Text>Asigurarea de bunuri care acoperă necesitățile de bază ale persoanelor și animalelor de companie/domestice</Text>
                </View>

                 <View style={styles.singleReason}>
                    <Text style={styles.textCheckMark}>{reasons[3] ? "(x)" : "( )"} </Text>
                   <Text>Asistență medicală care nu poate fi amânată și nici realizată de la distanță</Text>
                 </View>

                 <View style={styles.singleReason}>
                    <Text style={styles.textCheckMark}>{reasons[4] ? "(x)" : "( )"} </Text>
                   <Text>Motive justificate, precum îngrijirea/ însoțirea unui minor/copilului, asistența persoanelor vârstnice, bolnave sau cu dizabilități ori deces al unui membru de familie</Text>
                 </View>

                 <View style={styles.singleReason}>
                    <Text style={styles.textCheckMark}>{reasons[5] ? "(x)" : "( )"} </Text>
                   <Text>Activitate fizică individuală (cu excluderea oricăror activități sportive de echipă/ colective) sau pentru nevoile animalelor de companie/domestice, în apropierea locuinței</Text>
                 </View>

                 <View style={styles.singleReason}>
                    <Text style={styles.textCheckMark}>{reasons[6] ? "(x)" : "( )"} </Text>
                   <Text>Realizarea de activități agricole</Text>
                 </View>

                 <View style={styles.singleReason}>
                    <Text>{reasons[7] ? "(x)" : "( )"} </Text>
                   <Text>Scopuri umanitare sau de voluntariat</Text>
                 </View>
                 
                 <View style={styles.singleReason}>
                    <Text style={styles.textCheckMark}>{reasons[8] ? "(x)" : "( )"} </Text>
                   <Text>Comercializarea de produse agroalimentare (în cazul producătorilor agricoli)</Text>
                 </View>

                 <View style={styles.singleReason}>
                    <Text style={styles.textCheckMark}>{reasons[9] ? "(x)" : "( )"} </Text>
                   <Text>Asigurarea de bunuri necesare desfășurării activității profesionale.
                    Se va bifa doar motivul/motivele deplasării dintre cele prevăzute în listă, nefiind permise deplasări realizate invocând alte motive decât cele prevăzute în Ordonanța Militară nr. 3/2020.</Text>
                 </View>
               
            </View>
        </View>

        <View style={styles.section}>
            <Text>Data declarației</Text>
            <Text>{theDate}</Text>
        </View>


        <View style={styles.section}>
            <Text>Semnătura</Text>
            {signature && <Image style={styles.signatureImage} src={signature} />}

        </View>


      </Page>
    </Document>
  );

  export default MyDocument;