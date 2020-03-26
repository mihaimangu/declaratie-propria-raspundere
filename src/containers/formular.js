import React, {useState} from 'react';
import { Button, FormGroup, FormControl, FormLabel, Jumbotron } from "react-bootstrap";
import AutosizeInput from 'react-input-autosize'
import SignatureCanvas from 'react-signature-canvas';
//import { Document, Page, Text,  View, PDFDownloadLink, PDFViewer } from 'react-pdf';

import logo from '../logo.svg';
import MyDocument from '../components/pdf';

import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

 

function Formular(){
    
    const [values, setValues] = useState({mother: '', father: '', residence: '', profesionalTravel: true}) 

    const handleInputChange = e => {
        const {name, value} = e.target;
        // debugger;
        setValues({...values, [name]: value})
    }


    // const [father, setFather] = useState('')
    
    return (
        <div>
            
        <div className="formular-wrapper">
             <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Generare formular aplicatie pe propria raspundere
                </p>
            </header>

            <Jumbotron>
                <h1>Declaratie pe propria raspundere</h1>
                <p className="jumbo-paragraph">Aceasta aplicatie te ajuta sa generezi declaratia pe propria raspundere in format digital (PDF). Guvernul a impus folosirea acestui formular, pe perioada crizei generate de noul Covid-19 </p>
               
            </Jumbotron>

            <section className="form-wrapper">

                <FormGroup className="formular-form-wrapper">

                    <h3>Pasul 1: Date generale</h3>
                    <div className="initial-data form-row">
                        <section className="initial-data--inner-wrapper">Subsemnatul(a),  
                            <AutosizeInput style={{minWidth: "150px"}} type="text"  onChange={(e) => handleInputChange(e)} name="fullName" value={values.fullName} placeholder="Ex. Ion Popescu" />, 
                            fiul / fiica
                            <AutosizeInput style={{minWidth: "80px"}}  onChange={(e) => handleInputChange(e)} value={values.father} className="father" name="father" type="text" placeholder="Ion" />
                            și al 
                            <AutosizeInput onChange={(e) => handleInputChange(e)} value={values.mother} name="mother" className="mother" type="text" placeholder="Ioana" />
                            , domiciliat(ă) în
                            <AutosizeInput onChange={(e) => handleInputChange(e)} name="residence" value={values.residence} className="residence-input" type="text" placeholder="Ex: Alexandria" />
                            , județul/sectorul
                            <AutosizeInput onChange={(e) => handleInputChange(e)} name="county" value={values.county} type="text" placeholder="Ex: Teleorman" className="asd" /> 
                            , strada
                            <AutosizeInput onChange={(e) => handleInputChange(e)} name="street" value={values.street} type="text" className="street-input" placeholder="Ex: Luncii" />
                            , număr
                            <AutosizeInput onChange={(e) => handleInputChange(e)} name="streetNumber" value={values.streetNumber} type="text" className="number-input" />
                            , bloc
                            <AutosizeInput onChange={(e) => handleInputChange(e)} name="blocInput" value={values.blocInput} type="text" className="bloc-input" />
                            , etaj
                            <AutosizeInput onChange={(e) => handleInputChange(e)} name="floorInput" value={values.floorInput} type="text" className="floor-input" />
                            , apartament
                            <AutosizeInput onChange={(e) => handleInputChange(e)} name="apartmentInput" value={values.apartmentInput}  type="text" className="apartment-input" />
                            , având CNP
                            <AutosizeInput type="text" onChange={(e) => handleInputChange(e)} name="cnp" value={values.cnp} className="cnp-input" />
                            , BI/CI seria
                            <AutosizeInput type="text" onChange={(e) => handleInputChange(e)} name="bici" value={values.bici} className="bici-input" />
                            , număr
                            <AutosizeInput type="text" onChange={(e) => handleInputChange(e)} name="ciNumber" value={values.ciNumber} className="ci-number-input" />
                        </section>
                    </div>

                    <h3>Pasul 2: Adresa actuală (opțional)</h3>
                    <p>Se declară în situația în care persoana nu locuiește la domiciliul prevăzut în actul de identitate</p>

                    <div className="data-2nd-row form-row">
                        <section> 
                            Locuind în fapt în 
                            <AutosizeInput type="text"  onChange={(e) => handleInputChange(e)} name="realResidence" value={values.realResidence} className="real-residence-input" placeholder="Ex: Sibiu" />
                            județ/sectorul
                            <AutosizeInput type="text"  onChange={(e) => handleInputChange(e)} name="realCounty" value={values.realCounty} className="real-county-input" placeholder="Ex: Sibiu" />
                            ,stradă
                            <AutosizeInput type="text"  onChange={(e) => handleInputChange(e)} name="realStreet" value={values.realStreet} className="real-street-input" placeholder="Ex: Sibiu" />
                            ,număr
                            <AutosizeInput type="text"  onChange={(e) => handleInputChange(e)} name="realNumber" value={values.realNumber} className="real-number-input" placeholder="Ex: Sibiu" />
                            ,bloc
                            <AutosizeInput type="text"  onChange={(e) => handleInputChange(e)} name="realBloc" value={values.realBloc} className="real-bloc-input" placeholder="Ex: Sibiu" />
                            ,scară
                            <AutosizeInput type="text"  onChange={(e) => handleInputChange(e)} name="realResidence" value={values.realResidence} className="real-residence-input" placeholder="Ex: Sibiu" />
                            ,etaj
                            <AutosizeInput type="text"  onChange={(e) => handleInputChange(e)} name="realFloor" value={values.realFloor} className="real-floor-input" placeholder="Ex: Sibiu" />
                            ,apartament
                            <AutosizeInput type="text"  onChange={(e) => handleInputChange(e)} name="realApartmentNumber" value={values.realApartmentNumber} className="real-apartment-number-input" placeholder="Ex: Sibiu" />
                        </section>
                    </div>

                    <h3>Pasul 3: Traseul, durata și motivul</h3>

                    <div className="data-2nd-row form-row">
                        <section> 
                            Cunoscând prevederile art. 326, referitoare la faslul în declarații(2), precum și ale art. 352 referitoare la zădărnicirea combaterii bolilor din Noul Cod Penal, declar pe propria răspundere faptul că mă deplasez în interes personal/profesional, între orele
                            <AutosizeInput type="text"  onChange={(e) => handleInputChange(e)} name="timeInterval" value={values.timeInterval} className="time-interval-input" placeholder="Ex: 11:00 - 13:00" />
                            de la
                            <AutosizeInput type="text"  onChange={(e) => handleInputChange(e)} name="from" value={values.from} className="from-input" placeholder="Ex: Str. Luncii nr .23 " />
                            până la
                            <AutosizeInput type="text"  onChange={(e) => handleInputChange(e)} name="to" value={values.to} className="to-input" placeholder="Ex: Str. C.A Rosetti nr. 75" />
                            pentru:
                           <article>
                                <input type="checkbox"  /> Deplsararea între domiciliu și locul de muncă, atunci când activitatea profesională este esențială și nu poate fi organizată sub formă de lucru la distanță sau deplasarea în interes profesional care nu poate fi amânată
                           </article>
                           <article>
                                <input type="checkbox"  /> Consult medical de specialitate care nu poate fi amânat
                           </article>
                           <article>
                                <input type="checkbox"  /> Deplasare pentru cumpărături de primă necesitate la unități comericale din zona de domiciliu
                           </article>
                           <article>
                                <input type="checkbox"  /> Deplasare pentru asigurarea asistenței pentru persoane în vârstă, vulnerabile sau pentru însoțirea copiilor
                           </article>
                           <article>
                                <input type="checkbox"  /> deplasare scurtă, lângă domiciliu, pentru desfășurarea de activități fizice individuale, în aer liber, cu excluderea oricărei forme de activitate sportivă colectivă
                           </article>
                           <article>
                                <input type="checkbox"  /> Deplasare scurtă, lăngă domiciliu, legată de nevoile animalelor de companie
                           </article>
                           <article>
                                <input type="checkbox" /> Deplasare pentru rezolvarea următoarelor urgențe: 
                                <AutosizeInput type="text" name="emergency-reasons" onChange={(e) => handleInputChange(e)} value={values.emergencyReasons} />
                           </article>
                        </section>
                    </div>

                    <h3>Pasul 4: Data și semnătura</h3>
                    <p>Folosește mouse-ul sau degetul (în cazul unui dispozitiv cu touch-screen) pentru a realiza semnătura</p>

                    <div className="data-2nd-row form-row">
                        <section> 
                            <article>Atât declar, susțin și semnez.</article>
                            <article>
                                Data <input type="date" />
                            </article>
                            <article class="signature-wrapper">
                                Semnătura
                                <SignatureCanvas penColor='black' canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} />
                            </article>
                           
                        </section>
                    </div>

                </FormGroup>    
            </section>
          
          <section className="preview-wrapper">
            <PDFViewer>
                <MyDocument values={values} />
             </PDFViewer>
          </section>
           

        </div>

      
       
            
        </div>
    )
}


export default Formular;