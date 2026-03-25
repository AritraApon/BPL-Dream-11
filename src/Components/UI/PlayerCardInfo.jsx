import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";
import { FcRating } from "react-icons/fc";
import { TbCoinTakaFilled } from "react-icons/tb";

const PlayerCardInfo = ({ player }) => {
    console.log(player.playerName)
    return (
        <div className=''>
            <div className='rounded-t-2xl'>
                <div className="card bg-base-200 shadow-lg ">
                    <figure className='border-5 border-[#fc0202] bg-[#feeef9]'>
                        <div className=' h-50 '>
                            <img
                            src={player.playerImage}
                            alt={player.playerName}  className='w-full h-full object-cover' />
                        </div>
                    </figure>
                    <div className="px-4 py-4 bg-[#f2fafd] border-5 
                    border-[#00bbff] rounded-b-2xl">
                       <div>
                        <h1 className='flex items-center gap-2 font-bold text-xl py-2'><FaUserAlt /> {player.playerName}</h1>
                       </div>
                       <div className='flex justify-between'>
                        <p className='flex items-center gap-2 font-semibold text-[#898989] text-sm'> <CiFlag1 /> {player.playerCountry}</p>
                        <p className=' btn bg-neutral-content border-x-5 border-green-500 text-sm '>{player.playerType}</p>
                       </div>
                         <div className="divider"></div>
                         <div>
                            <p className='font-bold text-lg flex items-center gap-2'>Rating:
                                <span className= 'bg-green-500 border shadow px-2 rounded-3xl text-sm '> {player.rating}  </span>
                                   <FcRating/> </p>
                         </div>
                         <div className='flex justify-between '>
                            <p className='text-lg font-bold'>{player.batingOrBowling}</p>
                            <p className='text-lg font-bold text-[#898989] '>{player.batingOrBowling}</p>

                         </div>
                         <div className='flex justify-between my-3' >
                            <p className='text-lg font-bold flex items-center'>Price: {player.price} <TbCoinTakaFilled /></p>

                            <button className='btn font-bold bg-[#f3f3f3] border-r-5 border-red-500'>Choose Player</button>
                         </div>



                    </div>
                </div>

            </div>
        </div>
    );
};

export default PlayerCardInfo;