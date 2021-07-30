// Dependencies
import { useForm } from "react-hook-form"

// Components
import Head from 'next/head'
import Fab from '../../components/global/Fab'
import { useRouter } from "next/router"
import Input from '../../components/form/Input'
import Image from 'next/image'
import CategoryTabs from '../../components/global/CategoryTabsSmall'
import WatchEntry from '../../components/account/WatchEntry'
import Search from '../../components/form/Search'

// Assets
import searchIcon from '../../assets/images/search-icon.svg'
import arrow from '../../assets/images/arrow.svg'
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
        <div className='records-section'>
            <Head><title>My Account - {title}</title></Head>
            <div className='container'>
              {/* Title and Category Tabs */}
              <div className='top-section'>
                  <CategoryTabs />
                  <Fab icon={arrow} onClick={(e) => router.push('/my-account')} />
                  <h1>{title}</h1>
              </div>
              {/* Search Bar */}
                <div className='search-section'>
                  <Search register={{ ...register("search", {}) }} errors={errors} placeholder='Search'/>
                </div>
              {/* Video Collection */}
              <div className='videos'>
                {watchRecords.map((video, i) => {
                  return <WatchEntry key={i} thumbnail={video.thumbnail} title={video.title} />
                })}
              </div>
              <div className='pagination'>
                <button className='btn pagination-btn active'>
                  <h3>1</h3>0
                </button>
              </div>
            </div>
        </div>
    )
}
export default WatchRecords