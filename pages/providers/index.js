// Dependencies
import { useRouter } from 'next/router'
// Assets
import heroImage from '../../assets/images/providers-page-avatar.webp'
import videoIcon from '../../assets/images/video-icon.svg'
import healthIcon from '../../assets/images/healthgraph-icon.svg'
import allayIcon from '../../assets/images/allay-icon.svg'
import timeIcon from '../../assets/images/time-icon.svg'
// Components
import { Banner } from "../../components/global"
import Testimony from '../../components/global/Testimony'
import Image from 'next/image'
import WhitePaper from '../../components/providers/WhitePaper'
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
            description: 'Improve health outcomes'
        },
        {
            icon: allayIcon.src,
            iconWidth: 130,
            iconHeight: 130,
            description: 'Allay fear and anxiety'
        },
        {
            icon: timeIcon.src,
            iconWidth: 130,
            iconHeight: 130,
            description: 'Save time for providers'
        }
    ]
    return (
        <div className='page-providers'>
            {/* Banner */}
            <Banner
                page="Providers"
                title="Catchy Title for Providers"
                description="Short phrase explaining the mission or what Tiny Docs offers for providers."
                btnColor="banner yellow"
                bannerImage={heroImage}
            />
            {/* Information */}
            <div className='section-info'>
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