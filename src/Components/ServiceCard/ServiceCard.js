import './ServiceCard.scss'

import { MdBrandingWatermark, MdMovie, MdShoppingCart } from "react-icons/md";

const ServiceCard = () => {
  return (
    <div className="Service-cards">
      <div className="card">
        <i> <MdBrandingWatermark /></i>
        <h2>Branding</h2>
        <p>To an English person, it will seem like simplified English,told me what</p>
      </div>
      <div className="card">
        <i><MdMovie /> </i>
        <h2>Movies</h2>
        <p>To an English person, it will seem like
          simplified English,told me what</p>
      </div>
      <div className="card">
        <i><MdShoppingCart /> </i>
        <h2>Marketing</h2>
        <p>To an English person, it will seem like simplified English,told me what</p>
      </div>
    </div>
  )
}

export default ServiceCard