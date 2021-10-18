import React from 'react'
import './styleInvitation.scss'
import { data4 } from '../../mock/mockdata';
import taklifnoma from '../../Assets/icons/Taklifnomalar.svg'

const Invitation = () => {
    return (
        <div className="invitation">
            <h4>Taklifnomalar</h4>
            <div className="map">
                {
                   data4.map(value=>{
                       return(
                        <div key={value.id} className="card">
                            <div className="card-body">
                                <img src={value.image} alt="" />
                            </div>
                            <div className="card-footer" style={{"paddingLeft":"5px"}}>
                                <h5 style={{"fontSize":"15px"}}>{value.name}</h5>
                                <div style={{"display":"flex"}}><h6>{value.narxi}</h6><span style={{"fontSize":"10px", "marginTop":"5px"}}>{value.dona}</span></div>
                                <p style={{"fontSize":"13px"}}><span><img src={value.icon} alt="" /></span>{value.title}</p>
                            </div>
                        </div>
                       )
                   })
                }
              
                </div>
                <div className="icon" style={{"marginLeft":"85px", "marginTop":"50px"}}>
                <div  style={{"display":"inline-block", "boxShadow":"2px 2px 2px grey", "padding":"5px 20px", "borderRadius":"20px","cursor":"pointer"}} className="icon1">
                               <img src={taklifnoma} alt="" /><span style={{"marginTop":"0px","color":"#7E8B9B","marginLeft":"10px", "marginBottom":"10px"}}>Taklifnomalar</span>
                        </div>
                        
                </div> 
        </div>
    )
}
export default Invitation;
