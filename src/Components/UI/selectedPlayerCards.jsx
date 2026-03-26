import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const SelectedPlayerCards = ({ setCoin, coin,  player ,setSelectedPlayers, selectedPlayers }) => {


    const handleRemoveBtn = (player) => {

        const filterSelectPlayer = selectedPlayers.filter(
            removePlayer => player.playerName !== removePlayer.playerName
        );
        console.log(filterSelectPlayer)
        setSelectedPlayers(filterSelectPlayer);
        setCoin(coin + player.price);

    }
    return (
        <div className='space-y-5'>
            <div className='flex px-3 rounded-xl bg-linear-to-r from-green-100 to-red-100 p-2 shadow justify-between items-center'>
                <div className=' flex items-center gap-4 '>
                    <div className="avatar">
                        <div className="w-15 rounded-full">
                            <img src={player.playerImage} />
                        </div>
                    </div>
                    <div>
                        <h1 className='flex items-center gap-2 font-bold text-lg py-2'><FaUserAlt /> {player.playerName}</h1>
                        <p className='text-sm '>{player.playerType}</p>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleRemoveBtn(player)} className='btn btn-error'><MdDeleteForever /> </button>
                </div>

            </div>
        </div>

    );
};

export default SelectedPlayerCards;