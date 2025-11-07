import type { ReactElement } from 'react'
import './App.css'


function App(): ReactElement {
    return (
        <div className="w-full h-screen overflow-hidden bg-[#060606] flex flex-col items-center justify-center animate-[move-up_2.0s_ease-out_forwards]">
                <div className="relative w-[113px] h-[119px] mb-2">
            <svg
                width="113"
                height="119"
                viewBox="0 0 113 119"
                className="w-full h-full animate-[star-enter_1.0s_ease-out_forwards]"
            >
                <path
                    d="M0 0 C0.33 0 0.66 0 1 0 C1.07476562 0.72703125 1.14953125 1.4540625 1.2265625 2.203125 C3.04658355 16.12093301 9.37851357 26.86921622 20.19140625 35.8125 C28.2953327 41.61137403 37.12956657 44.35275846 47 45 C47 45.33 47 45.66 47 46 C46.12859375 46.14695313 45.2571875 46.29390625 44.359375 46.4453125 C31.11614081 48.93916829 20.09600188 53.67174119 11 64 C4.87408477 72.97517812 1.85250924 82.25838358 1 93 C0.67 93 0.34 93 0 93 C-0.20302734 91.72769531 -0.20302734 91.72769531 -0.41015625 90.4296875 C-2.87253869 77.0119149 -7.73038634 64.41040901 -19 56 C-27.94071429 50.41478606 -36.67096797 47.64824979 -47 46 C-47 45.67 -47 45.34 -47 45 C-45.97261719 44.85304687 -44.94523437 44.70609375 -43.88671875 44.5546875 C-30.34991711 42.43833371 -19.29576159 37.76845592 -10.31640625 26.9765625 C-4.73889879 19.27097863 -2.04208067 10.378726 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z"
                    fill="#FBFBFB"
                    transform="translate(56,17)"
                />
            </svg>
        </div>
        <div className="relative w-[200px] h-[100px]">

            {/* Bottom-left arc */}
            <svg
                className="absolute bottom-0 left-0 w-[100px] h-[100px] translate-x-25 -translate-y-1/1.5"
                viewBox="0 0 100 100"
            >
                <path
                    d="M0,100 A100,100 0 0,1 100,0"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    className="animate-draw"
                />
            </svg>

            {/* Bottom-right arc */}
            <svg
                className="absolute bottom-0 right-0 w-[100px] h-[100px] -translate-x-25 -translate-y-1/1.5"
                viewBox="0 0 100 100"
            >
                <path
                    d="M0,0 A100,100 0 0,1 100,100"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    className="animate-draw"
                />
            </svg>

            {/* Top edge */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-white animate-draw-line"></div>
        </div>
        <div className="relative z-10 mt-6 ml-6 animate-[text-appearance_1.0s_ease-out_forwards]">
            <p className={'text-white text-5xl tracking-[0.5em]'}>
                ELEVATE
            </p>
        </div>
    </div>
  )
}

export default App
