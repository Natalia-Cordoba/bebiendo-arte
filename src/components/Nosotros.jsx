import { Container } from "postcss"

export const Nosotros = () => {
    return (
        <section id="nosotros" className="bg-custom-pink dark:bg-gray-800 py-8 px-4">
            <div className="mx-auto max-w-5xl">
                <h2 className="text-custom-white dark:text-custom-orange font-bold text-2xl pb-2 text-center">¿Qué es bebiendo arte?</h2>
                <article>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet assumenda exercitationem saepe minus dicta voluptates perferendis consequuntur accusamus earum officia amet accusantium officiis nesciunt, excepturi commodi nulla asperiores quo hic!</p>
                    <picture>
                        <img src="#" alt="Imagen" />
                    </picture>
                </article>
                <article>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet assumenda exercitationem saepe minus dicta voluptates perferendis consequuntur accusamus earum officia amet accusantium officiis nesciunt, excepturi commodi nulla asperiores quo hic!</p>
                    <picture>
                        <img src="#" alt="Imagen" />
                    </picture>
                </article>
            </div>
        </section>
    )
}