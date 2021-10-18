import React from 'react'
import './styleClothes.scss'
import clothes from '../../Assets/images/clothes.png'
import libos from '../../Assets/icons/Toyliboslar.svg'

const Clothes = () => {
    return (
        <div className="clothes">
            <div className="img">
               <img src={clothes} alt="" />
            </div>
            <div className="about">
                  <img src={libos} alt="" />
                  <h5>Tantanalar saroyi</h5>
                  <p style={{"marginLeft":"30px","marginTop":"15px","marginBottom":"15px"}}>Ajoyib ko‘rinishdagi to‘y va marosimlar o‘tkazish koshanasi.</p>
                  <p>Sizning orzuyingizdai to‘y uchun bizning koshonamiz
                                  xizmatingizga tayyor.</p>
                        <div  style={{"display":"inline-block"}} className="map">
                               <img src={libos} alt="" /><span style={{"marginTop":"0px","color":"#7E8B9B"}}>To'y liboslari</span>
                        </div>
            </div>
        </div>
    )
}
export default Clothes
