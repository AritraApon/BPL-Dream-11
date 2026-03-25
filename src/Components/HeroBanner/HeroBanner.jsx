import React from 'react';
import BackgroundShadowImage from "../../assets/bg-shadow.png"
import BannerMain from "../../assets/banner-main.png"

const HeroBanner = () => {
    return (
        <div className='max-w-360 mx-auto'>
            <div >
                <div className='min-h-[60vh] pb-10' style={{
                    backgroundImage: `url(${BackgroundShadowImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: "cover",

                }}>
                    {/* image  */}
                    <div className='flex justify-center items-center pt-10'>
                        <img src={BannerMain} alt="" />
                    </div>
                    {/* text  */}
                    <div className='space-y-2'>
                        <h1 className='px-2 text-3xl md:text-5xl font-extrabold text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className='text-xl md:text-2xl text-center font-light'>Beyond Boundaries Beyond Limits</p>
                    </div>
                    {/* button  */}
                    <div className='text-center mt-4 mb-10'>
                       <span className='px-1 pt-3 pb-4 border-2 text-center border-[#e6ff01] rounded-2xl shadow '>
                         <button className='btn bg-[#e7fe29] font-bold rounded-2xl'>Claim Free Credit</button>
                       </span>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default HeroBanner;