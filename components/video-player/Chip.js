
const Chip = ({label, index}) => {
    return(
        <div key={index} className='chip'>
            <p>{label}</p>
        </div>
    )
}
export default Chip