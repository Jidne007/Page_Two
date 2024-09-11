import React from "react"
import { IoArrowForwardOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="container mx-auto py-5 px-[200px]">
            <div className="flex justify-between pe-[129px] mb-9">
                <h4 className="font-semibold text-gray-700  text-2xl">Manage</h4>
                <input className="text-md border-2 text-stone-300 rounded-md pe-[20px] ps-2  py-2 w-[11rem]" type="search" placeholder="All" />
               
            </div>
            
            <div className="flex gap-12 border-2 border-black-500 rounded-lg">
            <div className="p-5">
                <ul>
                    <li className="text-md font-bold text-gray-700 mb-8"><NavLink to={'/Pages'} >PAGES</NavLink></li>
                 <li className="text-md font-bold text-gray-700 mb-10"><NavLink to={'/Pages'} >CATAGORIES</NavLink></li>
                    <li className="text-md font-bold text-gray-700 mb-10"><NavLink to={'/Pages'} >SERVICES</NavLink></li>
                    <li className="text-md font-bold text-gray-700 mb-10"><NavLink to={'/Pages'} >WALLET</NavLink></li>
                    <li className="text-md font-bold text-gray-700 mb-10"><NavLink to={'/Pages'} >POINTS</NavLink></li>
                    <li className="text-md font-bold text-gray-700 mb-10"><NavLink to={'/Pages'} >BADGES</NavLink></li>
                    <li className="text-md font-bold text-gray-700 mb-10"><NavLink to={'/Pages'} >RANKING</NavLink></li>
                 
                </ul>

                 </div>
                
                <div className=" border-l-2 border-black-500">

                    <div className=" flex justify-between gap-[45rem] mb-2 items-center">
                        <h1 className="font-bold pt-7 p-5">PAGES</h1>
                        <button className="text-md text-white bg-black rounded-md p-3 border-black-300 py-2 w-[8rem]  flex justify-center gap-2 items-center ms-2 h-[45px]">Add New  <IoArrowForwardOutline className="text-white" /></button>
                    </div>
                    
                    <table className="w-full">
                        
                        <tr className="font-bold mb-6 border-t-2">
                            <td className="py-4 ps-5">HOME</td>
                            <td className="text-[#FFB946] flex justify-end items-center gap-1 mt-3 pe-[20px]">Edit <MdDelete className="text-[#F22B3E]" /> </td>

                        </tr>
                         
                        <tr className="font-bold mb-6 border-t  ">
                            <td className="py-4 ps-5">HOW IT WORKS</td> 
                            <td className="text-[#FFB946] flex justify-end items-center gap-1 mt-3 pe-[20px]">Edit <MdDelete className="text-[#F22B3E]" /> </td> 
                             
                        </tr>
                        
                        <tr className="font-bold border-t ">
                            <td className="py-4 ps-5">FAQS</td>
                            <td className="text-[#FFB946] flex justify-end items-center gap-1 mt-3 pe-[20px]">Edit <MdDelete className="text-[#F22B3E]" /> </td>
                        </tr>
                        <tr className="font-bold border-t ">
                            <td className="py-4 ps-5">GUIDES</td>
                            <td className="text-[#FFB946] flex justify-end items-center gap-1 mt-3 pe-[20px]">Edit <MdDelete className="text-[#F22B3E]" /> </td>
                        </tr>
                        <tr className="font-bold border-t  ">
                            <td className="py-4 ps-5">BLOG</td>
                            <td className="text-[#FFB946] flex justify-end items-center gap-1 mt-3 pe-[20px]">Edit <MdDelete className="text-[#F22B3E]" /> </td>
                        </tr>
                     </table>
            
                        
                       
                </div>

               
            </div>



        </div>
    );
};

export default Header;