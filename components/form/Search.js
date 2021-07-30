// Components
import Input from './Input'
import Image from 'next/image'
// Assets
import searchIcon from '../../assets/images/search-icon.svg'

const Search = ({register, placeholder, errors, onClick = () => null}) => {
    const handleClick = () => { onClick() }
    return(
      <form className='form' >
        <Input className="searchField" register={register} errors={errors} type="text" placeholder={placeholder}
                render={() => <button type="button" className="input-inline-button" onClick={handleClick} ><Image width={26} height={26} src={searchIcon} alt='' /></button>}
              />
      </form>
    )
}

export default Search