// Dependencies
import React from "react";
import Head from 'next/head'
import cookies from 'next-cookies'

// Components
import { Team, Wave, Advisors, Banner, Story } from '../../components/global'
import Image from 'next/image'
import SpinWheel from '../../components/about-us/SpinWheel'

// Assets
import signage from '../../assets/images/hanging-sign-small.svg'
import HeroImage from "../../assets/images/about-us-hero-image.png";

// Localization
import { teamContent, advisorContent1, advisorContent2, advisorContent3} from './local'
const index = ({token}) => {
  return (
    <div className="page-about-us">
      <Head><title>About Us</title></Head>
      <Banner
        page="About Us"
        title="Our Mission"
        description="To improve kids’ health and make a billion people smile"
        btnColor="dark blue"
        bannerImage={HeroImage}
      />
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
      <div className='signage'>
      <Wave color='white' />
        <div className='sign-header'> <h1>MAGIC</h1> </div>
      </div>
      <div className='wheel'>
        {/* Wheel placeholder */}
        <SpinWheel />
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
export async function getServerSideProps(ctx) {
  const { token } = cookies(ctx)
  let loggedIn = false
  if (token) {
    loggedIn = true
  }
  return {
    props: { loggedIn: loggedIn, token: token }
  }
}

export default index;
