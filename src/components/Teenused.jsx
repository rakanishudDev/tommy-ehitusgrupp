import {useState} from 'react'
import "../styles/Teenused.css"
import Teenus from './Teenus'
import {Link} from "react-router-dom"
const Teenused = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
      }
    const [services, setServices] = useState([
        {
            header: "Kodu remont",
            description: "Värskendame Sinu vananenud kodu uueks ja kaasaegseks."    
        },
        {
            header: "Vannitoa remont",
            description: "Ära lükka enam vannitoa uuendamist edasi ning värskenda ruum uue kaasaegse viimistlusega."    
        },
        {
            header: "Viimistlustööd",
            description: "Kõikides viimistlustöödes saame Sind aitada luues kvaliteetse, garantiiga tulemuse."    
        },
        {
            header: "Santehnilised tööd",
            description: "Teostame väiksemahulisi santehnilisi ja avariitöid."    
        },
        {
            header: "Kipsitööd",
            description: "Samuti teeme Kipsplaadist seinte, lagede paigaldust ning vajadusel lõpp pahteldus ja värvimine."    
        },
        {
            header: "Parketitööd",
            description: "Meie tuleme Teile appi parketi paigaldusel ning vajadusel valmistame ette ka aluspõranda."    
        },
        {
            header: "Maalritööd",
            description: "Pakume kvaliteetseid maarlitöid erinevatele pindadele, kodu või muu värskenduseks."    
        },
        {
            header: "Krohvimine",
            description: "Teostame sisekrohvimist MP75-ga. Lisaks pakume ka lubikrohvimist ja savikrohvimist."    
        },
        {
            header: "Plaatimine",
            description: "Teostame seinte ja põranda plaatimist. Oleme spetsaliseerunud vannitubade plaatimisele aga teeme ka erinevaid plaatimis töid."    
        },
        {
            header: "Tapeetimine",
            description: "Paigaldame kõiki erinevaid tapeete nagu paber, fliis, vinyl, samet ja fototapeete ja ka ülikalleid tapeete."    
        },
        {
            header: "Välitööd",
            description: "Vajate väljas aia ehitust või mõnda muud tööd siis võtke meiega ühendust."    
        },
        {
            header: "Pisitööd",
            description: "Meie poole võib pöörduda ka kõige väiksemate muredega."    
        }
       
    ])
  return (
    <div className="teenused-container">
        <div className="teenused-box-shadow">
            <div className="teenused">
            {services && services.map((service, i) => {
                return (<Teenus key={i} service={service} />)
            })}
            </div>
            <div className="hinnakiri"><Link onClick={scrollToTop} className="hinnakir-link" to="/hinnakiri">☛ HINNAKIRI ☚</Link></div>
        </div>
    </div>
  )
}

export default Teenused