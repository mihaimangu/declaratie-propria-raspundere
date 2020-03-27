import { PDFViewer } from '@react-pdf/renderer';
import React, { useState } from 'react';
import { FormGroup, Jumbotron, Button } from "react-bootstrap";
import AutosizeInput from 'react-input-autosize';
import SignatureCanvas from 'react-signature-canvas';
import MyDocument from '../components/pdf';

//import { Document, Page, Text,  View, PDFDownloadLink, PDFViewer } from 'react-pdf';
import logo from '../logo.svg';

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

    const [signature, setSignature] = useState("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEhUQExIVFhUVEBgVEhUVFxAVEBAPFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGysdHR8tLS0tLS0vKy0tLS0tLS8rLS0tLS0tLS0tLS0rKy0rLS0tLS0tLS0tKy0tLS03Ny0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAACAwQAAQUH/8QAORAAAgEBBQUECAUFAQEAAAAAAAECAwQRITFREhNBcbEUYZGhIjJTgZLB0fAFQlJy4SNDYnOCM6L/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAjEQEBAAIBBAIDAQEAAAAAAAAAAQIRAxIhMUETUSKB8JFh/9oADAMBAAIRAxEAPwD7EYxgLaeS5BA08lyCAktHrCxlo9YWA+y8SgnsvEoAVacveSlVoy95KAVPNcy0ip5rmWgYgZeQMDFdD1USFdD1V98QGE1qzXIpJrTmuQCRtmz9wobZs/cBUBWyYYFbJgRmMYC8xjARVc3zBCq5vmCBjGMBZulobdLQMwEcqjTz4m3j1Bnm+b6nAKaUdpXvFh7paA2f1RoE9b0csBe9eoy1cPvQQA2k3J3PFXD90tBFn9b3FQCpwSTaXARvHqU1cnyIwC3r1KVSWhFKdxVGuNBm6WhPUk07kx2/XHAhtVrim3feTqot0fvXqNorazxPKf4itH5DqH4gv0vMt0ZKXlxnt6e6WgustnLA5QrqWTv6nbTkufyKWaXll8Fb16nYTbaTeAsOj6yCVO6WhnSWgZxgR716nd69QDAVQgmk2gt0tDUslyDADdLQ4MMBL2h93mbtD7vMUYChUU8ccceB3s67/IZTyXIICaU9j0V5nO0Pu8zlo9Y5RinffoAae3n7ru8Ps67/ACBoyi8ldcapaorAJ1a7KGxivMU7W1p5natojs3vBX6q8inb6SwUW+RMlq0wt9LI2hyw1DlRSzbXgQL8Tp/pl4g1LdTeLjLxLTC/S04svo60yguL8ien+I43YE87TQ9nJ/8AX8mp2ihwpy+L+TSYanhpePU8V6UrU2vy+Z59WaecsTTtVF505/F/IKtFD2cvi/kY469ObPClKEeMiunaNjBNNd6Fb+h7KXxfycdeh7OXxP6mlm/VcmU6fayFr7o//SHxtilhLC7Q81Wij7OXxfyUWe0Ur8IPxM7h/wAqs5de49GEYviw3SUcVwAo1lLDZa6Has5XP0cDGx0459t+XO0Pu8zdofd5iYyvOkNFPZ13+Ruzrv8AIcYCZ1XHBXYHO0Pu8wKub5ggN7Q+7zMKMA7s71N2d6lJgEKtdhdlh4G7QtBE83zfUCQD5x2vSvu5mpLO5/lZFK03K7zCsdW/a/YydNfjutijNQjJ4SauvzuxI522Ps14yOwf9Op/z1IJI0xxb8fHO+1ErVB50l8U/qdhWg/7Ufin9SJ4AOTNZg6JxSru1044qlH4pip26D/sr4p/UiaOXGk44vOHH+tWdsh7GPxT+oStMPYx+Kp9SKMSlUibhEZceP8AWmdqh7GPxVPqc7ZD2Mfin9QHR7xMo4jpxc3JxxT22HsV8U/qc7VD2MfiqfUluQUIot0R5nNjYpVrh7GPxT+pTZK0ZSS3Sxd16lPAkoU1pf4nsUIL0bsPSRnyakcWOGWWXr/I1nndUSWrXUsjW2r4cb2kS0Kd1S//ACfzG0Kfp3v9Tu8zlyu3XxY3H/TuzvU3Z3qUnGUdBPaO43aO5k5gHbrax1N2d6jqWS5BgTdnepikwC99HXqbfR16khgDlTeaXQnq0ZceqPQisFyJrY8Avj5QuEUsWHY7r5XezfyJ6mYywyxn/qfyLOiz8XKS/pzu/wAerIZu4ps//lU5x6snu7jXGNuOd6nbBaHuBy5G0ro6iVEJUmMUg94WmzdDCzNlUKMEsXj7/oTKqw4SwIsrPOZGz2MsXyQicE8ov3tfQNyfeHjdkxGWUTKi9Oh1Q4XDXV7hVS0PuL93Dy4r7PBR18C+naItqKvbvV+DSPA7TLu++Q+w2qTnFXLGS17jHPjt71x3kmNexRm3PLi8cDsaiUr3wb+YqyWm+Wzd+Z4+I6dpjc1c8Pqc9x16WnLueVO/jr5MzrR16kMZphoo3ll8D3MtOh3cy06FZgkqFRJXN4rmd30depNVzfMECvfR16mJDAd2Xoc2XoXgVJXfUBVRJpYnnWiok87+h2vPF8cSWaIjbjLqSbKPw5Yz/wBb+QnZKrAsZ/638jT02yy/Emzf+dT/AJ6smbK6cLqU/wDnqSbKNcV8Mu9BIC4cjkpM1jWZEtGu9x2pF6iTWRrKpowV+Lv5DFNLgSqrdlE06rf3kOi1Wy5XuqdpDjbblw8jzwGifixZ5YYxVUtKYqdfRCrjqjeX6Y4OawW9vKLFc5wx/MtccSbZRRYl/Uh+9dSucmq8rkv5RdYv/bBP13fl3lUqbvfe3hnxI7DhW/7fzPRo4yy/M9e8487q/o4sJlP21OldwDu7iyCfE6znr0MZJOzbSNtIhMEjqLF8wdl6FdLJcgwIbjFxgMKqyXEmc3q/Fi3zZFCaksXcuIiUWz1IUL1kvmxis0VwXkTEy6eZRoXq8ss1nuv74tA2ipsu6OC8Ecs1Vtyxbug9Sy3VXHZ1GEk+N3Uikksl8imhJuE7/wDH5k04t5K80xi2NKUnfwXICo782FVpOKxw6kFVvU6MMdtscjK1RE+2AzjOnHFvMoPbO7YKRlBltRN5IPaRnJaj42RtXj6NiV208tXl4vAzvJjHNycqFB0435K8bLYXHafd6t4G977uV9428/l5DIUW+DLLJZ3tRd35kIste71W373d4FtkqScle7lflhdmYcmWXdy/jbKbZaS3l+K9JvqVUo3T97+Yp2lJ8M9ON+o1Vk1fgn5nLlK348+OXXtacZA6/e/MFWh5X+bKabXkxnsZixQWi8Ed2FovBELuUslyDI6kmm0mzm29X4sC0xFtvV+LMAJwr3CNuEAcMlyOTJ3WawQE6smAq0+tqayP1v2PAJ0nJXvDkMs1nSvzxi1joW9ISWafoTuX6cPEVKUuXkeh2dRi1rcBHDTwLzKRaV5Fpdyxbz8SOK2ncsOY621tubfDJckS33M7sMey0yE6KWbO3RQtQD2TXwt1iUrskgdp33mDuIUy5HHWlqA23m2zruChTb0I7Ry58my3E2wWQpJfwFKOHBL3XlLyOXkIoSUcWWWKvfNXLiupLNrgNsXrx/cjLPVm3NOS9UkMk25vDi8uZdSUVF3JX+ZFfdJ/ufUqhXbw+SMcr2W4prK2tKEn3HaVmxveOPEqpRv4ebKI0V9sytruw4cMru9zkdJN+zb99xR1hq5vmCUxpJq98Tu4QEpircIwDTE/ae7zN2nu8wEzzfNglG4vxvzx8TkrN3+X8gFSu2cTkbTDFJp3K93aI8+2Xr0W7/vQCwZzw/tv5Gkx7bU6u+lM/wAQUoSkov0bs+N7PJr26T0Q6k/6VXnDqyBRvOji48e6tzLuGRpB7N2ILrHVL9HUJwFNnHUvNsXk6+1byBlIzxD3a4sFz0Q2xyzZRuChNr6gqOo2MCmVY3KiU2aMTbJ1O4y2yyuxRgh9mXpx/cidTH2TGcf3IzyvZXGflGqr0n+59QqTuYdCnfVV+W2/mA4NzaS/M+pRfp9/9elQd+V5UqeGbJLGtjFrHnkVdo7vMxyvd6HFh+PdKod7DH9m7/I3Zu/yKtpNG0slyDJ99s4XZG7T3eYSoMT9p7vMwCDDNwzbhgU08lyCExrJYaGddAItUb37hVngk5Nv8j8BdrnKTwwXgJ/D4u+f+t/I1mN1tlc5vQJTW7q7PBw9+LPMjNnpWKnFxnCctna2br88Lw+w0l/dXkdOGeOG5WV3l3eVK9g7B6/YqPtV5Gdipe2XkX+ef0R015SjcFPwPTX4fSz33QPsdG+/eLyI+fFFwyryI0rzbNx7boUrrt4l4C3+HU/aeSKfPFfiryBkD01+G0/aeSD7DBYbzoVvLFfhyeaoHJxuPT7FT41AXY6T/udCvyQ+CvNTH2OXpxw/MupXKw0vadDtGzU4tS3qwfcVuUJw3YLM/wCqv3v5jFVlfLS99RVkd9VP/J/MbJYtXLN66la0xxuv2NVRiYjdy0KKNCV33gUsdGOVtXmFb9G36KtE9XN8wRsqbeK4nNwwFmGbhmArMDvFqvFG3i1XigI55vm+pwOUXfk8zmw9H4MB1GmmstQ4UUskDRlcrnhzGbxarxQ2jUTWizw43L3HlTo0n/dfws9e0Y5Y8sTxpWSTfqPPRm/Ffu6Y80+oKNnpe1fwsKNmpP8Auv4WLdn2br9PMdZKSb/k1t7b3WE860crFH9b1y4A0rJT4Tb9xVGCaeKyuWtxlTa4PwZz3O/box459Fdjh+p+BUqMIrES4PR+DDnJaryvKy2r2SenXGC4k1SNNv8A9Gu5IJbL/lkta696feheRS0cqVL2nkdhRpv+437mTLkPpVmldclzw6k91ew3Zqf634MCdGl7R/Cw9tvihFSzt5Yj9nTPo2hGnGSlvL7u5k0pNybvfrO7leMVjlpd4jaFjxV75kbkLjb20XGT1YyNSX6mWqzwWj5sNUo93iR1RHxZPMjUlqV08go0bvyvwYWw9H4Mpa1wws81VSyXIMXTkkkm1kFvFqvFENBGB3i1XijARGMYC2nkuQQNPJcggJLR6wsZaPWFgPsvEoJ7LxKAJrVRTWXFE8IJZFloy95KTuo1PLtPNc0WkdPNcywhIKjPLm+689e48+cby0qtm0jg3mUUbLgvvyCUC6h6q++JPWjoienY1xOV6EU1hwLSa05rkVtq0xidQWg+yrH3Chtmz9xCVDXcBVbueA0XWyYEhgZAwTvxyCNvTMYwSiq5vmCFVzfMEDGMYC7ZRtlHTARSeL5nL3qaeb5vqcAqoK9DNlC7P6o0Ce04XfegnaY61cPvQQA2hn7inZRNZ/W9xUAuqsHyJbyurk+RGBr+9lqiiIuQG2USVXi/vgWEdbN/fAAb3qPsyvT5k5RZcnzAdsoTaFcvePE2rJc/kBPe9QqTxQAdH1kBXsrQ44hHGBFe9TXvU4YCuksFyD2UDSyXIMDmyjHTAR76WvQ2+lr0AMBVGkmr7up3cx06hU8lyCAmqScXcsgN9LXodtHrCwH0vSzxu++Azcx06i7LxKAEVIqKvWDFb6WvQfacveSgMjUbdzeD5D9zHTqTU81zLQF7mOnUQ60tehWQMA99LXoOpwUle8yYroeqgNuY6dRdV7OCwKCa1ZrkAG+lr0DpPadzxEjbNn7gHbmOnUGdNJXrNDgK2TAm30teht9LXoAYCvcx06m3MdOowwEsqjTuTwXIHfS16HKub5ggHvpa9DAGAxjGAtp5LkEYwElo9YWYwD7LxKDGAVacveSmMAVPNcy0xgMQM6YDhXQ9VGMAwmtWa5GMAkbZs/cYwFQFbJnDASGMYC8xjARVc3zBMYDGMYD/2Q==");



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
        console.log('grabbing image');
        let trimmedCanvas = sigPad.getTrimmedCanvas().toDataURL('image/png');
        setSignature(trimmedCanvas)
    }

    const resetSignature = e =>{
        sigPad.clear();
    }

    let sigPad;



    return (
        <div>
            
        <div className="formular-wrapper">
             <header className="App-header" style={{display:'none'}}>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Generare formular aplicatie pe propria raspundere
                </p>
            </header>

            <Jumbotron>
                <h1>Declarație pe propria răspundere</h1>
                <p className="jumbo-paragraph">Această aplicație te ajută să generezi declarația pe propria răspundere în format digital (PDF). Guvernul a impus folosirea acestui formular, pe perioada crizei generate de noul Covid-19 </p>
               
            </Jumbotron>

            <section className="form-wrapper">

                <FormGroup className="formular-form-wrapper">

                    <h3>Pasul 1: Date generale</h3>
                    <div className="initial-data form-row">
                        <section className="initial-data--inner-wrapper">
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="first-column">Nume, prenume:  </td>
                                         <td>   
                                             <AutosizeInput style={{minWidth: "150px"}} type="text"  onChange={(e) => handleInputChange(e)} name="fullName" value={values.fullName} placeholder="Ex. Ion Popescu" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td> Data nașterii: </td>
                                        <td><AutosizeInput style={{minWidth: "80px"}}  onChange={(e) => handleInputChange(e)} value={values.birth} className="birth" name="birth" type="text" placeholder="Ex: 08 -11 - 1993" /></td>
                                    </tr>

                                    <tr>
                                        <td> Adresa locuinței: </td>
                                        <td><AutosizeInput onChange={(e) => handleInputChange(e)} value={values.residence} name="residence" className="residence" type="text" placeholder="Ex: Teleorman, Alexandria, Str. Dunării nr. 23" />
                                         </td>
                                    </tr>
                                </tbody>
                            </table>

                        </section>
                    </div>

                    

                    <h3>Pasul 2: Locul și motivul deplasării</h3>

                    <div className="data-2nd-row form-row">
                        <section> 
                            Locul/locurile deplasarii
                            <AutosizeInput type="text" style={{width:"100%", textAlign: 'left'}} onChange={(e) => handleInputChange(e)} name="to" value={values.to} className="to-input" placeholder="Ex: Str. C.A Rosetti nr. 75 / Farmacie str. Dunării" />
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
                                <input onChange={(e) => handleReasonChange(e)} name="6" type="checkbox"  /> Realizarea de activități agricole <AutosizeInput type="text" name="agriReasons" onChange={(e) => handleInputChange(e)} value={values.agriReasons} />
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

                    <div className="data-2nd-row form-row">
                        <section> 
                            <article>Atât declar, susțin și semnez.</article>
                            <article class="column-article date-article">
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
                            <article class="signature-wrapper">
                                Semnătura

                                <Button onClick={() => resetSignature()} variant="danger">
                                    Resetează semnatura
                                </Button>
                                <SignatureCanvas signature={signature} penColor='#36a8ff' canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} 
                                ref={(ref) => sigPad = ref}
                                />
                                
                                <Button onClick={() => grabImage()}>
                                    Aplică semnatura
                                </Button>

                            </article>
                           
                        </section>
                    </div>

                    
                </FormGroup>    
            </section>
          
          <section className="preview-wrapper">
            <PDFViewer>
                <MyDocument signature={signature} theDate={humanDate} values={values} reasons={reasons} />
             </PDFViewer>
          </section>
           

        </div>

      
       
            
        </div>
    )
}


export default Formular;