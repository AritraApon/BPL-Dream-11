import React from 'react';
import SelectedPlayerCards from '../UI/selectedPlayerCards';

const SelectedPlayer = ({selectedPlayers ,setSelectedPlayers ,coin ,setCoin}) => {

    return (
        <div className='max-w-360 mx-auto'>
        <div className='w-11/12 mx-auto space-y-5'>

           <div className='space-y-6'>
             {
              selectedPlayers.length === 0 ? <div>
                <div className='text-center mt-[10%] '>
                   <div className='py-10 rounded-xl bg-linear-to-r from-green-100 to-red-100 p-2 shadow'> <h1 className='font-bold text-3xl text-red-500'>No Players Selected yet</h1>
                    <p>Go to Available Tab to select players </p>
                   </div>
                </div>
              </div>:  selectedPlayers.map(player => <SelectedPlayerCards player={player}  coin={coin} setCoin={setCoin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} ></SelectedPlayerCards> )
            }
           </div>
        </div>
        </div>
    );
};

export default SelectedPlayer;