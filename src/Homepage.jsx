import Teenused from './components/Teenused';
import './styles/App.css';
import image13 from "./assets/images/13.jpg"
import image21 from "./assets/images/21.jpg"
import image55 from "./assets/images/55.jpg"
import puitaed from "./assets/images/puitaed.jpg"
import { Link } from 'react-router-dom';


const Homepage = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return ( 
    <div className="App">
        <div className="image-background">
          <div className="border-boxshadow">
            <div className="border">
              <div className="landing-info">
              <p className="landing-text">
                TOMMY EHITUSGRUPP ON ÜLDEHITUSEGA AKTIIVSELT TEGELENUD 20 AASTAT. OLEME SELLE AJAGA OMANDANUD PALJU KOGEMUSI JA TEADMNISI. PAKKUME KLIENDILE LÄBIMÕELDUD NING KESTVAID EHITUS LAHENDUSI. NÕUSTAME NING AITAME KLIENTI TEMA IDEEDE NING SOOVIDE ELLUVIIMISEL. MEIE PÕHILISTEKS KLIENTIDEKS ON ERAISIKUD. TÖID TEOSTAME HARJUMAA PIIRES. EESMÄRGIKS ON EHITADA NII ET, KLIENT JÄÄB ALATI TELLITUD TÖÖDEGA RAHULE.
              </p>
              <p>Meeldivat koostood soovides, <em>Tommy Ehitusgrupp</em>.</p>
              </div>
            </div>
            </div>
          
        </div>
        <Teenused />
        <div className="border-boxshadow">
          <div className="border">
            <div className="homepage-tehtud-tood">
              <p className="tehtud-tood-title">Hiljuti Tehtud Tööd</p>
              <div className="tehtud-tood-container">
                <Link onClick={scrollToTop} className="link" to="/tehtud-tood">
                <div className="homepage-img-container">
                  <img className="homapage-img" alt="tehtud tööd" src={image13} />
                  <p className="homapage-aadress">Tallinn, Tartu mnt 85</p>
                </div>
                </Link>
                <Link onClick={scrollToTop} className="link" to="/tehtud-tood">
                <div className="homepage-img-container">
                  <img className="homapage-img" alt="tehtud tööd" src={image21} />
                  <p className="homapage-aadress">Tallinn, Lai 2</p>
                </div>
                </Link>
                <Link onClick={scrollToTop} className="link" to="/tehtud-tood">
                <div className="homepage-img-container">
                  <img className="homapage-img" alt="tehtud tööd" src={image55} />
                  <p className="homapage-aadress">Tallinn, Vabaduse pst 181/1</p>
                </div>
                </Link>
                <Link onClick={scrollToTop} className="link" to="/tehtud-tood">
                <div className="homepage-img-container">
                  <img className="homapage-img" alt="tehtud tööd" src={puitaed} />
                  <p className="homapage-aadress">Kiili, Padi tn 16</p>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage-kontakt">

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
  )
}

export default Homepage