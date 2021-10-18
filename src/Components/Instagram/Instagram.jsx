import React from 'react'
import './styleInstagram.scss'
import background from '../../Assets/images/background.png'
import insta from '../../Assets/images/insta.png'
import media from '../../Assets/icons/media.svg'

const Instagram = () => {
    return (
        <div className="instagram" style={{ backgroundImage:`url(${background})`,}}>
            <p>Instagram</p>
            <div className="forimg">
                <img src={insta} alt=""/>
                <img src={insta} alt=""/>
                <img src={insta} alt=""/>
            </div>
            <p>Follow <span><img src={media} alt="" /></span></p>
        </div>
    )
}
export default Instagram;