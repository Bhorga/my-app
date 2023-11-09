import React, { useEffect, useRef, useState } from "react";
import DropdownHover from "./components/DropdownHover";


const Assignment = (props: any) => {

    const [showDropdownOption, setShowDropdownOption] = useState<boolean>(false);

    const openLocationDropdown = () => {
        setShowDropdownOption(true)
    }


    const [sideNavMenu, setSideNavMenu] = useState([{ name: 'Buy a car', popular: ['Maruti', 'Hyundai', 'Honda', 'Renault', 'Tata', 'Toyota'], models:[] }])
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    
    return (<>
        <div className="h-screen overflow-auto bg-gray">
            <div className="bg-white px-2 relative border sticky top-0 z-10">
                <div className="flex items-center grid grid-cols-12">
                    <div className="col-span-3 pl-3 ml-3 py-4">
                        <div className="flex justify-center items-center">
                            <img src="https://fastly-production.24c.in/cars24/seo/static/1_20230830_1693395013.png" alt="" style={{ height: '39px' }} />
                            <div className="bg-[#fafafa] rounded-xl py-2.5 px-3 ml-5 flex justify-between">
                                <p className="lg:flex mr-3 font-semibold hidden lg:block" onClick={openLocationDropdown}>
                                    <img width='18' height="18" className="mr-2" src="https://assets.cars24.com/production/c2b-website/231107155239/js/362fd7a6cf19fda7c2f68ebd21c06a09.svg" alt="city" /> <span className="whitespace-nowrap"> New Delhi</span>
                                </p>
                                <img width="24" height="24" src="https://assets.cars24.com/production/c2b-website/231107155239/js/bf6340572e7389b8b545ad752218ee5c.svg" alt="arrow"></img>
                            </div>
                        </div>

                    </div>
                    <div className="col-span-5 pl-10 items-center">
                        <div className="flex ">
                            {sideNavMenu.map((res: any) => {
                                return <DropdownHover data={res} />
                            })
                            }
                        </div>

                    </div>
                    <div></div>
                    <div className="col-span-3">
                        how r u?
                    </div>
                </div>


            </div>

{/****************************************************************************************************************** */}

            <div id={'navDropdown'} className="h-full opacity-50 z-10">
                <div className="bg-slate-500 h-full">
                    this is div under nav dropdown
                </div>
            </div>

        </div>




    </>)

};
export default React.memo(Assignment);
