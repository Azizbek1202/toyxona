import React from 'react'
import './styleContact.scss'

const Contact = () => {
    return (
        <div className="contact">
            <div style={{marginTop:`40px`}}>
                <p style={{fontSize:`25px`, marginLeft:`40px`,color:`#7C7676`,marginBottom:`10px`}}>Follow</p>
                <div style={{display:`flex`}}>
                    <p style={{fontSize:`19px`,marginRight:`5px`,color:`#F5BC8F`}}>Instagram  |</p>
                    <p style={{fontSize:`19px`,color:`#F5BC8F`}}>  Telegram</p>
                </div>
            </div>
            <div className="circle"></div>
            <div style={{marginTop:`40px`}}>
                <p style={{fontSize:`25px`, marginLeft:`20px`,color:`#7C7676`,marginBottom:`10px`}}>Aloqa</p>
                <div style={{display:`flex`}}>
                    <p style={{fontSize:`19px`,marginRight:`5px`,color:`#F5BC8F`}}>Email |</p>
                    <p style={{fontSize:`19px`,color:`#F5BC8F`}}>  Telefon</p>
                </div>
            </div>
        </div>
    )
}
export default Contact;