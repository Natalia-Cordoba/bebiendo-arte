export const Intro = () => {
    return (
        <section className="bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508261301902-79a2d8e78f71?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            <article className="animate-jump-out animate-once animate-duration-[3000ms] animate-delay-500 animate-ease-in-out animate-reverse rounded-lg h-auto w-2/3 md:max-w-5xl mx-auto p-4 shadow-lg backdrop-blur bg-black/60">
                <h2 className="font-custom-font text-custom-white font-bold text-2xl md:text-4xl pb-2 text-center">Un espacio para conectar con tu creatividad</h2>
                <h4 className='font-custom-font font-thin text-custom-white text-center md:text-2xl'>Descubre el placer de crear mientras Bebes Arte</h4>
            </article>
        </section>
    )
}