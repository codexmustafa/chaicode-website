import React from 'react'

const LogoCloud = () => {
    const pill = [
        { title: "Docker" },
        { title: "Kubernetes" },
        { title: "Linux Servers" },
        { title: "AWS Cloud" },
        { title: "Git & GitHub" },
        { title: "CI/CD Pipelines" },
        { title: "Monitoring & Logging" },
        { title: "Infrastructure as Code" },
        { title: "Microservices" },
        { title: "Container Security" },
        { title: "Serverless Computing" },
      ];
      
    return (
        <div
        style={{
            background: 'conic-gradient(from -22deg at 30.22% 86.83%, #19171C 65.82536816596985deg, #FF7D0C 360deg, #0C111D 360deg)'
          }}
            className='w-full flex text-center flex-col items-center lg:flex lg:items-center lg:justify-start  lg:gap-10 lg:flex-col lg:h-screen py-20'>
            <div className='flex flex-col gap-2 items-center text-white'>
                <div className="text-orange-500 text-2xl lg:text-4xl font-medium mb-2">Discover Topics of Your Interest</div>
                <div className="mb-6 lg:text-xl text-xl  lg:min-w-[300px] lg:w-full text-center">You can find videos and courses on topics and much more</div>
            </div>
            <div className='flex items-center max-w-[200px] lg:max-w-[800px] flex-wrap justify-center gap-4 '>
                {
                    pill.map((text, index) => (
                        <div key={index} className='flex cursor-pointer px-4 py-2 rounded-lg text-[#FF4405] font-medium border border-[#FF4405] bg-[#FF4405]/10'>{text.title}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default LogoCloud