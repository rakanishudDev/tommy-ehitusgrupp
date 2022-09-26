import {useState} from 'react'
import FullImage from './components/FullImage'
import "./styles/TehtudTööd.css"
import image11 from "./assets/images/11.jpg"
import image12 from "./assets/images/12.jpg"
import image13 from "./assets/images/13.jpg"
import image14 from "./assets/images/14.jpg"
import image21 from "./assets/images/21.jpg"
import image22 from "./assets/images/22.jpg"
import image31 from "./assets/images/31.jpg"
import image32 from "./assets/images/32.jpg"
import image33 from "./assets/images/33.jpg"
import image41 from "./assets/images/41.jpg"
import image42 from "./assets/images/42.jpg"
import image43 from "./assets/images/43.jpg"
import image44 from "./assets/images/44.jpg"
import image5 from "./assets/images/5.jpg"
import image51 from "./assets/images/51.jpg"
import image52 from "./assets/images/52.jpg"
import image53 from "./assets/images/53.jpg"
import image54 from "./assets/images/54.jpg"
import image55 from "./assets/images/55.jpg"
import puitaed from "./assets/images/puitaed.jpg"

const TehtudTööd = () => {
    const [fullImage, setFullImage] = useState(false)
    const [currentImage, setCurrentImage] = useState('')
    const openFullImage = (image) => {
        setFullImage(true)
        setCurrentImage(image)
    }
    const closeFullImage = () => {
        setFullImage(false)
        setCurrentImage('')
    }
  return (
    <>
    {fullImage && <FullImage closeFullImage={closeFullImage} image={currentImage}/>}
    <div className="tehtudtood-container">
        <div className="tehtudtood-row">
            <p className="aadress">Tallinn, Tartu mnt 85</p>
            <div className="imgs-container">
                <div className="img-container" onClick={() => openFullImage(image11)}>
                    <img className="img" alt="image" src={image11} />
                </div>
                <div className="img-container" onClick={() => openFullImage(image12)}>
                    <img className="img" alt="image" src={image12} />
                </div>
                <div className="img-container" onClick={() => openFullImage(image13)}>
                    <img className="img" alt="image" src={image13} />
                </div>
                <div className="img-container" onClick={() => openFullImage(image14)}>
                    <img className="img" alt="image" src={image14} />
                </div>
            </div>
        </div>
        <div className="tehtudtood-row">
            <p className="aadress">Tallinn, Lai 2</p>
            <div className="imgs-container">
                <div className="img-container" onClick={() => openFullImage(image21)}>
                    <img className="img" alt="image" src={image21} />
                </div>
                <div className="img-container" onClick={() => openFullImage(image22)}>
                    <img className="img" alt="image" src={image22} />
                </div>
            </div>
        </div>
        <div className="tehtudtood-row">
            <p className="aadress">Keila, Paldiski mnt 28e</p>
            <div className="imgs-container">
                <div className="img-container" onClick={() => openFullImage(image31)}>
                    <img className="img" alt="image" src={image31} />
                </div>
                <div className="img-container" onClick={() => openFullImage(image32)}>
                    <img className="img" alt="image" src={image32} />
                </div>
                <div className="img-container" onClick={() => openFullImage(image33)}>
                    <img className="img" alt="image" src={image33} />
                </div>
            </div>
        </div>
        <div className="tehtudtood-row">
            <p className="aadress">Kiili, Padi tn 16</p>
            <div className="imgs-container">
                <div className="img-container" onClick={() => openFullImage(puitaed)}>
                    <img className="img" alt="image" src={puitaed} />
                </div>
            </div>
        </div>
        <div className="tehtudtood-row">
            <p className="aadress">Saue linn, Koondise tn 26</p>
            <div className="imgs-container">
                <div className="img-container" onClick={() => openFullImage(image41)}>
                    <img className="img" alt="image" src={image41} />
                </div>
                <div className="img-container" onClick={() => openFullImage(image42)}>
                    <img className="img" alt="image" src={image42} />
                </div>
                <div className="img-container" onClick={() => openFullImage(image43)}>
                    <img className="img" alt="image" src={image43} />
                </div>
                <div className="img-container" onClick={() => openFullImage(image44)}>
                    <img className="img" alt="image" src={image44} />
                </div>
            </div>
        </div>
        <div className="tehtudtood-row">
            <p className="aadress">Tallinn, Vabaduse pst 181/1</p>
            <div className="imgs-container">
                <div className="img-container" onClick={() => openFullImage(image5)}>
                    <img className="img" alt="image" src={image5} />
                </div>
                <div className="img-container" onClick={() => openFullImage(image51)}>
                    <img className="img" alt="image" src={image51} />
                </div>
                <div className="img-container" onClick={() => openFullImage(image52)}>
                    <img className="img" alt="image" src={image52} />
                </div>
                <div className="img-container" onClick={() => openFullImage(image53)}>
                    <img className="img" alt="image" src={image53} />
                </div>
                <div className="img-container" onClick={() => openFullImage(image54)}>
                    <img className="img" alt="image" src={image54} />
                </div>
                <div className="img-container" onClick={() => openFullImage(image55)}>
                    <img className="img" alt="image" src={image55} />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default TehtudTööd