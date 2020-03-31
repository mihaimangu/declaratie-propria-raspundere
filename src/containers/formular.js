import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import React, { useState, useEffect } from 'react';
import { FormGroup, Jumbotron, Button } from "react-bootstrap";
import AutosizeInput from 'react-input-autosize';
import SignatureCanvas from 'react-signature-canvas';
import MyDocument from '../components/pdf';

//import { Document, Page, Text,  View, PDFDownloadLink, PDFViewer } from 'react-pdf';
import logo from '../logo.svg';
import CoronavirusLogo from '../coronavirus-logo.png';
import EightmdLogo from '../8md-circles-min.png';

import {  MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, } from '@material-ui/pickers';

import moment from "moment";
import MomentUtils from '@date-io/moment';
import "moment/locale/ro";

moment.locale('ro');



function Formular(){
    
    //state management
    const [values, setValues] = useState({mother: '', father: '', residence: '', profesionalTravel: true}) 
    const [reasons, setReasons] = useState([])
    const [date, setDeclarationDate] = useState(new Date());
    const [humanDate, setHumanDate] = useState(moment(new Date).format("L"));

    const [signature, setSignature] = useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAACaCAYAAAB12TZKAAAIGklEQVR4Xu3cMUoDURhG0fcKlxTXoqXYWQluQ3AXkvRuwcbKpQgKFhYjwcokTuMtT8oM+YrDX1wCyRxeBAgQIECAAAECqcBM14wRIECAAAECBAgMgeUICBAgQIAAAQKxgMCKQc0RIECAAAECBASWGyBAgAABAgQIxAICKwY1R4AAAQIECBAQWG6AAAECBAgQIBALCKwY1BwBAgQIECBA4GRgbbbLzdfneHy9mm+HRGvPcBIgQIAAAQIECIzjv2nY7Ja7uYz7Pc7LxfwVYGvPYBIgQIAAAQIECPwIHH2DtdkuD3OM25OBtfIMKAECBAgQIECAwB+BtX/7fLdcnn2Mp+fr+X4ItfYMKgECBAgQIECAwIlvsKAQIECAAAECBAj8T8CvCP/n59MECBAgQIAAgSMBgeUoCBAgQIAAAQKxgMCKQc0RIECAAAECBASWGyBAgAABAgQIxAICKwY1R4AAAQIECBAQWG6AAAECBAgQIBALCKwY1BwBAgQIECBAQGC5AQIECBAgQIBALCCwYlBzBAgQIECAAAGB5QYIECBAgAABArGAwIpBzREgQIAAAQIEBJYbIECAAAECBAjEAgIrBjVHgAABAgQIEBBYboAAAQIECBAgEAsIrBjUHAECBAgQIEBAYLkBAgQIECBAgEAsILBiUHMECBAgQIAAAYHlBggQIECAAAECsYDAikHNESBAgAABAgQElhsgQIAAAQIECMQCAisGNUeAAAECBAgQEFhugAABAgQIECAQCwisGNQcAQIECBAgQEBguQECBAgQIECAQCwgsGJQcwQIECBAgAABgeUGCBAgQIAAAQKxgMCKQc0RIECAAAECBASWGyBAgAABAgQIxAICKwY1R4AAAQIECBAQWG6AAAECBAgQIBALCKwY1BwBAgQIECBAQGC5AQIECBAgQIBALCCwYlBzBAgQIECAAAGB5QYIECBAgAABArGAwIpBzREgQIAAAQIEBJYbIECAAAECBAjEAgIrBjVHgAABAgQIEBBYboAAAQIECBAgEAsIrBjUHAECBAgQIEBAYLkBAgQIECBAgEAsILBiUHMECBAgQIAAAYHlBggQIECAAAECsYDAikHNESBAgAABAgQElhsgQIAAAQIECMQCAisGNUeAAAECBAgQEFhugAABAgQIECAQCwisGNQcAQIECBAgQEBguQECBAgQIECAQCwgsGJQcwQIECBAgAABgeUGCBAgQIAAAQKxgMCKQc0RIECAAAECBASWGyBAgAABAgQIxAICKwY1R4AAAQIECBAQWG6AAAECBAgQIBALCKwY1BwBAgQIECBAQGC5AQIECBAgQIBALCCwYlBzBAgQIECAAAGB5QYIECBAgAABArGAwIpBzREgQIAAAQIEBJYbIECAAAECBAjEAgIrBjVHgAABAgQIEBBYboAAAQIECBAgEAsIrBjUHAECBAgQIEBAYLkBAgQIECBAgEAsILBiUHMECBAgQIAAAYHlBggQIECAAAECsYDAikHNESBAgAABAgQElhsgQIAAAQIECMQCAisGNUeAAAECBAgQEFhugAABAgQIECAQCwisGNQcAQIECBAgQEBguQECBAgQIECAQCwgsGJQcwQIECBAgAABgeUGCBAgQIAAAQKxgMCKQc0RIECAAAECBASWGyBAgAABAgQIxAICKwY1R4AAAQIECBAQWG6AAAECBAgQIBALCKwY1BwBAgQIECBAQGC5AQIECBAgQIBALCCwYlBzBAgQIECAAAGB5QYIECBAgAABArGAwIpBzREgQIAAAQIEBJYbIECAAAECBAjEAgIrBjVHgAABAgQIEBBYboAAAQIECBAgEAsIrBjUHAECBAgQIEBAYLkBAgQIECBAgEAsILBiUHMECBAgQIAAAYHlBggQIECAAAECsYDAikHNESBAgAABAgQElhsgQIAAAQIECMQCAisGNUeAAAECBAgQEFhugAABAgQIECAQCwisGNQcAQIECBAgQEBguQECBAgQIECAQCwgsGJQcwQIECBAgAABgeUGCBAgQIAAAQKxgMCKQc0RIECAAAECBASWGyBAgAABAgQIxAICKwY1R4AAAQIECBAQWG6AAAECBAgQIBALCKwY1BwBAgQIECBAQGC5AQIECBAgQIBALCCwYlBzBAgQIECAAAGB5QYIECBAgAABArGAwIpBzREgQIAAAQIEBJYbIECAAAECBAjEAgIrBjVHgAABAgQIEBBYboAAAQIECBAgEAsIrBjUHAECBAgQIEBAYLkBAgQIECBAgEAsILBiUHMECBAgQIAAAYHlBggQIECAAAECsYDAikHNESBAgAABAgQElhsgQIAAAQIECMQCAisGNUeAAAECBAgQEFhugAABAgQIECAQCwisGNQcAQIECBAgQEBguQECBAgQIECAQCwgsGJQcwQIECBAgAABgeUGCBAgQIAAAQKxgMCKQc0RIECAAAECBASWGyBAgAABAgQIxAICKwY1R4AAAQIECBAQWG6AAAECBAgQIBALCKwY1BwBAgQIECBAQGC5AQIECBAgQIBALCCwYlBzBAgQIECAAAGB5QYIECBAgAABArGAwIpBzREgQIAAAQIEBJYbIECAAAECBAjEAgIrBjVHgAABAgQIEBBYboAAAQIECBAgEAsIrBjUHAECBAgQIEBAYLkBAgQIECBAgEAsILBiUHMECBAgQIAAAYHlBggQIECAAAECsYDAikHNESBAgAABAgQElhsgQIAAAQIECMQCAisGNUeAAAECBAgQ+AaXcyybuxuKegAAAABJRU5ErkJggg==");

    const [dataWrapper, setDataWrapper] = useState({
        values, signature, humanDate
    })

    const refreshDataWrapper = () => {
        //we use a data wrapper because if we modify the state directly, the form will be laggy and have a slow performance, because it will rerender just everytime. 

        setDataWrapper({
            signature,
            humanDate,
            values
        })
    }


    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('interval');
            refreshDataWrapper();
        }, 1000);

        return () => clearInterval(intervalId)
    })

    const setDate = (e) => {
        const newDate = e._d;

        const readableDate = moment(newDate).format("L");
        setHumanDate(readableDate)
        setDeclarationDate(newDate.toString());
    }

    const handleInputChange = e => {
        const {name, value} = e.target;
        // debugger;
        setValues({...values, [name]: value})
    }

    const handleReasonChange = e => {
        console.log('handlening reason change');
        const {name, value, checked} = e.target;
        
        setReasons({...reasons, [name]: checked })
    }

    const grabImage = e => {
        let trimmedCanvas = sigPad.getCanvas().toDataURL('image/png');
        setSignature(trimmedCanvas)
        refreshDataWrapper();
    }

    const resetSignature = e =>{
        sigPad.clear();
    }

    let sigPad;



    return (
        <div>
            
        <div className="formular-wrapper">
            
            <Jumbotron>
                <h1>Declarație pe propria răspundere</h1>
                <p className="jumbo-paragraph">Această aplicație te ajută să generezi declarația pe propria răspundere în format digital (PDF). Guvernul a impus folosirea acestui formular, pe perioada crizei generate de noul Covid-19 </p>

               
            </Jumbotron>

            <section className="form-wrapper">

                <FormGroup className="formular-form-wrapper">

                    <h3>Pasul 1: Date generale</h3>
                    <div className="initial-data form-row">
                        <section className="initial-data--inner-wrapper">
                            
                                    <section className="table-row">
                                        <section className="first-column">Nume, prenume:  </section>
                                         <section>   
                                             <input style={{minWidth: "150px"}} type="text"  onChange={(e) => handleInputChange(e)} name="fullName" value={values.fullName} placeholder="Ex. Ion Popescu" />
                                        </section>
                                    </section>

                                    <section className="table-row">
                                        <section> Data nașterii: </section>
                                        <section><input style={{minWidth: "80px"}}  onChange={(e) => handleInputChange(e)} value={values.birth} className="birth" name="birth" type="text" placeholder="Ex: 08 -11 - 1993" /></section>
                                    </section>

                                    <section className="table-row">
                                        <section> Adresa locuinței: </section>
                                        <section><input onChange={(e) => handleInputChange(e)} value={values.residence} name="residence" className="residence" type="text" placeholder="Ex: Teleorman, Alexandria, Str. Dunării nr. 23" />
                                         </section>
                                    </section>
                             
                        </section>
                    </div>

                    

                    <h3>Pasul 2: Locul și motivul deplasării</h3>

                    <div className="data-2nd-row form-row">
                        <section className="">  
                            Locul/locurile deplasarii
                            <input type="text" style={{width:"100%", textAlign: 'left'}} onChange={(e) => handleInputChange(e)} name="to" value={values.to} className="to-input" placeholder="Ex: Str. C.A Rosetti nr. 75 / Farmacie str. Dunării" />
                            <span>Motivele deplasarii</span>
                           <article>
                                <input onChange={(e) => handleReasonChange(e)} name="1" type="checkbox"  /> Interes profesional, inclusiv între locuință/gospodărie și locul/locurile de desfășurare a
activității profesionale și înapoi
                           </article>
                           <article>
                                <input onChange={(e) => handleReasonChange(e)} name="2" type="checkbox"  /> Asigurarea de bunuri care acoperă necesitățile de bază ale persoanelor și animalelor de
companie/domestice
                           </article>
                           <article>
                                <input onChange={(e) => handleReasonChange(e)} name="3" type="checkbox"  /> Asistență medicală care nu poate fi amânată și nici realizată de la distanță
                           </article>
                           <article>
                                <input onChange={(e) => handleReasonChange(e)} name="4" type="checkbox"  /> Motive justificate, precum îngrijirea/ însoțirea unui minor/copilului, asistența persoanelor
vârstnice, bolnave sau cu dizabilități ori deces al unui membru de familie
                           </article>
                           <article>
                                <input onChange={(e) => handleReasonChange(e)} name="5" type="checkbox"  /> Activitate fizică individuală (cu excluderea oricăror activități sportive de echipă/ colective)
sau pentru nevoile animalelor de companie/domestice, în apropierea locuinței
                           </article>
                           <article>
                                <input onChange={(e) => handleReasonChange(e)} name="6" type="checkbox"  /> Realizarea de activități agricole <AutosizeInput type="text" name="agriReasons"  style={{minWidth: "150px"}} onChange={(e) => handleInputChange(e)} value={values.agriReasons} />
                           </article>
                           <article>
                                <input onChange={(e) => handleReasonChange(e)} name="7" type="checkbox" /> Scopuri umanitare sau de voluntariat;
                           </article>
                           <article>
                                 <input onChange={(e) => handleReasonChange(e)} name="8" type="checkbox" /> Comercializarea de produse agroalimentare (în cazul producătorilor agricoli)
                           </article>
                           <article>
                                 <input onChange={(e) => handleReasonChange(e)} name="9" type="checkbox" /> Asigurarea de bunuri necesare desfășurării activității profesionale.
                           </article>
                           <p>Se va bifa doar motivul/motivele deplasării dintre cele prevăzute în listă, nefiind permise deplasări realizate invocând alte motive decât cele prevăzute în Ordonanța Militară nr. 3/2020.</p>
                        </section>
                    </div>

                    <h3>Pasul 3: Data și semnătura</h3>
                    <p>Folosește mouse-ul sau degetul (în cazul unui dispozitiv cu touch-screen) pentru a realiza semnătura</p>

                    <div className="data-3rd-row form-row">
                        <section className="draw-section"> 
                            <article>Atât declar, susțin și semnez.</article>
                            <article className="column-article date-article">
                                Data declaratiei
                                <MuiPickersUtilsProvider utils={MomentUtils} locale="ro">
                                    <KeyboardDatePicker 
                                        disableToolbar
                                        variant="inline"
                                        format="L"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Selecteaza o data"
                                        value={date}
                                        onChange={(e) => setDate(e)}
                                    />
                                </MuiPickersUtilsProvider>

                            </article>
                            <article className="signature-wrapper">
                                Semnătura

                                <Button onClick={() => resetSignature()} variant="danger">
                                    Resetează semnatura
                                </Button>
                                <SignatureCanvas signature={signature} penColor='#36a8ff' canvasProps={{ className: 'sigCanvas'}} onEnd={() => grabImage()}
                                ref={(ref) => sigPad = ref}  
                                />
                                
                       
                            </article>
                           
                        </section>
                    </div>

                    
                </FormGroup>    
            </section>
          
          <section className="preview-wrapper">

            {/* <PDFViewer>
                <MyDocument signature={signature} theDate={humanDate} values={values} reasons={reasons} />
             </PDFViewer> */}

            <PDFDownloadLink document={<MyDocument signature={dataWrapper.signature}  theDate={dataWrapper.humanDate} values={dataWrapper.values} reasons={reasons} />} fileName="declaratie.pdf" >
               {({ loading }) => (loading ? 'Se incarcă' : <Button size="lg">Descarcă documentul</Button>)}
            </PDFDownloadLink>



          </section>
           

        </div>

        <footer className="app-footer-wrapper">

            <a href="https://coronavirus.co.ro">
                <img src={CoronavirusLogo} className="footer-logo" />
            </a>
           
            <div>Această aplicație a fost dezvoltată pentru website-ul <a href="">coronavirus.co.ro</a> de către <a href="http://8md.online">8MGM ONLINE MEDIA SRL</a> </div>
            <div>Aplicația nu salvează datele pe server. Informația este sigură, și ramâne permanent pe dispozitivul tău.</div>
            <div >Codul sursă al aplicației este disponibil  <a href="https://github.com/mihaimangu/declaratie-propria-raspundere">aici</a></div>


        </footer>
            
        </div>
    )
}


export default Formular;