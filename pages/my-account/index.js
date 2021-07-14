// Components
import Image from 'next/image'
import Button from '../../components/global/Button'
import VideoSlider from '../../components/account/VideoSlider'
import CategoryTabs from '../../components/global/CategoryTabsSmall'
import Head from 'next/head'
// Localalizations
import { account, watchHistory } from './local.js'

const index = () => {
    return (
        <div className='page-account'>
            <Head><title>My Account</title></Head>
            <div className='container'>
                <div className='top-section'>
                    <CategoryTabs />
                    <h1>My Account</h1>
                </div>
            <div className='main-section'>
                {/* Watch History */}
            <div className='videos-section'>
                <VideoSlider title='Watch History' videos={watchHistory} type='history' />
                <VideoSlider title='Saved' videos={watchHistory} type='saved' />
                <VideoSlider title='Liked' videos={watchHistory} type='liked' />
                </div>
            <div className='account-sidebar'>
                {/* Account Info */}
                <div className='avatar'><Image src={account.avatar} width={248} height={248} /></div>
                <div className='info'>
                <h3>{account.fname} {account.lname}</h3>
                <p className='text-disabled'>Email: {account.email} <br />
                Password: {account.hashedPassword}
                </p>
                <Button className='btn--blue edit'>Edit</Button>
                <hr className='divider' />
                {/* Watch Records */}
                <table className='watch-records'>
                    <tbody className='text-disabled'>
                        <tr className='row'>
                            <td className='left'>Saved</td>
                            <td className='right'>{account.saved}</td>
                        </tr>
                        <tr className='row'>
                            <td className='left'>Likes</td>
                            <td className='right'>{account.liked}</td>
                        </tr>
                        <tr className='row'>
                            <td className='left'>Videos Viewed</td>
                            <td className='right'>{account.viewed}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='spacer' />
                {/* My Subscription Plans */}
                <h3>My Plans</h3>
                <div className='subscription-plans'>
                    {account.plans.map((plan) => {
                        return (
                            <div className='plan'>
                            <p className='title text-disabled'>{plan.type} Subscription</p>
                            <hr className='divider' />
                            <p className='desc text-disabled'>{plan.name} ${plan.amount}<br />Renewing {plan.renewal}</p>
                            </div>
                        )
                    })}
                </div>
                <Button className='btn--blue edit'>Update</Button>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
}

export default index