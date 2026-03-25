import { Suspense } from "react";
import HeroBanner from "./Components/HeroBanner/HeroBanner"
import NavBar from "./Components/Navbar/NavBar"
import Players from "./Components/PlayersData/Players";

const playersInformation = async()=>{
  const res = await fetch('data.json');
  return res.json();
}



function App() {

 const playerPromise = playersInformation() ;
  return (
    <>
    <NavBar></NavBar>
    <HeroBanner/>
     <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
      <Players playerPromise={playerPromise}></Players>
     </Suspense>
    </>
  )
}

export default App
