// Dependencies
import React, { useState } from "react"
import Head from 'next/head'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

// Components
import { Wave, Advisors, Banner, Story } from '../../components/global'
import Team from '../../components/about-us/Team'
import SpinWheel from '../../components/about-us/SpinWheel'

// Assets
import HeroImage from "../../assets/images/about-us-hero-image.png";

// Localizations
import { values,
  teamContent,
  advisorContent1,
  advisorContent2,
  advisorContent3
} from './local'

const index = () => {

  const [valueIndex, setValueIndex] = useState(0)
  const wheelCallback = () => {
      let newIndex = valueIndex+1;
      if (newIndex >= values.length) { newIndex = 0 }
      setValueIndex(newIndex)
  }
  const handleAnchorScroll = () => {
    const storySection = document.getElementById('story')
    storySection.scrollIntoView({behavior: 'smooth'})
  }
  return (
    <div className="page-about-us">
      <Head><title>About Us</title></Head>
      <Banner
        page="About Us"
        title="Our Mission"
        description="To improve kids’ health and make a billion people smile"
        btnColor="dark blue"
        bannerImage={HeroImage}
        onClick={handleAnchorScroll}
      />
      <div id='story'>
      <Story
      title="Our story"
      content={
        <>
          We started Tiny Docs in 2015 to bridge the communcation gap between
          doctors, kids, and families. We can't measure success in just
          dollars and cents because a child's health is far too important. So
          instead, we dream big and measure our impact in smiles and health
          outcomes. <br /> <br /> We provide children and families with the
          tools to make informed, empowered healthcare decisions. It's
          changing the world with cartoons for any child in any language.
        </>
      }
    />
      </div>
      <div className='signage'>
      <Wave color='white' />
      {/* Dynamic Sign */}
        <div className='sign-header'>
        <div className='body'>
          <SwitchTransition>
            <CSSTransition key={valueIndex} classNames='fade' timeout={0}>
            <h1>{values[valueIndex].sign}</h1>
            </CSSTransition>
          </SwitchTransition>
          </div>
        </div>
      </div>
      <div className='wheel'>
        <SpinWheel index={valueIndex} values={values} callback={wheelCallback} />
      </div>
      <Team title="Our Team" content={teamContent} />
      <Advisors
        title="Our Advisors"
        description="We are honored to announce the addition of new Advisory Board Members. These individuals bring their significant superpowers to the team and we couldn't be more excited to have them involved."
        advisorsCol1={advisorContent1}
        advisorsCol2={advisorContent2}
        advisorsCol3={advisorContent3}
      />
    </div>
  );
}

export default index;
