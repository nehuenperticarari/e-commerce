import logo from '../assets/logo.jpg'

const Footer = () => {

  return (
    <footer className="bg-gray-300 text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src={logo} width={100} className="rounded-xl shadow-md " alt="logo image" />
          <span className="ml-3 text-xl">© Vikings</span>
        </div>
        <p className="text-md text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-500 sm:py-2 sm:mt-0 mt-4">{new Date().getFullYear()}
          <a href="https://www.linkedin.com/in/nehuen-perticarari-ba3202203" className="text-gray-600 ml-1 hover:text-gray-800 transition duration-150"  target="_blank">@Nehuen Perticarari</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a target="_blank" href='https://es-la.facebook.com/' className="text-gray-500 hover:text-gray-700 transition duration-200 hover:cursor-pointer" >
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a target="_blank" href='https://twitter.com/' className="ml-3 text-gray-500 hover:text-gray-700 transition duration-200 hover:cursor-pointer">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a target="_blank" href='https://www.instagram.com/' className="ml-3 text-gray-500 hover:text-gray-700 transition duration-200 hover:cursor-pointer">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
