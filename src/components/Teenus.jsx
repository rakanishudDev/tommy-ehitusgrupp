import "../styles/Teenus.css"

const Teenus = ({service}) => {
  return (
    <div className="teenus-container">
      <h2 className="teenus-header">{service.header}</h2>
      <p className="teenus-description">{service.description}</p>
    </div>
  )
}

export default Teenus