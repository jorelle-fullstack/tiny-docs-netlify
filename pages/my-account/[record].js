// Dependencies
import { useForm } from "react-hook-form"

// Components
import Head from 'next/head'
import { useRouter } from "next/router"
import Input from '../../components/form/Input'
import Image from 'next/image'
import CategoryTabs from '../../components/global/CategoryTabsSmall'
import WatchEntry from '../../components/account/WatchEntry'

// Assets
import searchIcon from '../../assets/images/search-icon.svg'

// Localizations
import { watchRecords } from './local.js'

const WatchRecords = () => {
  const router = useRouter()
  const { record } = router.query
  let title = null
  switch (record) {
    case 'history':
      title = 'Watch History'
      break
    case 'saved':
      title = 'Saved'
      break
    case 'liked':
      title = 'Liked'
      break
  }
    const handleSearch = () => {
        setError('search', {
          type: "manual",
          message: 'Search field is empty.'
        })
      }
      const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors },
      } = useForm();
    return(
        <div class='records-section'>
            <Head><title>My Account - {title}</title></Head>
            <div class='container'>
              {/* Title and Category Tabs */}
              <div class='top-section'>
                  <CategoryTabs />
                  <h1>{title}</h1>
              </div>
              {/* Search Bar */}
                <div class='search-section'>
                <form className='form' >
                  <Input className="searchField" register={{ ...register("search", {}) }} errors={errors} type="text" placeholder="Search"
                              render={() => <button type="button" className="input-inline-button" onClick={handleSearch} ><Image width={26} height={26} src={searchIcon} /></button>}
                          />
                  </form>
                </div>
              {/* Video Collection */}
              <div class='videos'>
                {watchRecords.map((video) => {
                  return <WatchEntry thumbnail={video.thumbnail} title={video.title} />
                })}
              </div>
              <div class='pagination'>
                
              </div>
            </div>
        </div>
    )
}
export default WatchRecords