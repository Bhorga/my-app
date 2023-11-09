import React, { useEffect, useRef } from "react";



const DropdownHover = (props: any) => {


    const menuItemRef = useRef<any>(null);
    const subMenuRef = useRef<any>(null);

    useEffect(() => {
        const handleMouseEnter = () => {
            subMenuRef.current.classList.remove('hidden');
            subMenuRef.current.classList.remove('opacity-0');
            //subMenuRef.current.classList.add('');
            subMenuRef.current.classList.add('opacity-100');
            console.log(subMenuRef.current.classList)
        };

        const handleMouseLeave = () => {
            //subMenuRef.current.classList.remove('');
            subMenuRef.current.classList.remove('opacity-100');
            subMenuRef.current.classList.add('hidden');
            subMenuRef.current.classList.add('opacity-0');
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
            <div className="p-1 border-b-4 border-white hover:border-orange-500 rounded relative" ref={menuItemRef}>
                {props.data.name}
                <div id={'navDropdown'} ref={subMenuRef} className="h-full transition-opacity absolute top-[65px] -z-50 left-[-10px] opacity-100 duration-500 w-max">
                    <div className="bg-white p-4 rounded-lg">
                        <div className="grid grid-cols-8 pt-1">

                            <div className="col-span-3">
                                <div className="grid grid-cols-2">
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
                                    <div>
                                        <div className="font-semibold">
                                            Popular Models
                                        </div>
                                        {props.data.models?.map((el: any) => {
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
                                        {props.data.popular?.map((el: any) => {
                                            return <div className="my-1">
                                                {el}
                                            </div>
                                        })}

                                    </div>
                                    <div>
                                        <div className="font-semibold">
                                            Popular Models
                                        </div>
                                        {props.data.models?.map((el: any) => {
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
                </div>

            </div>
        </div>
    )
}

export default DropdownHover;