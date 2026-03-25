import React from 'react';
import BackgroundShadowImage from "../../assets/bg-shadow.png"
import BannerMain from "../../assets/banner-main.png"

const HeroBanner = () => {
    return (
        <div className='max-w-360 mx-auto'>
            <div>
                <div className='min-h-[60vh]' style={{
                    backgroundImage: `url(${BackgroundShadowImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: "cover",

                }}>
                    <div className='flex justify-center items-center pt-10'>
                        <img src={BannerMain} alt="" />
                    </div>
                    <div className='space-y-2'>
                        <h1 className='px-2 text-3xl md:text-5xl font-extrabold text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className='text-xl md:text-2xl text-center font-light'>Beyond Boundaries Beyond Limits</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default HeroBanner;