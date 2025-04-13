import React, { useState, useEffect } from "react";

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            content: (
                <>
                    <h1 className="font-serif text-white bg-clip-text text-4xl font-extrabold lg:text-5xl">
                        Seu Anúncio,
                        <span className="sm:block">
                            {" "}
                            Nosso Palco de Elegância.{" "}
                        </span>
                    </h1>
                    <p className="font-sans text-md text-gray-300 mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        Destaque sua marca em um ambiente
                        que respira sofisticação e
                        exclusividade.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded-sm border border-gray-600 bg-gray-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:ring-3 focus:outline-none sm:w-auto"
                            href="https://thadeualves.vercel.app"
                        >
                            Quero Anunciar
                        </a>
                        <a
                            className="block w-full rounded-sm border border-gray-600 px-12 py-3 text-sm font-medium text-white hover:bg-gray-600 focus:ring-3 focus:outline-none sm:w-auto"
                            href="https://thadeualves.vercel.app"
                        >
                            Saiba Mais
                        </a>
                    </div>
                </>
            ),
        },
        {
            content: (
                <>
                    <h1 className="font-serif text-white bg-clip-text text-4xl font-extrabold lg:text-5xl">
                        Shopee
                    </h1>
                    <p className="font-sans text-md text-gray-300 mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        Adquira peças únicas com a distinção
                        de quem valoriza qualidade e
                        requinte.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded-sm border border-orange-600 bg-orange-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-orange-600 focus:ring-3 focus:outline-none sm:w-auto"
                            href="https://s.shopee.com.br/10oqqlRf7I"
                        >
                            Shop Now
                        </a>
                    </div>
                </>
            ),
        },
        // Slide 3: TikTok (novo gradiente ciano-rosa, texto branco)
        {
            content: (
                <>
                    <h1 className="font-serif text-white bg-clip-text text-4xl font-extrabold lg:text-5xl">
                        TikTok
                    </h1>
                    <p className="font-sans text-md text-gray-300 mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        Descubra um mundo de elegância em
                        movimento, onde a tradição encontra
                        a arte.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded-sm border border-white-500 bg-gradient-to-r from-cyan-500 to-pink-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-gray-200 focus:ring-3 focus:outline-none sm:w-auto "
                            href="https://www.tiktok.com/@garimpostyle_"
                        >
                            Siga no TikTok
                        </a>
                    </div>
                </>
            ),
        },
        // Slide 4: Instagram (novo gradiente com cores da logo, texto branco)
        {
            content: (
                <>
                    <h1 className="font-serif text-white bg-clip-text text-4xl font-extrabold lg:text-5xl">
                        Instagram
                    </h1>
                    <p className="font-sans text-md text-gray-300 mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        Contemple uma galeria de
                        sofisticação, onde cada imagem
                        reflete um legado de classe.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded-sm border border-white bg-gradient-to-r from-red-500 via-purple-500  to-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-gray-200 focus:ring-3 focus:outline-none sm:w-auto"
                            href="https://www.instagram.com/garimpo_style_/"
                        >
                            Siga no Instagram
                        </a>
                    </div>
                </>
            ),
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(
                (prev) => (prev + 1) % slides.length
            );
        }, 5000); // Muda a cada 5 segundos

        return () => clearInterval(timer);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="bg-gray-900 w-full max-w-5xl flex flex-col justify-center items-center rounded relative">
            <div className="w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${
                            currentSlide * 100
                        }%)`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0 flex flex-col justify-center"
                        >
                            <div className="py-24 px-8 flex items-center md:py-32 h-full">
                                <div className="mx-auto max-w-3xl text-center flex flex-col justify-between ">
                                    {slide.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center my-4 space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentSlide === index
                                ? "bg-white"
                                : "bg-gray-600"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
