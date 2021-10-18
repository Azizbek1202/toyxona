import React from 'react'
import './styleServices.scss'
import search from '../../Assets/icons/Search.svg'
import location from '../../Assets/icons/Location.svg'
import {InputGroup, Input,InputGroupAddon, InputGroupText, ButtonGroup, Button } from 'reactstrap'
import { data, data1, data2 } from '../../mock/mockdata'

const Services = () => {
    return (
        <div className="services">
           <div className="inputs">
           <div className="input1">
          <InputGroup style={{"display": "flex", "border":"1px solid white", "paddingLeft":"10px", "borderRadius":"15px", "backgroundColor":"white", "paddingTop":"5px", "paddingBottom":"5px", "boxShadow": " 2px 2px 2px grey",}}>
        <Input placeholder="Qidiruv" style={{"border":"1px solid white","borderRight": "none",  }}/>
        <InputGroupAddon addonType="append" style={{"backgroundColor":"white"}}>
          <InputGroupText><img src={search} alt="" style={{"paddingRight":"10px", "marginLeft":"165px",}}/></InputGroupText>
        </InputGroupAddon>
      </InputGroup>
          </div>
          <div className="input2">
          <InputGroup style={{"display": "flex", "border":"1px solid white", "paddingLeft":"10px", "borderRadius":"15px", "backgroundColor":"white", "paddingTop":"5px", "paddingBottom":"5px", "boxShadow": " 2px 2px 2px grey",}}>
          <InputGroupAddon addonType="prepend" style={{"backgroundColor":"white"}}>
          <InputGroupText><img src={location} alt="" style={{"paddingRight":"10px"}}/></InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Viloyat , shahar" style={{"border":"1px solid white","borderRight": "none"}}/>
          </InputGroup>
          </div>
           </div>
          <div className="p">
            <p>Xizmatlarimiz</p>
          </div>
            <div style={{"marginLeft":"170px", "marginTop":"50px"}}>
            {
                data.map(value=>{
                    return(
                        <div key={value.id} style={{"display":"inline-block"}} className="map">
                                <div style={{"display":"flex","backgroundColor":"white", "padding":"10px 20px", "borderRadius":"20px", "marginRight":"40px", "cursor":"pointer"}}>
                                    <img src={value.icon} alt="" style={{"marginRight":"5px"}}/>
                                    <p style={{"color":"#7E8B9B"}}>{value.title}</p>
                                </div>
                        </div>
                    )
                })
            }
            </div>
            <div style={{"marginLeft":"210px", "marginTop":"30px"}}>
            {
                data1.map(value=>{
                    return(
                        <div key={value.id} style={{"display":"inline-block"}} className="map">
                                <div style={{"display":"flex","backgroundColor":"white", "padding":"10px 20px", "borderRadius":"20px", "marginRight":"40px", "cursor":"pointer"}}>
                                    <img src={value.icon} alt="" style={{"marginRight":"5px"}}/>
                                    <p style={{"color":"#7E8B9B"}}>{value.title}</p>
                                </div>
                        </div>
                    )
                })
            }
            </div>
            <div style={{"marginLeft":"300px", "marginTop":"30px"}}>
            {
                data2.map(value=>{
                    return(
                        <div key={value.id} style={{"display":"inline-block"}} className="map">
                                <div style={{"display":"flex","backgroundColor":"white", "padding":"10px 20px", "borderRadius":"20px", "marginRight":"40px", "cursor":"pointer"}}>
                                    <img src={value.icon} alt="" style={{"marginRight":"5px"}}/>
                                    <p style={{"color":"#7E8B9B"}}>{value.title}</p>
                                </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
export default Services