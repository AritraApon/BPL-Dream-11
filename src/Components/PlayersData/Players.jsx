import React, { use,  useState } from 'react';
import { HiH1 } from 'react-icons/hi2';
import PlayerCardInfo from '../UI/Cards';
import AvailablePlayer from '../AvilablePlayer/AvilabalePlayer';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const Players = ({ playerPromise, coin ,setCoin }) => {
    const playerData = use(playerPromise)
    const [selectButtonType , setSelectButtonType ] = useState(true);
    const [selectedPlayers , setSelectedPlayers] = useState([])

    const handleAvailableButton = () => {
              setSelectButtonType(!selectButtonType)
    }

    return (
        <div>
            <div className='max-w-360 mx-auto'>
                <div className=' w-11/12 mx-auto flex flex-col md:flex-row gap-3 justify-between items-center my-10 '>
                    {selectButtonType === true ? <h1 className='text-3xl md:text-4xl font-bold'>Available Players</h1> : <h1 className='text-3xl md:text-4xl font-bold'>Selected Players ({selectedPlayers.length}/{playerData.length})</h1>}

                      <div>
                        <button onClick={handleAvailableButton} className={` btn ${selectButtonType === true ? 'bg-[green]' :" bg-[black"} rounded-l-xl`}>Available</button>
                        <button onClick={handleAvailableButton} className={` btn ${!selectButtonType === false ? 'bg-[]': 'bg-[green]'}  rounded-r-xl`}>Selected ({selectedPlayers.length})</button>
                      </div>

                </div>

            </div>
           {
            selectButtonType === true ?  <AvailablePlayer playerData={playerData} coin={coin} setCoin={setCoin} setSelectedPlayers={setSelectedPlayers}  selectedPlayers={selectedPlayers} /> :
            <SelectedPlayer setSelectedPlayers={setSelectedPlayers}  selectedPlayers={selectedPlayers} coin={coin} setCoin={setCoin} />
           }

        </div>
    );
};

export default Players;