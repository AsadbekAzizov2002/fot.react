import React, { useEffect, useState } from 'react';

import vector1 from "./assets/Vector1.svg";
import vector2 from "./assets/Vector2.svg";
import vector3 from "./assets/Vektor3.svg";
import vector4 from "./assets/Vektor4.svg";
import Vector5 from "./assets/Vektor5.svg";
import vector6 from "./assets/Vektor6.svg";
import vector7 from "./assets/Vektor7.svg";
import vector8 from "./assets/Vektor8.svg";
import resto from "./assets/Resto.png";
import del from "./assets/del.svg"
import card from "./assets/card.svg";
import paypal from "./assets/paypal.svg"

const App = () => {
  const [dishes, setDishes]=useState([]);
  console.log(dishes);
  useEffect(()=>{
    fetch("http://localhost:3000/Dishes")
    .then ((res)=>res.json())
    .then((data)=>setDishes(data))
  }, [])

const [step, setStep]= useState(1);
const increment =()=>{
  setStep(step +1);
}
const decler =()=>{
  setStep (step -1);
}

  return (   
      <div className=" container w-full bg-slate-800   flex">
        <div className=" container chaptarafdagi-div bg-slate-950 w-[104px] h-[834px] justify-start pt-6">
          <img className="mb-3 ml-[20px]" src={vector1} alt="img" />
          <img className="mb-3" src={vector2} alt="img" />
          <img className="mb-3 ml-[20px]" src={vector3} alt="img" />
          <img className="mb-3 ml-[20px]" src={vector4} alt="img" />
          <img className="mb-3 ml-[20px]" src={Vector5} alt="img" />
          <img className="mb-3 ml-[20px]" src={vector6} alt="img" />
          <img className="mb-3 ml-[20px]" src={vector7} alt="img" />
          <img className="mb-3 ml-[20px]" src={vector8} alt="img" />

        </div>
        {
          step ===1 && (
            <div className=" container step1 bg-slate-800 h-full">
              <div className='flex justify-between'>
                <div>
              <div className="Header flex justify-between pl-[24px] pt-6 items-center w-[833px]">
              <div>
               <img src={resto} alt="img" />
                <h2 className=" text-white">Tuesday, 2 Feb 2021</h2>
              </div>
              <input className=" px-[14px]  py-[14px] bg-slate-700 text-white w-[164px] rounded-xl" type="text" placeholder="Search for food, coffe, etc.." />
              </div>
              <div className=" w-[481px]">
                <ul className="flex justify-between	 pt-6 w-[481px] pb-[47px]">
                  <li className=" text-red-300">Hot Dishes</li>
                  <li className=" text-white">Cold Dishes</li>
                  <li className=" text-white">Soup</li>
                  <li className=" text-white">Grill</li>
                  <li className=" text-white">Appetizer</li>
                  <li className=" text-white">Dessert</li>
                </ul>
              </div>
              <div className=" flex ">
              <div className='Hero w-[633px] '>
              <div className=" flex justify-between">
              <h1 className=" text-white">Choose Dishes</h1>
              <select className=" bg-inherit text-white" name="servise" id="servise">
                <option className=" bg-inherit" value="Dine1">Dine In</option>
                <option value="Dine2">Dine In2</option>
                <option value="Dine3">Dine In3</option>
                <option value="Dine4">Dine In4</option>
              </select>
              </div>
              <div className="Dish-box flex flex-wrap w-[633px]  gap-3">
                {dishes.map((dish)=>(
                  <div key={dish.id}>
                    <img src={dish.imgUrl} alt="img" className=" w-[173px] h-[157px]" />
                    <h2 className=" text-white w-[144px]">{dish.title}</h2>
                    <h3 className=" text-white">{dish.price}</h3>
                    <h3 className=" text-white">{dish.isAvailable}</h3>
                  </div>
                ))
                }
              </div>
              </div>
              </div>

                </div>
               <div className=" h-screen right-dev w-[361px] ml-6 border rounded bg-slate-900">
                <>
                <h1 className=" text-white font-bold">Orders #34562</h1>
                <div className=" flex mt-6 gap-2">
                  <button className=" items-center border text-red-300 w-[86px] h-[33px] rounded px-3 py-[7px]">Dine In</button>
                  <button className=" items-center border text-red-300 w-[76px] h-[33px] rounded px-3 py-[7px]">To Go</button>
                  <button className=" items-center border text-red-300 w-[ 76px] h-[33px] rounded px-3 py-[7px]">Delivery</button>

                </div>
                <div className=" flex justify-between py-6">
                  <h2 className="font-semibold text-white">Item</h2>
                  <div className=" flex gap-[43px] ">
                  <h2 className="font-semibold text-white ">Qty</h2>
                  <h2 className="font-semibold text-white pr-6">Price</h2>
                  </div>
                </div>
                </>
                <div className="right-bottn-div justify-between">
                  <div className=' flex  '>
                    <>
                <h2 className='text-white '></h2>
                <h3 className='text-white '></h3>
                    </>
                    <>
                  <>
                  <button className=" text-white p-6 w-10 " >+</button>
                  <button className=" text-white p-6 w-10 " >-</button>
                  </>
                  <input className=" bg-inherit p-5 rounded w-[60px]" type="text" placeholder="Oder not..." />
                    </>
                    <button><img src={del} alt="del" /></button>
                  </div>
                  <div>
                    <h2></h2>
                  </div>
                </div>
                  <div >
                    <div className=' flex justify-between '>
                    <h3 className=' text-white'>Discount</h3>
                    <h2 className=' text-white'>$0</h2>
                    </div>
                    <div className=' flex justify-between'>
                    <h3 className=' text-white'>Sub total</h3>
                    <h2 className=' text-white'>$0</h2>
                    </div>
                    <div className="btn">
                      <button onClick={increment} className=" text-center  px-[105px] py-[14px] bg-red-300">
                        Continue to Payment
                      </button>
                    </div>
                  </div>
              </div>

              </div>
              
            </div>
            
        )
        }
        {
          step ===2 &&(
            <div className=" pl-4 w-[358px]">
              <div >
                <h1 className=" text-white pt-[20px] font-bold mb-2">Payment</h1>
                <h2 className=" text-gray-300 mb-8 font-normal ">3 payment method available</h2>
              </div>
              <div className="method">
              <h1 className=" text-white mb-4">Payment Method</h1>
              <div className=" gap-2 items-center">
                <button className=" w-[104px] h-16 border rounded-xl justify-center">
                  <img src={card} alt="card" className=" bg-white justify-center m-auto" />
                  <h3 className=" text-white">Credit Card</h3>
                </button>
                <button className=" w-[104px] h-16 border rounded-xl justify-center mx-2"> 
                  <img src={paypal} alt="card" className=" bg-white justify-center m-auto" />
                  <h3 className=" text-white">Paypal</h3>
                </button>
                <button className=" w-[104px] h-16 border rounded-xl ">
                  <img src={card} alt="card" className=" bg-white justify-center m-auto" />
                  <h3 className=" text-white ">Cash</h3>
                </button>
              </div>
              </div>
              <div className=' mt-4'>
                <label className=" text-white mt-4" htmlFor="Cardholder">Cardholder Name
                <input className=' w-[358px] bg-inherit rounded border py-3 pr-[253] pl-[14px] mb-4' type="text" 
                placeholder='Levi Ackerman' 
                id='Cardholder'
                />
                </label>
                <label className=" text-white" htmlFor="Card">Card Number
                <input className=' w-[358px] bg-inherit rounded border py-3 pr-[223] pl-[14px]' type="text" 
                placeholder='Card Number' 
                id='Card'
                />
                </label>
                
              </div>
              <div className=' mt-4 flex gap-2'>
                <label className=' text-white' htmlFor="Expiration">Expiration Date
                  <input  className=' bg-inherit border rounded w-[172px] py-[14px] pl-[14px] pr-[106px]'
                  type="text"
                  placeholder="02/2022"
                  id='Expiration'
                  />
                </label>
                <label className=' text-white ' htmlFor="table">svv
                <input
                className=' bg-inherit border rounded w-[172px] py-[14px] pl-[14px] pr-[106px]' 
                type="text" 
                placeholder=" . . ."  
                id='table'/>
                </label>
              </div>
              <div className=' mt-4 flex gap-2'>
                <label className=' text-white' htmlFor="Order">Order Type
                  <input  className=' bg-inherit border rounded w-[172px] py-[14px] pl-[14px] pr-[106px]'
                  type="text"
                  placeholder="Dine In"
                  id='Order'
                  />
                </label>
                <label className=' text-white ' htmlFor="no">Table no.
                <input
                className=' bg-inherit border rounded w-[172px] py-[14px] pl-[14px] pr-[106px]' 
                type="text" 
                placeholder="140"  
                id='no'/>
                </label>
              </div>
              <div className=' flex gap-2'>
                <button onClick={decler} className=" text-white w-[175px] border rounded mt-6 py-[7px] px-[66px]">
                Cancel
                </button>
                <button onClick={increment} className=" text-white w-[175px] border rounded mt-6 py-[7px] px-[34px] bg-red-400">
                Confirm Payment 
                </button>
              </div>
            </div>
          )
        }
        {
          step ===3 &&(
            <div className=' items-center flex justify-center flex-col'>
              <h1 className=' font-bold text-white'>Zakas qabul qilindi</h1>
            </div>
          )
        }
      </div>
    
  )
}

export default App
