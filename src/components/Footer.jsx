import arrowUp from '../assets/icons/arrowUp.svg'

export const Footer = () => {
    return (
        <footer>
            <h3 className="bg-custom-brown py-3 text-custom-white font-semibold text-center">
                Hecho con 🖤 por Natalia Córdoba
            </h3>
            <a href="/#inicio" >
                <img
                    className='bg-custom-brown rounded-full border-2 border-custom-white p-1 fixed bottom-3 right-3 shadow-md shadow-gray-600 md:right-6 hover:h-10 ease-in-out'
                    src={arrowUp}
                    alt="icono flecha para ir al inicio"
                />
            </a>
        </footer>
    )
}