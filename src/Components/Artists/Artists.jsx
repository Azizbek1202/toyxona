import React from 'react'
import './styleArtist.scss'
import { data3 } from '../../mock/mockdata'
import artust from '../../Assets/icons/sanatkorlar.svg'
import sozanda from '../../Assets/icons/Sozandalar.svg'

const Artists = () => {
    return (
        <div className="artist">
            <h4>San'atkorlar</h4>
            <div className="map">
                {
                   data3.map(value=>{
                       return(
                        <div key={value.id} className="card">
                            <div className="card-body">
                                <img src={value.image} alt="" />
                            </div>
                            <div className="card-footer">
                                <h6>{value.name}</h6>
                                <p>{value.title}</p>
                            </div>
                        </div>
                       )
                   })
                }
              
                </div>
                <div className="icon" style={{"marginLeft":"85px", "marginTop":"50px"}}>
                <div  style={{"display":"inline-block", "boxShadow":"2px 2px 2px grey", "padding":"5px 20px", "borderRadius":"20px","cursor":"pointer"}} className="icon1">
                               <img src={artust} alt="" /><span style={{"marginTop":"0px","color":"#7E8B9B","marginLeft":"10px", "marginBottom":"10px"}}>San'atkorlar</span>
                        </div>
                        <div  style={{"display":"inline-block", "boxShadow":"2px 2px 2px grey", "padding":"5px 20px", "borderRadius":"20px", "marginLeft":"70px","cursor":"pointer"}} className="icon1">
                               <img src={sozanda} alt="" /><span style={{"marginTop":"0px","color":"#7E8B9B","marginLeft":"10px", "marginBottom":"10px"}}>Sozadalar</span>
                        </div>
                </div> 
        </div>
    )
}
export default Artists;