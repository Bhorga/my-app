import React, { useEffect, useRef } from "react";

const SubmenuItemHover = (props: any) => {

    const submenuItemRef = useRef<any>(null);
    const arrowRef = useRef<any>(null);


    useEffect(() => {

        const handleMouseEnter = () => {
            arrowRef.current.classList.remove('relative')
            arrowRef.current.classList.add('absolute')
            arrowRef.current.classList.remove('hidden')
            arrowRef.current.classList.add('top-3')
            arrowRef.current.classList.add('right-4');

        };

        const handleMouseLeave = () => {
            arrowRef.current.classList.remove('absolute')
            arrowRef.current.classList.add('hidden')
            arrowRef.current.classList.add('relative')
            arrowRef.current.classList.remove('top-3')
            arrowRef.current.classList.remove('right-0');
        };

        
        submenuItemRef.current.addEventListener('mouseenter', handleMouseEnter);
        submenuItemRef.current.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            submenuItemRef.current.removeEventListener('mouseenter', handleMouseEnter);
            submenuItemRef.current.removeEventListener('mouseleave', handleMouseLeave);
        };

    }, [])

    return (
        <div ref={submenuItemRef} className="my-1 hover:pl-2 hover:font-bold w-full mr-6 relative" style={{ transition: 'padding-left 0.3s, font-weight 0.3s ' }}>
            <img ref={arrowRef} className="relative text-red-500 top-3 right-0 hidden" style={{ transition: 'color 3s'}} src="https://assets.cars24.com/production/c2b-website/231109160912/js/f4624986bdde266b8888d9bcb6bd11ed.svg" alt="" />
            {props.name}
        </div>

    )
}

export default SubmenuItemHover;