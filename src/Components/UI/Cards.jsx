import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";
import { FcRating } from "react-icons/fc";
import { TbCoinTakaFilled } from "react-icons/tb";
  import { ToastContainer, toast } from 'react-toastify';

const Cards = ({ player, coin, setCoin ,selectedPlayers ,setSelectedPlayers }) => {
    const [isSelect, setIsSelect] = useState(false)

    const handleSelect = () => {
        let newCoin = coin - player.price;
        if (newCoin >= 0) {
            setCoin(newCoin)

        } else{

              toast.error(`Not enough taka to purchase ${player.playerName} `);
          return;
        }


         toast.success(`${player.playerName} is Selected`)
        setIsSelect(!isSelect)

        setSelectedPlayers([...selectedPlayers ,player])
        console.log(selectedPlayers)

    }

    return (
        <div className=''>
            <div className='rounded-t-2xl'>
                <div className="card  shadow-lg hover:scale-105 hover:shadow-2xl  ">
                    <figure className='border-5 border-[#fc0202] bg-linear-to-r from-green-50 to-red-50'>
                        <div className=' h-50 '>
                            <img
                                src={player.playerImage}
                                alt={player.playerName} className='w-full h-full object-cover' />
                        </div>
                    </figure>
                    <div className="px-4 py-4 bg-linear-to-r from-green-100 to-red-100 border-5 
                    border-[green] rounded-b-2xl">
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
                                <span className='bg-green-500 border shadow px-2 rounded-3xl text-sm '> {player.rating}  </span>
                                <FcRating /> </p>
                        </div>
                        <div className='flex justify-between '>
                            <p className='text-lg font-bold'>{player.batingOrBowling}</p>
                            <p className='text-lg font-bold text-[#898989] '>{player.batingOrBowling}</p>

                        </div>
                        <div className='flex justify-between my-3' >
                            <p className='text-lg font-bold flex items-center'>Price: {player.price} <TbCoinTakaFilled /></p>

                            <button onClick={handleSelect}
                                className='btn font-bold bg-[#f3f3f3] border-r-5 border-red-500' disabled={isSelect}>

                                {isSelect ? 'Selected' : 'Choose Player'}

                            </button>
                        </div>



                    </div>
                </div>

            </div>
        </div>
    );
};

export default Cards;