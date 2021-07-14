// Assets
import photoPlaceholder from '../../assets/images/account-photo-placeholder.svg'
import thumbnail1 from '../../assets/images/watch-entry-thumbnail-sample-1.png' 
import thumbnail2 from '../../assets/images/watch-entry-thumbnail-sample-2.png' 
import thumbnail3 from '../../assets/images/watch-entry-thumbnail-sample-3.png' 

const account = {
    // Primary Data
    avatar: photoPlaceholder,
    fname: 'Tim',
    lname: 'Smith',
    email: 'tim@gmail.com',
    hashedPassword: '************',
    
    // Videos Data
    saved: 12,
    liked: 30,
    viewed: 57,

    // My Subscription Plans
    plans: [
        {
            type: 'Premium',
            name: '12-Month Plan',
            amount: 0.00,
            renewal: '01/05/2022'
        }
    ]
}
const watchHistory = [
    {
        thumbnail: thumbnail1,
        title: 'Related Content Title'
    },
    {
        thumbnail: thumbnail2,
        title: 'Related Content Title'
    },
    {
        thumbnail: thumbnail3,
        title: 'Related Content Title'
    },
    {
        thumbnail: thumbnail1,
        title: 'Related Content Title'
    },
    {
        thumbnail: thumbnail2,
        title: 'Related Content Title'
    },
    {
        thumbnail: thumbnail3,
        title: 'Related Content Title'
    }
]

const watchRecords = [
    {
        thumbnail: thumbnail1,
        title: 'Related Content Title'
    },
    {
        thumbnail: thumbnail2,
        title: 'Related Content Title'
    },
    {
        thumbnail: thumbnail3,
        title: 'Related Content Title'
    },
    {
        thumbnail: thumbnail1,
        title: 'Related Content Title'
    },
    {
        thumbnail: thumbnail2,
        title: 'Related Content Title'
    },
    {
        thumbnail: thumbnail3,
        title: 'Related Content Title'
    },
    {
        thumbnail: thumbnail1,
        title: 'Related Content Title'
    },
    {
        thumbnail: thumbnail2,
        title: 'Related Content Title'
    },
    {
        thumbnail: thumbnail3,
        title: 'Related Content Title'
    },
    {
        thumbnail: thumbnail1,
        title: 'Related Content Title'
    },
    {
        thumbnail: thumbnail2,
        title: 'Related Content Title'
    },
    {
        thumbnail: thumbnail3,
        title: 'Related Content Title'
    },
    {
        thumbnail: thumbnail1,
        title: 'Related Content Title'
    },
    {
        thumbnail: thumbnail2,
        title: 'Related Content Title'
    },
    {
        thumbnail: thumbnail3,
        title: 'Related Content Title'
    },
    {
        thumbnail: thumbnail1,
        title: 'Related Content Title'
    }
]
export { account, watchHistory, watchRecords }