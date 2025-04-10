export default function Hero() {
    return (
        <section class="bg-gray-900 w-full max-w-5xl flex flex-col justify-center items-center rounded mt-20">
            <div class="py-24 px-3 lg:flex lg:items-center md:py-32">
                <div class="mx-auto max-w-3xl text-center">
                    <h1 class="font-serif text-white bg-clip-text text-lg font-extrabold sm:text-xl lg:text-5xl">
                        Seu Anúncio,
                        <span class="sm:block">
                            {' '}
                            Nosso Palco de Elegância.{' '}
                        </span>
                    </h1>

                    <p class="font-[sans-serif] text-[10px] text-gray-300 mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        Destaque sua marca em um ambiente
                        que respira sofisticação e
                        exclusividade.
                    </p>

                    <div class="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            class="block w-full rounded-sm border border-gray-600 bg-gray-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:ring-3 focus:outline-hidden sm:w-auto"
                            href="https://thadeualves.vercel.app"
                        >
                            Quero Anunciar
                        </a>

                        <a
                            class="block w-full rounded-sm border border-gray-600 px-12 py-3 text-sm font-medium text-white hover:bg-gray-600 focus:ring-3 focus:outline-hidden sm:w-auto"
                            href="https://thadeualves.vercel.app"
                        >
                            Saiba Mais
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
