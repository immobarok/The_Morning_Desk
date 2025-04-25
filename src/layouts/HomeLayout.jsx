import React from 'react'
import { Header } from '../components/Header/Header'
import LatestNews from '../components/LatestNews/LatestNews'
import Navbar from '../components/Navbar/Navbar'
import LeftNavbar from '../components/layout-components/LeftNavbar'
import RightNavbar from '../components/layout-components/RightNavbar'
import CategoryNews from '../pages/CategoryNews/CategoryNews'

function HomeLayout() {
  return (
    <>
      <header>
        <Header />
        <section className='mx-auto w-11/12 space-y-4'>
          <LatestNews />
          <Navbar />
        </section>
      </header>
      <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3 px-2'>
        <aside className='col-span-3'>
          <h1 className='text-base font-medium text-gray-700'>All Category</h1>
          <LeftNavbar />
        </aside>
        <aside className='col-span-6'>
          <h1 className='text-base font-medium text-gray-700'>Morning Desk Home</h1>
          <CategoryNews />
        </aside>
        <aside className='col-span-3'>
          <h1 className='text-base font-medium text-gray-700'>Login With</h1>
          <RightNavbar />
        </aside>
      </main>
    </>
  )
}

export default HomeLayout