import Hero from './Hero';
import ProductsList from './ProductsList';

export default function Section({ categories = [] }) {
    return (
        <section class="flex flex-col gap-8 justify-center items-center px-6">
            <Hero />

            <div class="w-full max-w-5xl flex flex-col items-center gap-4 text-center">
                <h1 className=" text-white text-4xl font-bold">
                    Todos os produtos
                </h1>
                <p className="text-gray-300">
                    Aqui, você tem acesso a uma curadoria
                    exclusiva de todos os produtos
                    disponíveis.
                </p>

                {categories.map((c) => {
                    return (
                        <ProductsList
                            slug={c.slug}
                            field={c.title}
                            link={c.url}
                        />
                    );
                })}
            </div>
        </section>
    );
}
