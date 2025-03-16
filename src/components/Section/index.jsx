import Product from "./Product"
import Hero from "./Hero"

export default function Section({products = []}){
    return (
        <section class="flex flex-col gap-8 justify-center items-center px-6">
            <Hero />

            <div class="w-full max-w-5xl flex flex-col items-center gap-4 text-center">
                <h1 className=" text-white text-4xl font-bold">Todos os produtos</h1>
                <p className="text-gray-300">Aqui, você tem acesso a uma curadoria exclusiva de todos os produtos disponíveis.</p>
                <div className="w-full grid grid-cols-2 mx-3 gap-3 lg-grid-cols-3">
                    {
                        products.map((product) => {
                            return (<Product object={product}/>)
                        })   
                    }
                </div>
            </div>
        </section>
    )
}