import { ThemeButton } from "./ThemeButton"
import { useState } from "react"
import menu from "../assets/icons/menu.svg"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="absolute top-0 z-10 w-full flex md:justify-between bg-custom-brown p-3 md:py-8 text-custom-white font-semibold">
            <h1 className="md:text-xl lg:ml-6" id="inicio">Bebiendo Arte</h1>
            <nav>
                <div className="flex ml-3">
                    <div className="hidden md:block md:text-lg">
                        <a className="mx-4 lg:mx-8 hover:text-gray-600 hover:bg-custom-white hover:p-2 hover:rounded-xl hover:shadow-md hover:shadow-gray-600 hover:transition-colors" href="/#nosotros">NOSOTROS</a>
                        <a className="mx-4 lg:mx-8 hover:text-gray-600 hover:bg-custom-white hover:p-2 hover:rounded-xl hover:shadow-md hover:shadow-gray-600 hover:transition-colors" href="/#experiencias">EXPERIENCIAS</a>
                        <a className="mx-4 lg:mx-8 hover:text-gray-600 hover:bg-custom-white hover:p-2 hover:rounded-xl hover:shadow-md hover:shadow-gray-600 hover:transition-colors" href="/#opiniones">OPINIONES</a>
                        <a className="mx-4 lg:mx-8 hover:text-gray-600 hover:bg-custom-white hover:p-2 hover:rounded-xl hover:shadow-md hover:shadow-gray-600 hover:transition-colors" href="/#contacto">CONTACTO</a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <img src={menu} alt="icono de menu" />
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden">
                        <div className="flex flex-col text-center">
                            <a className="hover:text-gray-600 transition-colors" href="/#nosotros">NOSOTROS</a>
                            <a className="hover:text-gray-600 transition-colors" href="/#experiencias">EXPERIENCIAS</a>
                            <a className="hover:text-gray-600 transition-colors" href="/#opiniones">OPINIONES</a>
                            <a className="hover:text-gray-600 transition-colors" href="/#contacto">CONTACTO</a>
                        </div>
                    </div>
                )}
            </nav>
            <ThemeButton />
        </header>
    )
}