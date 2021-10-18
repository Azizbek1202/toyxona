import React from 'react'
import './stylePalaceOfCeremonies.scss'
import house from "../../Assets/images/house.png"
import tantana from "../../Assets/icons/tantana.svg"


const PalaceOfCeremonies = () => {
    return (
        <div className="palaceofceremonies">
            <div className="img">
               <img src={house} alt="" />
            </div>
            <div className="about">
                  <img src={tantana} alt="" />
                  <h5>Tantanalar saroyi</h5>
                  <p style={{"marginLeft":"30px","marginTop":"15px","marginBottom":"15px"}}>Ajoyib ko‘rinishdagi to‘y va marosimlar o‘tkazish koshanasi.</p>
                  <p>Sizning orzuyingizdai to‘y uchun bizning koshonamiz
                                  xizmatingizga tayyor.</p>
                        <div  style={{"display":"inline-block"}} className="map">
                               <img src={tantana} alt="" /><span style={{"marginTop":"0px","color":"#7E8B9B"}}>To'yxonalar</span>
                        </div>
            </div>
        </div>
    )
}
export default PalaceOfCeremonies;