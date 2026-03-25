import React from 'react';
import Cards from '../UI/Cards'

const AvailablePlayer = ({playerData}) => {
    return (
        <div>


            <div className='max-w-360 mx-auto mt-10'>
                <div className='w-11/12 mx-auto '>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {
                            playerData.map((player, index) =>
                                 <Cards key={index} player={player}></Cards>
                       )
                        }

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AvailablePlayer;