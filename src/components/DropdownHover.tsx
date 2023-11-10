import React, { useEffect, useRef } from "react";

const DropdownHover = (props: any) => {


    const menuItemRef = useRef<any>(null);
    const menuItemBorderRef = useRef<any>(null);
    const subMenuRef = useRef<any>(null);
    const rotateRef = useRef<any>(null);

    useEffect(() => {
        const handleMouseEnter = () => {
            
            menuItemBorderRef.current.classList.add('border-orange-500');
            menuItemBorderRef.current.classList.remove('border-white');
            if(subMenuRef.current){
                rotateRef.current.classList.add('rotate-180')
                subMenuRef.current.classList.remove('hidden');
                subMenuRef.current.classList.remove('opacity-0');
                subMenuRef.current.classList.add('opacity-100');
            } 
        };

        const handleMouseLeave = () => {
            menuItemBorderRef.current.classList.remove('border-orange-500');
            menuItemBorderRef.current.classList.add('border-white');
            if(subMenuRef.current){
                rotateRef.current.classList.remove('rotate-180')
                subMenuRef.current.classList.remove('opacity-100');
                subMenuRef.current.classList.add('hidden');
                subMenuRef.current.classList.add('opacity-0');
            }  
        };

        menuItemRef.current.addEventListener('mouseenter', handleMouseEnter);
        menuItemRef.current.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            menuItemRef.current.removeEventListener('mouseenter', handleMouseEnter);
            menuItemRef.current.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="lg:pt-1  whitespace-nowrap">
            <div className="relative" >
                
                <div className="absolute h-16" ref={menuItemRef}>
                    <div className="p-1 border-b-4 font-semibold rounded border-white text-sm flex" ref={menuItemBorderRef}>
                        {props.data.name}
                        {props.data.submenu && <div className="transition-tansform duration-300 ml-1" ref={rotateRef}>
                            <img width="24" height="24"  src="https://assets.cars24.com/production/c2b-website/231107155239/js/bf6340572e7389b8b545ad752218ee5c.svg" alt="arrow"/>
                        </div>
                        }

                    </div>

                    {props.data.submenu && <div id={'navDropdown'} ref={subMenuRef} className="h-full  absolute top-[65px] left-[-10px] opacity-0  w-max">
                        <div className="bg-white p-4 rounded-lg">
                            <div className="grid grid-cols-8 pt-1">

                                <div className="col-span-3">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <div className="font-semibold">
                                                Popular Makes
                                            </div>
                                            {props.data.submenu?.popular?.map((el: any) => {
                                                return <div className="my-1">
                                                    {el}
                                                </div>
                                            })}

                                        </div>
                                        <div>
                                            <div className="font-semibold">
                                                Popular Models
                                            </div>
                                            {props.data.submenu?.models?.map((el: any) => {
                                                return <div className="my-1">
                                                    {el}
                                                </div>
                                            })}
                                        </div>


                                    </div>

                                </div>
                                <div className="col-span-3">

                                    <div className="grid grid-cols-2">
                                        <div>
                                            <div className="font-semibold">
                                                Popular Makes
                                            </div>
                                            {props.data.submenu?.popular?.map((el: any) => {
                                                return <div className="my-1">
                                                    {el}
                                                </div>
                                            })}

                                        </div>
                                        <div>
                                            <div className="font-semibold">
                                                Popular Models
                                            </div>
                                            {props.data.submenu.models?.map((el: any) => {
                                                return <div className="my-1">
                                                    {el}
                                                </div>
                                            })}
                                        </div>


                                    </div>

                                </div>
                                <div className="col-span-2">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <div className="font-semibold">
                                                Popular Makes
                                            </div>
                                            {props.data.popular?.map((el: any) => {
                                                return <div className="my-1">
                                                    {el}
                                                </div>
                                            })}

                                        </div>



                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>}
                
                </div>
                
                
                
                
                
                

            </div>
        </div>
    )
}

export default DropdownHover;