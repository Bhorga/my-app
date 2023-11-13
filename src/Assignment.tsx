import React, { useEffect, useRef, useState } from "react";
import DropdownHover from "./components/DropdownHover";


const Assignment = (props: any) => {

    const [showDropdownOption, setShowDropdownOption] = useState<boolean>(false);
    const rotateRef = useRef<any>(null);
    const openAccountMenuRef = useRef<any>(null);
    const accountMenuRef = useRef<any>(null);
    const rotateLocRef = useRef<any>(null)

    const openLocationDropdown = () => {
        if (!showDropdownOption) rotateLocRef.current.classList.add('rotate-180');
        else rotateLocRef.current.classList.remove('rotate-180');
        setShowDropdownOption(!showDropdownOption)
    }


    const [sideNavMenu, setSideNavMenu] = useState([
        { name: 'BUY A CAR', submenu: { popular: ['Maruti', 'Hyundai', 'Honda', 'Renault', 'Tata', 'Toyota'], models: [] } },
        { name: 'Sell A CAR ' },
        { name: 'CAR FINANCE' }
    ])


    useEffect(() => {
        const handleMouseEnter = () => {
            rotateRef.current.classList.add('rotate-180')
            accountMenuRef.current.classList.remove('hidden');
            openAccountMenuRef.current.classList.remove('h-10');
            openAccountMenuRef.current.classList.add('h-24');
            accountMenuRef.current.classList.remove('opacity-0');
            accountMenuRef.current.classList.add('opacity-100');
        };

        const handleMouseLeave = () => {
            rotateRef.current.classList.remove('rotate-180');
            accountMenuRef.current.classList.add('hidden');
            openAccountMenuRef.current.classList.add('h-10');
            openAccountMenuRef.current.classList.remove('h-24');
            accountMenuRef.current.classList.add('opacity-0');
            accountMenuRef.current.classList.remove('opacity-100');
        };

        openAccountMenuRef.current.addEventListener('mouseenter', handleMouseEnter);
        openAccountMenuRef.current.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            openAccountMenuRef.current.removeEventListener('mouseenter', handleMouseEnter);
            openAccountMenuRef.current.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (<>

        <div className="bg-[#fafafa] h-screen overflow-scroll">
            <div className="sticky top-0 z-50">
                <div className="bg-white px-2 relative border sticky">
                    <div className="grid grid-cols-12">
                        <div className="col-span-3 pl-3 ml-3 py-4">
                            <div className="flex justify-center items-center">
                                <img src="https://fastly-production.24c.in/cars24/seo/static/1_20230830_1693395013.png" alt="" style={{ height: '39px' }} />
                                <div className="bg-[#fafafa] rounded-xl py-2.5 px-3 ml-5 flex justify-between" onClick={openLocationDropdown}>
                                    <p className="lg:flex mr-3 font-semibold hidden lg:block">
                                        <img width='18' height="18" className="mr-2" src="https://assets.cars24.com/production/c2b-website/231107155239/js/362fd7a6cf19fda7c2f68ebd21c06a09.svg" alt="city" /> <span className="whitespace-nowrap"> New Delhi</span>
                                    </p>
                                    <img ref={rotateLocRef} width="24" height="24" className="transition-tansform duration-300" src="https://assets.cars24.com/production/c2b-website/231107155239/js/bf6340572e7389b8b545ad752218ee5c.svg" alt="arrow"></img>
                                </div>
                            </div>

                        </div>
                        <div className="col-span-5 pl-10 items-center">
                            <div className="grid grid-cols-4 pt-5">
                                {sideNavMenu.map((res: any) => {
                                    return <DropdownHover data={res} />
                                })}
                            </div>

                        </div>
                        <div></div>
                        <div className="col-span-3 py-6 mx-10">
                            <div className="flex items-center justify-center mt-1">

                                <div className="mr-5">
                                    <img src="https://assets.cars24.com/production/c2b-website/231107155239/js/a7b5a250e71331e76e52ae4c1ac245d4.svg" alt="Add to wishlist" width="24" height="24" />
                                </div>
                                <div className="mr-3">
                                    <img width="24" height="24" src="https://assets.cars24.com/production/c2b-website/231107155239/js/1dbd974090c35e48bdb8c3273b07fb4e.svg" alt="User" />
                                </div>
                                <div className="relative">
                                    <div className="absolute h-10 top-[-20px]" ref={openAccountMenuRef} >
                                        <div className="font-bold ">
                                            <div className="text-xs whitespace-nowrap text-[#465166]">
                                                Hello, Sign in
                                            </div>
                                            <div className="text-lg flex">
                                                <span className="mr-3">
                                                    Account
                                                </span>
                                                <img ref={rotateRef} className="transition-tansform duration-300" width="18" height="19" src="https://assets.cars24.com/production/c2b-website/231107155239/js/88757aed7f24280576e80d03627baf79.svg" alt="Account" />

                                            </div>
                                        </div>


                                        <div id={'navDropdown'} ref={accountMenuRef} className="h-full absolute top-[65px] right-0 h-20 w-24 start-0 opacity-0">
                                            <div className="bg-white p-4 rounded-lg">
                                                <div className="pt-1 whitespace-nowrap">
                                                    <div className="col-span-3">
                                                        <div className="grid grid-cols-2">
                                                            this is
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>






                                </div>


                            </div>



                        </div>
                    </div>
                </div>

            </div>

            <div  className="bg-red-200">
                this is div under topbar
        
            </div>

        </div>

        
    </>)

};
export default React.memo(Assignment);
