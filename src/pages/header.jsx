import { Link } from 'react-router-dom'
import logo from '../assets/tamarta.png'
import { useState } from 'react'

function Header() {

  const [isOpen,setisOpen] = useState(false)

  const handleOpen = () =>{
    setisOpen(true)
  }

  const handleClose = () =>{
    setisOpen(false)
  }

  return (
    <>
<div className="bg-[#2FA8E1] w-[100%]  fixed  z-50 ">
  <div className='flex justify-between p-2 items-center'>
    <div>
        <img src={logo} alt="" className='rounded-full w-[100px] h-[100px] ' />
    </div>
    <ul className='hidden sm:flex space-x-5 text-2xl text-white'>
        <Link to={"/"}><li>Dashboard</li></Link>
    <li className="relative group">
      <button className="flex items-center gap-1">
    About
    <svg
      className="w-4 h-4 mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  {/* Dropdown Menu */}
  <ul className="absolute left-0 top-5 mt-2 hidden w-60  rounded-md bg-white shadow-md group-hover:block">
 <li>
         <Link to={"/Ministry"}><a href="#" className="block px-4 py-2 text-black hover:bg-gray-700">
        Ministery
      </a>
       </Link>
    </li>
   
    <li>
     <Link to={"/minister"}> <a href="#" className="block px-4 py-2  text-black hover:bg-gray-700">
        Leadership
      </a>
      </Link>
    </li>
    <li>
      <a href="#" className="block px-4 py-2 text-black hover:bg-gray-700">
        Ganeral Director
      </a>
    </li>
  </ul>
</li>

 <li className="relative group">
      <button className="flex items-center gap-1">
    Departments
    <svg
      className="w-4 h-4 mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  {/* Dropdown Menu */}
  <ul className="absolute left-0 top-5 mt-2 hidden w-60 rounded-md bg-white shadow-md group-hover:block">
    <li>
      <Link to={"/water"}><a href="#" className="block px-4 py-2 text-black hover:bg-gray-700">
        Water
      </a>
      </Link>
    </li>
    <li>
     <Link to={"/Energy"}><a href="#" className="block px-4 py-2  text-black hover:bg-gray-700">
        Energy
      </a>
      </Link> 
    </li>
    <li>
     <Link to={"/PlanningPolicy"}> <a href="#" className="block px-4 py-2 text-black hover:bg-gray-700">
        Policy and Planning
      </a>
      </Link>
    </li>
    
    <li>
     <Link  to={"/Admin&finace"}> <a href="#" className="block px-4 py-2 text-black hover:bg-gray-700">
        Admin and Finance
      </a>
      </Link>
    </li>
  </ul>
</li>
 <li className="relative group">
      <button className="flex items-center gap-1">
    Projects
    <svg
      className="w-4 h-4 mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  {/* Dropdown Menu */}
  <ul className="absolute left-0 top-5 mt-2 hidden w-40 rounded-md bg-white shadow-md group-hover:block">
    <li>
     <Link to={"/EnergyProject"}> <a href="#" className="block px-4 py-2 text-black hover:bg-gray-700">
        Energy
      </a>
      </Link>
    </li>
    <li>
    <Link to={"/WaterProject"}> <a href="#" className="block px-4 py-2 text-black hover:bg-gray-700">
        Water
      </a>
      </Link> 
    </li>
  
  </ul>
</li>
        <Link to={"/AssessmentsPost"}><li>Assessment</li></Link>
        <Link to={"/EventPost"}><li>Events</li></Link>
    </ul>



    {/* mobile responsive */}


<ul style={{display: isOpen === true ? "block" : ""}} className='hidden absolute top-[115px] sm:hidden left-0  space-y-10 text-2xl bg-[#2FA8E1] w-full h-[60vh] p-5 text-white '>
        <Link to={"/"}><li>Dashboard</li></Link>

        <div className='flex space-x-5'>
    <li className="relative group">
      <button className="flex items-center gap-1">
    About
    <svg
      className="w-4 h-4 mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  {/* Dropdown Menu */}
  <ul className="absolute left-0 top-5 mt-2 hidden w-60  rounded-md bg-white shadow-md group-hover:block">
 <li>
         <Link to={"/Ministry"}><a href="#" className="block px-4 py-2 text-black hover:bg-gray-700">
        Ministery
      </a>
       </Link>
    </li>
   
    <li>
     <Link to={"/minister"}> <a href="#" className="block px-4 py-2  text-black hover:bg-gray-700">
        Leadership
      </a>
      </Link>
    </li>
    <li>
      <a href="#" className="block px-4 py-2 text-black hover:bg-gray-700">
        Ganeral Director
      </a>
    </li>
  </ul>
</li>


 <li className="relative group">
      <button className="flex items-center gap-1">
    Projects
    <svg
      className="w-4 h-4 mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  {/* Dropdown Menu */}
  <ul className="absolute left-0 top-5 mt-2 hidden w-40 rounded-md bg-white shadow-md group-hover:block">
    <li>
     <Link to={"/EnergyProject"}> <a href="#" className="block px-4 py-2 text-black hover:bg-gray-700">
        Energy
      </a>
      </Link>
    </li>
    <li>
    <Link to={"/WaterProject"}> <a href="#" className="block px-4 py-2 text-black hover:bg-gray-700">
        Water
      </a>
      </Link> 
    </li>
  
  </ul>
</li>
</div>
      <button> <Link to={"/AssessmentsPost"}><li>Assessment</li></Link></button> 
       <div><Link to={"/EventPost"}><li>Events</li></Link></div> 
         <li className="relative group">
      <button className="flex items-center gap-1">
    Departments
    <svg
      className="w-4 h-4 mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  {/* Dropdown Menu */}
  <ul className="absolute left-0 top-5 mt-2 hidden w-60 rounded-md bg-white shadow-md group-hover:block">
    <li>
      <Link to={"/water"}><a href="#" className="block px-4 py-2 text-black hover:bg-gray-700">
        Water
      </a>
      </Link>
    </li>
    <li>
     <Link to={"/Energy"}><a href="#" className="block px-4 py-2  text-black hover:bg-gray-700">
        Energy
      </a>
      </Link> 
    </li>
    <li>
     <Link to={"/PlanningPolicy"}> <a href="#" className="block px-4 py-2 text-black hover:bg-gray-700">
        Policy and Planning
      </a>
      </Link>
    </li>
    
    <li>
     <Link  to={"/Admin&finace"}> <a href="#" className="block px-4 py-2 text-black hover:bg-gray-700">
        Admin and Finance
      </a>
      </Link>
    </li>
  </ul>
</li>
    </ul>

    {/* close mobile responsive */}
     <div>
    <button className='hidden sm:flex bg-white w-[100px] p-2 rounded-lg'>
        Contact us
   </button>
   {/* navigation */}
   <div className='sm:hidden'>

<i onClick={handleOpen} style={{display: isOpen === true ? "none" : "block"}} class="fa-solid fa-bars text-3xl text-white"></i>
<i onClick={handleClose} style={{display: isOpen === true ? "block" : "none"}} class="fa-solid fa-x text-3xl text-white"></i>
   </div>


  
  </div>

   {/* mobile responsive */}

  </div>
 
   </div>
    </>
  )
}

export default Header
