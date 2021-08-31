import React from "react" 

import iconTestimonial from "../../assets/icon/testimonials-icon.svg"

import "./Testimonials.scss"

type TestimonialType = {
    name?: string;
    profession?: string;
    text? : string;
    img? : string,
}

export const Testimonials:React.FC<TestimonialType> = ({
    name,
    profession,
    text,
    img
}) => {

    return (

        <div className="container-testimonials">
            <img src={iconTestimonial}/>
            <p className="testimonials-text">{text}</p>
        <div className="testimonials-person">
            <img src={img}/> 
            <h2 className="person-name">{name}</h2>
            <h5 className="person-profession">{profession}</h5>
        </div>
        
        </div>
    )
}