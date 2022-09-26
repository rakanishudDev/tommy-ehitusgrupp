import "./styles/Kontakt.css"
import {ReactComponent as Phone} from './assets/phone.svg'
import {ReactComponent as Mail} from './assets/mail.svg'
import {ReactComponent as Location} from './assets/location.svg'


const Kontakt = () => {
  return (
    <div className="kontakt-info-container">

        <div className="border-boxshadow">
            <div className="border">
              <div className="landing-info">
              <div className="info" >
                    <p className="firma-nimi">Tommy Ehitusgrupp OÜ</p>
                    <p className="firma-reg"><i>Reg. nr: 11490616</i></p>
                    <div className="div-flex"><Location width="1rem" /> <address className="firma-aadress">Sütiste tee 19-12, 13911 Tallinn</address></div>

                    <div className="div-flex"><Phone width="1rem" /> <span><a className="firma-info" href="tel:37256555255">372 5655 5255</a> E-R: 8-16</span></div>
                    <div className="div-flex"> <Mail width="1rem" /> <a className="firma-info" href="mailto:tommyehitusgrupp@gmail.com">tommyehitusgrupp@gmail.com</a></div>
                </div> 
              </div>
            </div>
        </div>


        <div className="box-shadow-container">
            <div className="kontakt-container" >
                <div className="border-boxshadow">
                    <div className="border">
                        <div className="kontakt" >
                            
                            <p className="tehtud-tood-title">Võta meiega ühendust!</p>
                            <form className="kontakt-form">
                                <fieldset className="form-fieldset">
                                    <legend className="form-label"><label>Nimi</label></legend>
                                    <input className="form-input" required type="text" id="name" name="name"/>

                                </fieldset>
                                <fieldset className="form-fieldset">
                                    <legend className="form-label"><label>E-Mail</label></legend>
                                    <input className="form-input" required type="mail" name="mail" id="mail"/>
                                </fieldset>
                                <fieldset className="form-fieldset-textarea">
                                    <legend className="form-label"><label>Sõnum</label></legend>
                                    <textarea className="form-textarea" require></textarea>
                                </fieldset>
                                <div className="form-button-container" >
                                    <button className="form-button" type="submit" id="submit" name="submit">Saada</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Kontakt