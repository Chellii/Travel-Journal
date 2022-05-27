import React from "react"
import {GiPositionMarker} from "react-icons/gi"
import "../styles.css"

function Trip(props) {
    console.log(props.sp)
    return (
        <div className="trip_container">
            <div className="img_trip_container">
                <img src={require(`../images/${props.item.img}`)}  alt="img"/>
            </div>
            <div className="info_trip_container">
                <div className="info_gps">
                    <GiPositionMarker color="red" size={8}/>
                    <p>{props.item.location}</p>
                    <a  href={props.item.google_maps}>View on Google Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <span>{props.item.start_date} - {props.item.end_date}</span>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}

export default Trip