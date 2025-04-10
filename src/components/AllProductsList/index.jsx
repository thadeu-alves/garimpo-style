import Product from '../Section/Product';

export default function AllProductsList({
    products = [],
    ctg = '',
    name = '',
}) {
    return (
        <section class="flex flex-col gap-8 justify-center items-center px-6">
            <div class="w-full max-w-5xl flex flex-col items-center gap-4 text-center">
                <h1 className=" text-white text-4xl font-bold">
                    Toda a categoria {name}
                </h1>
                <p className="text-gray-300">
                    Aqui, você tem acesso a uma curadoria
                    exclusiva de todos os produtos
                    disponíveis.
                </p>

                <div className="w-full grid grid-cols-2 mx-3 gap-3 lg:grid-cols-4">
                    {products.map((product) => {
                        return <Product object={product} />;
                    })}
                </div>
            </div>
        </section>
    );
}
