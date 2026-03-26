import React from 'react';
import SelectedPlayerCards from '../UI/selectedPlayerCards';

const SelectedPlayer = ({selectedPlayers ,setSelectedPlayers ,coin ,setCoin}) => {
    console.log(selectedPlayers)
    return (
        <div className='max-w-360 mx-auto'>
        <div className='w-11/12 mx-auto space-y-5'>
            {
                selectedPlayers.map(selectedPlayer => <SelectedPlayerCards selectedPlayer ={selectedPlayer}  coin={coin} setCoin={setCoin}></SelectedPlayerCards> )
            }
        </div>
        </div>
    );
};

export default SelectedPlayer;