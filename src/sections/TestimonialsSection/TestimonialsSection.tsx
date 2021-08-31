


import React from "react" 
import { useTranslation } from "react-i18next"
import { Wave } from "../../components"

import { SliderForTestimonails } from "../../components"

import "./TestimonialsSection.scss"

export const TestimonialsSection = () => {

    const {t} = useTranslation("platform")
  

    return (
        <>
         <Wave  colorFirstWave="#f5f9ff"   direction="0"/> 
        <section className="testimonial-section ">
            <h4 className="title">ClearSight</h4>
            <h1 className="description">{t("testimonials-description")}</h1>
           <SliderForTestimonails />
        </section>
        </>
    )
}