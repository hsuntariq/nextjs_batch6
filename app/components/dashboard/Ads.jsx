import React from 'react'

const Ads = () => {
    return (
        <>
            <div style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.7)), url(https://i.pinimg.com/originals/58/9e/ab/589eab35dd53bb00a87f28129ef8f16c.png)',
                backgroundSize: 'contain',
                backgroundPosition: 'center center'
            }} className="flex flex-col self-start gap-4 p-7 w-[20%]">

                <div className="font-bold">
                    🔥 Available now
                </div>
                <h6 className="font-bold text-sm">
                    How to use the new version of dashboard
                </h6>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet.
                </p>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet.
                </p>
                <button className="p-1 rounded-full bg-purple-600">
                    Watch Now
                </button>
            </div>
        </>
    )
}

export default Ads