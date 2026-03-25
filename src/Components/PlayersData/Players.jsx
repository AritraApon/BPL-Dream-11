import React, { use } from 'react';
import { HiH1 } from 'react-icons/hi2';
import PlayerCardInfo from '../UI/PlayerCardInfo';

const Players = ({ playerPromise }) => {
    const playerData = use(playerPromise)
    console.log(playerData)
    return (
        <div>
            <div className='max-w-360 mx-auto mt-10'>
                <div className='w-11/12 mx-auto '>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {
                            playerData.map((player, index) => <PlayerCardInfo key={index} player={player}></PlayerCardInfo>)
                        }

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Players;