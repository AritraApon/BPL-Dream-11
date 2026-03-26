import { Suspense, useState } from "react";
import HeroBanner from "./Components/HeroBanner/HeroBanner"
import NavBar from "./Components/Navbar/NavBar"
import Players from "./Components/PlayersData/Players";
import { ToastContainer, toast } from 'react-toastify';
import Footer from "./Components/Footer/Footer";


const playersInformation = async () => {
  const res = await fetch('data.json');
  return res.json();
}



function App() {

  const playerPromise = playersInformation();
  const [coin, setCoin] = useState(50000)
  return (
    <>
      <NavBar coin={coin}  ></NavBar>
      <HeroBanner />
      <Suspense fallback={<div class="flex items-center justify-center min-h-screen bg-gray-100">
        <span className="loading loading-infinity loading-lg text-green-500"></span>
      </div>}>
        <Players playerPromise={playerPromise} coin={coin} setCoin={setCoin}></Players>
      </Suspense>
      <Footer></Footer>
      <ToastContainer position="top-center" />
    </>
  )
}

export default App
