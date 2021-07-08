// Dependencies
import { useRouter } from 'next/router'
// Assets
import heroImage from '../../assets/images/providers-page-avatar.webp'
import videoIcon from '../../assets/images/video-icon.svg'
import healthIcon from '../../assets/images/healthgraph-icon.svg'
// Components
import { Banner } from "../../components/global"
import Testimony from '../../components/global/Testimony'
import Image from 'next/image'
import Quote from "../../assets/images/quote.png"
import { icon } from '@fortawesome/fontawesome-svg-core'
const index = () => {
    const router = useRouter()
    const testimonialContent = [
        {
          statement:
            "Tiny Docs was a great resource for us when our daughter had eye surgery. It can be challening to talk to your child about the process and we were lucky to see the video on anestheisa. The animation made it easy for our daughter to follow along and the explanation was simple and to the point. Thank you, Tiny Docs!",
          name: "Regan Lynch",
          description: "Parent",
        },
        {
          statement:
            "Horray for Tiny Docs! Tiny Docs is a breath of fresh air. It's creative, aesthetically beautiful and offers a unique approach to health education for children. Even adults can learn from Tiny Docs! At a time when we struggle to ensure understanding of complex medical information, it's reassuring to know Tiny Docs, through it's relatable and engaging health messaging can help fill a void in the health literacy landscape. The world needs Tiny Docs!",
          name: "Dr. Lisa Fitzpatrick",
          description: "DC Medicaid	Pediatrician",
        },
        {
          statement:
            "Tiny Docs creates a concept specifically for a child’s empowered understanding of the implementation of medicine and/or a medical procedure for the betterment of their well being.",
          name: "Jessica Lamont",
          description: "Pediatric Nurse/Epic System",
        },
        {
          statement:
            "Tiny Docs was a great resource for us when our daughter had eye surgery. It can be challening to talk to your child about the process and we were lucky to see the video on anestheisa. The animation made it easy for our daughter to follow along and the explanation was simple and to the point. Thank you, Tiny Docs!",
          name: "Regan Lynch",
          description: "Parent",
        },
        {
          statement:
            "Horray for Tiny Docs! Tiny Docs is a breath of fresh air. It's creative, aesthetically beautiful and offers a unique approach to health education for children. Even adults can learn from Tiny Docs! At a time when we struggle to ensure understanding of complex medical information, it's reassuring to know Tiny Docs, through it's relatable and engaging health messaging can help fill a void in the health literacy landscape. The world needs Tiny Docs!",
          name: "Dr. Lisa Fitzpatrick",
          description: "DC Medicaid	Pediatrician",
        },
        {
          statement:
            "Tiny Docs creates a concept specifically for a child’s empowered understanding of the implementation of medicine and/or a medical procedure for the betterment of their well being.",
          name: "Jessica Lamont",
          description: "Pediatric Nurse/Epic System",
        },
      ];

    const informationalContent = [
        {
            icon: videoIcon.src,
            iconWidth: 186,
            iconHeight: 113,
            description: 'Educate patients with kid-friendly resources'
        },
        {
            icon: healthIcon.src,
            iconWidth: 187,
            iconHeight: 113,
            description: 'Educate patients with kid-friendly resources'
        }
    ]
    return (
        <div className='page-providers'>
            {/* Banner section (top-most element before top navigation bar). */}
            <Banner
                page="Providers"
                title="Catchy Title for Providers"
                description="Short phrase explaining the mission or what Tiny Docs offers for providers."
                btnColor="banner yellow"
                bannerImage={heroImage}
            />
            <div className='section-providers'>
                <div className='container'>
                    {
                        informationalContent.map((info) => {
                            return(
                                <div className='sub-section'>
                                    <Image width={info.iconWidth} height={info.iconHeight} src={info.icon} />
                                    <h2>{info.description}</h2>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className='section-testimonials'>
            <div className='container'>
                <div className='testimony__wrapper'>
            <h1>Testimonials</h1>
            <div class='t-container'>
            {testimonialContent.map((testimony, i) => { return <Testimony index={i} infoColor='dark blue' name={testimony.name} desc={testimony.description} statement={testimony.statement} /> })}
            </div>
                </div>
            </div>
            </div>
            {/*
            <div className='banner-section'>
                <div className='container'>
                    <div className='left'>
                        <h1>Catchy Title for Providers</h1>
                        <h3>Short phrase explaining the mission or what Tiny Docs offers for providers.</h3>
                        <Button>Learn More!</Button>
                    </div>
                    
                    <div className='right'>
                        <img src={avatar.src} />
                    </div>
                    
                    
                    
                </div>
            </div>
            */}
        </div>
    )
}

export default index