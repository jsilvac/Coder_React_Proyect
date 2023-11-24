import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai'
import ImgCarrito from "./imgCarrito";

const links = [
    {
        link:"./",
        text:"Home",
        id: 1
    },
    {
        link:"/carrito/",
        text:<ImgCarrito></ImgCarrito>,
        id: 2
    }
];


export const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    

    const [ windowDimension, setWindowDimension ] = useState(
        {
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
        }
    );

    const detectSize = () => {
        setWindowDimension({
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
        })
    };

    useEffect(() => {
        window.addEventListener("resize",detectSize);
        return () => {
            window.addEventListener("resize", detectSize);
        };
    }, [windowDimension.innerWidth]);

  

    return (
        <div className="h-20 px-5 py-2 mt-1 border flex items-center justify-between w-full">
            <Link to={"/"}>
                <img
                src="/resources/images/logo_js.png"
                className="h-20 px-2 py-2"
                />
            </Link>
            {/* {windowDimension.innerWidth > 768 ? ( */}
             {   links.map((l) => (
                    <Link
                        className="text-xl"
                        to={l.link}
                        key={l.id}
                    >
                    {l.text}
                    </Link>
                ))}
            {/* ) : (
                isMenuOpen && (
                    <div>
                        {isMenuOpen ? (
                            <AiOutlineClose size={24} onClick={() => setIsMenuOpen(false)} />
                        ) : (
                            <AiOutlineMenu size={34} onClick={() => setIsMenuOpen(true)} />
                        )}
                        <ImgCarrito />
                    </div>
                )
            )} */}
            <p className="text-3xl">0</p>
        </div>
    );
    
}



