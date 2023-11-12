// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllMatchups } from '../utils/api';

// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Navbar from '../components/Navbar';


const navigation = [
  { name: 'About Us', href: '/AboutUs' },
  { name: 'Shop', href: '/Shop' },
  { name: 'Cart', href: '/Cart' },
  { name: 'Sign Up', href: '/Signup' },
  { name: 'Log In', href: '/Login' },
  
]


const Home = () => {

  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (

    <div className="">
   
    <Navbar/>
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-5">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Bearers of bad news.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          We make cards for those moments that are too awkward to have in person.
          </p>
          
          <div className="relative rounded-full px-3 py-1 text-m leading-6 text-rose-900 ring- ring-gray-900/10 hover:ring-gray-900/20 ">
          Disclaimer: Adult Content{' '}
          </div>




<div className="everythingg ">
    <div className="carusel">
              <div className="boxx">
          <dir>
            <div className="contentss">
              <h2>STD</h2>
              <span>...</span>
            </div>
          </dir>
          <dir>
            <div className="contentss">
              <h2>Break Up </h2>
              <span>...</span>
            </div>
          </dir>
          <dir>
            <div className="contentss">
              <h2>TG Uninvite</h2>
              <span>...</span>
            </div>
          </dir>
          <dir>
            <div className="contentss">
              <h2>Second Family</h2>
              <span>...</span>
            </div>
          </dir>
        </div>
    </div>
</div>




          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/Shop"
              className="rounded-md bg-black-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>

          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  </div>
  );
};

export default Home;
