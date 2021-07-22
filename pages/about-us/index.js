import React from "react";
import { Banner } from "../../components/global";
import { Story } from "../../components/global";
import { Team } from "../../components/global";
import { Advisors } from "../../components/global";
import HeroImage from "../../assets/images/about-us-hero-image.png";

import { useCookies } from 'react-cookie'
const index = () => {
  const teamContent = [
    {
      name: "Axia Barrios",
      position: "Lead Digital Artist",
      image: require("../../assets/images/axia-barrios.png"),
      link: "https://www.twitter.com/",
    },
    {
      name: "Dustin Claretto",
      position: "COO",
      image: require("../../assets/images/dustin-claretto.png"),
      link: "https://www.twitter.com/",
    },
    {
      name: "Sunny Williams",
      position: "CEO",
      image: require("../../assets/images/sunny-williams.png"),
      link: "https://www.twitter.com/",
    },
    {
      name: "Vivek Poola",
      position: "CTO",
      image: require("../../assets/images/vivek-poola.png"),
      link: "https://www.twitter.com/",
    },
    {
      name: "Meredith Mendosa",
      position: "Chief Design Officer",
      image: require("../../assets/images/meredith-mendosa.png"),
      link: "https://www.twitter.com/",
    },
  ];

  const advisorContent1 = [
    {
      name: "Rebecca Mitsos, CCLS",
      information: [
        {
          informationItem: "Lurie Children’s Hospital",
        },
        {
          informationItem: "Child Life Specialist",
        },
      ],
    },
    {
      name: "Jeff Bomze, MD",
      information: [
        {
          informationItem: "Memphis Street Pediatrics",
        },
        {
          informationItem: "Pediatrician, Adolescent Medicine Physician",
        },
      ],
    },
  ];

  const advisorContent2 = [
    {
      name: "Clarisse Valencia, MD",
      information: [
        {
          informationItem: "Kaiser Permanente",
        },
        {
          informationItem: "Family Medicine Physician",
        },
      ],
    },
    {
      name: "Nneka Onyezia, PhD, ABPP",
      information: [
        {
          informationItem: "Nneka E. Onyezia, PhD LLC",
        },
        {
          informationItem: "Psychologist",
        },
      ],
    },
    {
      name: "Diane Morales",
      information: [
        {
          informationItem: "Child Life Specialist",
        },
        {
          informationItem: "Miami Children’s Health System",
        },
      ],
    },
  ];

  const advisorContent3 = [
    {
      name: "Charlotte Cole",
      information: [
        {
          informationItem: "Executive Director",
        },
        {
          informationItem: "Blue Butterfly Collaborative",
        },
      ],
    },
    {
      name: "Greg Woodburn",
      information: [
        {
          informationItem: "Right to Play",
        },
        {
          informationItem: "Program Manager",
        },
      ],
    },
    {
      name: "Mary R. Ciccarelli, MD",
      information: [
        {
          informationItem: "Idiana University School of Medicine",
        },
        {
          informationItem: (
            <>
              Professor of Clinical Medicine and Clinical Pediatrics; Chair for
              Education in Pediatrics
            </>
          ),
        },
      ],
    },
  ];
  const [cookies, setCookie] = useCookies(['user']);
  console.log(cookies)
  return (
    <div className="page-about-us">
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
};

export default index;
