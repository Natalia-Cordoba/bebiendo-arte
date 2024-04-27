import { GaleriaFotos } from "./GaleriaFotos"

export const Nosotros = () => {
    return (
        <section id="nosotros" className="bg-custom-pink dark:bg-gray-800 pt-10 pb-6 px-4">
            <div className="mx-auto max-w-5xl">
                <h2 className="text-gray-600 dark:text-custom-orange font-bold text-3xl md:text-4xl pb-6 text-center">¿Qué es bebiendo arte?</h2>
                <article className="mx-auto md:max-w-4xl">
                    <p>¡Bienvenido/a a <strong className="text-custom-white dark:text-custom-pink">Bebiendo Arte</strong>! Sumérgete en un mundo de creatividad y expresión, donde pintar se convierte en una experiencia única que estimula todos tus sentidos. Nuestro espacio está diseñado para inspirarte y ayudarte a conectar con tu lado artístico de una manera relajada y divertida.</p>
                    <ul className="list-disc my-4">
                        <strong className="text-xl md:text-2xl text-custom-white dark:text-custom-pink">¿Qué ofrecemos?</strong>
                        <li className="ml-8">Experiencias de pintura por la tarde acompañadas de un delicioso café recién hecho.</li>
                        <li className="ml-8">Sesiones nocturnas de pintura con una selección cuidadosamente elegida de vinos.</li>
                        <li className="ml-8">Un momento para desconectar, jugar y compartir con otras personas</li>
                        <li className="ml-8">Todos los materiales incluidos en cada sesión.</li>
                    </ul>
                    <p>Reserva tu lugar <a href="/#contacto" className="text-custom-white dark:text-custom-pink font-bold underline hover:bg-gray-500 hover:dark:bg-gray-600 hover:px-4 hover:pb-1 hover:rounded-3xl">aquí</a> en la próxima sesión de pintura. ¡No necesitas experiencia previa, solo ganas de divertirte y explorar tu creatividad!</p>
                    <GaleriaFotos />
                </article>
            </div>
        </section>
    )
}