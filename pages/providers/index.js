//Dependencies
import React, { useState, useEffect } from 'react'

// Assets
import heroImage from '../../assets/images/providers-page-avatar.webp'

// Components
import Head from 'next/head'
import { Banner } from "../../components/global"
import Testimony from '../../components/global/Testimony'
import Image from 'next/image'
import WhitePaper from '../../components/providers/WhitePaper'
import Wave from '../../components/global/Wave'
import Router from 'next/router'

// Localizations
import { testimonialContent, informationalContent } from './local'

const index = () => {
    const handleAnchorScroll = () => {
      const valuesSection = document.getElementById('values')
      valuesSection.scrollIntoView({behavior: 'smooth'})
    }

    //Authentication Checking
    useEffect(() => {
        const tokenCheck = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        tokenCheck != null ? "" : Router.push('/login');
    }, []); 
    
    return (
        <div className='page-providers'>
          <Head><title>Our Providers</title></Head>
            {/* Banner */}
            <Banner
                page="Providers"
                title="Catchy Title for Providers"
                description="Short phrase explaining the mission or what Tiny Docs offers for providers."
                btnColor="banner yellow"
                bannerImage={heroImage}
                onClick={handleAnchorScroll}
            />
            {/* Information */}
            <div id="values" className='section-info'>
                <div className='container'>
                    {
                        informationalContent.map((info, i) => {
                            return(
                                <div key={i} className='sub-section'>
                                    <Image className='info-icon' width={info.iconWidth} height={info.iconHeight} src={info.icon} />
                                    <h2>{info.description}</h2>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <Wave color='white' />
            {/* Testimonials */}
            <div className='section-testimonials'>
            <div className='container'>
                <div className='testimony__wrapper'>
            <h1>Testimonials</h1>
            <div className='t-container'>
            {testimonialContent.map((testimony, i) => { return <Testimony index={i} infoColor='dark blue' name={testimony.name} desc={testimony.description} statement={testimony.statement} /> })}
            </div>
                </div>
            </div>
            </div>
            {/* White Paper */}
            <div className='section-white_paper'>
                <div className='container'>
                    <WhitePaper />
                </div>
            </div>
        </div>
    )
}

export default index