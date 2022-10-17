import React from 'react'
import './brief.css'
import image from './images/Vectortower.png'

export default function Brief() {
    return (
        <>
        <div className='main-body'>
            <div className="innerBody">
                <div className='time'><img className='imgClock' src="https://img.icons8.com/material-outlined/24/000000/clock--v1.png" alt='' /> <p className='timeText'> Starts on 17th Jun'22 09:00 PM (Indian Standard Time)</p></div>
                <h1 className='bodyHead'>Data Sprint 72 - Butterfly Identification</h1>
                <p className='bodyPara'>Identify the class to which each butterfly belongs to</p>
                <div className="category">
                    <img src={image} alt="" className="tower" />
                    <p className="cat">Easy</p>
                </div>
            </div>
        </div>
        <div >
            <div className="innerBody2">
                <div className="head">
                    <h5><b>Overview</b></h5>
                    <div className='greenline'>
                </div>
                </div>
                <div className="lowerBody">Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. <br /><br />

                    An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. <br /><br />

                    Your Task is to build an Image Classification Model using CNN that classifies to which class of weather  each image belongs to.
                </div>
            </div>
        </div>
        </>
        
    )
}
