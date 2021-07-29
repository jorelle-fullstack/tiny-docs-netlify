// Dependencies
import { useRouter } from 'next/router'

// Components
import { Button } from '../../components/global'
const Logout = ({ callback = () => null }) => {
    const router = useRouter()
    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('cus_id')
        document.cookie = 'token=; path=/'
        document.cookie = 'user=; path=/'
        document.cookie = 'cus_id=; path=/'
        callback()
        router.push('/about-us')
    }
    return(
        <div className='logout'>
            <div className='logout__wrapper'>
                <div className='title'>
                    <h1>Log Out of your Account</h1>
                    <h3>Are you sure you want to log out?  You won't be able to access to your paid content.</h3>
                </div>
            <div className='buttons'>
            <Button className='btn btn--blue' onClick={handleLogout}>Yes, Logout</Button>
            <Button className='btn btn--red' onClick={callback}>Back</Button>
            </div>
            </div>
        </div>
    )
}

export default Logout