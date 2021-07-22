// Dependencies
import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'

// Components
import heroImage from '../../assets/images/tam-clean.svg'
import Button from '../../components/global/Button'
import Head from 'next/head'
import Image from 'next/image'
import Input from '../../components/form/Input'
import { useForm } from "react-hook-form"
import Featured from '../../components/parents/Featured'
import Resource from '../../components/parents/Resource'
import CategoryTabs from '../../components/global/CategoryTabsSmall'
import Search from '../../components/form/Search'
// Assets
import searchIcon from '../../assets/images/search-icon.svg'
import whiteboardIcon from '../../assets/images/whiteboard-icon.svg'
import profileIcon from '../../assets/images/profile-icon.svg'

// Localizations
import { categories, featuredResources, allResources } from './local.js'
const index = () => {
    // Account Object.
    const account = {
        account_id: null,
        profileIcon: profileIcon
    }
    // Search Bar Inline Button function.
    const handleSearch = () => {
        setError('search', {
          type: "manual",
          message: 'Search field is empty.'
        })
      }

    const heroImageRef = React.createRef(null)

    // React Forms
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
              <div className='body'>
              <div className="container">
          {/* Top Navigation Menu */}
          <div className='nav-menu'>
        <div className='nav-menu__wrapper'>
            {/* Profile Icon + Search Field */}
            <div className='nav-menu__wrapper--left'>
            <CSSTransition timeout={0} in={true} appear={true} classNames='pop'>
              <div className='profile-icon'>
              <Image className='profile-icon' src={account.profileIcon} width={73} height={73} />
              </div>
            </CSSTransition>
            {/* Search Field */}
            <CSSTransition timeout={300} in={true} appear={true} classNames='fade-slide-right'>
            <Search register={{ ...register("search", {}) }} errors={errors} placeholder='Search' onClick={handleSearch} />
            </CSSTransition>
            </div>
        {/* Categories Nav Buttons */}
        <div className='nav-menu__wrapper--right'><CategoryTabs /></div>
        </div>
        </div>
        <div className="banner__wrapper">
          <CSSTransition timeout={500} in={true} appear={true} classNames='fade-slide-left'>
          <h1>Catchy Hero Text Goes Here!</h1>
          </CSSTransition>
          <CSSTransition timeout={500} in={true} appear={true} nodeRef={heroImageRef} classNames='fade-slide-right'>
        <div className='hero-image' ref={heroImageRef}>
            <Image src={heroImage} width={424} height={404} alt="Hero Banner Image" />
            </div>
            </CSSTransition>
        </div>
      </div>
              </div>
      <div className='wave'></div>
    </div>
        {/* Featured*/}
        <div className='featured'>
            <div className='container'>
                <div className='wrapper'>
                <h1>Featured!</h1>
                <Featured resources={featuredResources} />
                </div>
            </div>
        </div>
        <div className='categories-bar'>
            <div className='container'>
                {categories.map((button, i) => {
                return <Button key={i} className='btn--white-shadow category-btn'>{button.label}</Button>
                })}
            </div>
        </div>
        <div className='resources'>
            <div className='container'>
                {allResources.map((resource, i) => {
                return <Resource index={i} type={resource.type} thumbnail={resource.thumbnail} title={resource.title} desc={resource.desc} />
                })}
            </div>
        </div>
    </div>
    )
}

export default index