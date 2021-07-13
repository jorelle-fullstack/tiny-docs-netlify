// Components
import Resource from '../../components/parents/Resource'

const Featured = ({resources}) => {
    return (
        <div className='featured-wrapper'>
            {resources.map((resource, i) => {
                return <Resource index={i} type={resource.type} thumbnail={resource.thumbnail} title={resource.title} desc={resource.desc} />
            })}
        </div>
    )
}
export default Featured