
// Components
import Image from 'next/image'
// Assets
import tim from '../../assets/images/tim.svg'
const Loading = ({progress}) => {
    return (
        <div className='page-loading'>
            {/* Tim dancing animation.  Still .svg of Tim has been added as a placeholder for now. -Frolyn R */}
            <Image src={tim} width={447} height={422} />
            <div className='loading-bar'>
                <div className='label'><h2>{progress}%</h2></div>
                <div className='progress' style={{ width: progress+'%' }}/>
            </div>
        </div>
    )   
}
export default Loading