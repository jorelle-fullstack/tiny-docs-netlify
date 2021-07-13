// Components
import heroImage from '../../assets/images/tam-clean.svg'
import Button from '../../components/global/Button'
import Head from 'next/head'
import Image from 'next/image'
import Input from '../../components/form/Input'
import { useForm } from "react-hook-form"
import Featured from '../../components/parents/Featured'
import Resource from '../../components/parents/Resource'
// Assets
import searchIcon from '../../assets/images/search-icon.svg'
import whiteboardIcon from '../../assets/images/whiteboard-icon.svg'
import profileIcon from '../../assets/images/profile-icon.svg'

// Localizations
import { pageButtons, categories, featuredResources, allResources } from './local.js'
const index = () => {
    const account = {
        account_id: null,
        profileIcon: profileIcon
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
    return (
        <div className='page-parents'>
        <Head><title>Parents</title></Head>
        {/* Banner */}
            <div className='banner banner--parents'>
      <div className="container">
          {/* Top Navigation Menu */}
          <div className='nav-menu'>
        <div className='nav-menu__wrapper'>
            {/* Profile Icon + Search Field */} 
            <div className='nav-menu__wrapper--left'>
            <Image className='profile-icon' src={account.profileIcon} width={73} height={73} />
            {/* Search Field */}
      <form className='form' >
      <Input className="searchField" register={{ ...register("search", {}) }} errors={errors} type="text" placeholder="Search"
                render={() => <button type="button" className="input-inline-button" onClick={handleSearch} ><Image width={26} height={26} src={searchIcon} /></button>}
              />
      </form>
            </div>
        {/* Categories Nav Buttons */}
        <div className='nav-menu__wrapper--right'>
        <div className='categories'>
                    {pageButtons.map((button, i) => {
                        return <Button key={i} className={'small category-nav-btn' + button.className}>{button.label}</Button>
                    })}
                </div>
        </div>
        </div>
        </div>
        <div className="banner__wrapper">
          <div className="banner__wrapper--left">
            <h1>Catchy Hero Text Goes Here!</h1>
          </div>
          <div className="banner__wrapper--right">
            <Image src={heroImage} width={424} height={404} className="hero__image" alt="Hero Banner Image" />
          </div>
        </div>
      </div>
    </div>
        {/* Featured*/}
        <div className='featured'>
            <div className='container'>
                <h1>Featured!</h1>
                <Featured resources={featuredResources} />
            </div>
        </div>
        <div className='categories-bar'>
            <div className='container'>
                {categories.map((button) => {
                return <Button className='btn--white-shadow category-btn'>{button.label}</Button>
                })}
            </div>
        </div>
        <div className='resources'>
            <div className='container'>
                {allResources.map((resource, i) => {
                return <Resource index={i} buttonIcon={whiteboardIcon} type={resource.type} thumbnail={resource.thumbnail} title={resource.title} desc={resource.desc} />
                })}
            </div>
        </div>
    </div>
    )
}

export default index