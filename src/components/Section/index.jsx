import Hero from "./Hero"
import ProductsList from "./ProductsList"

export default function Section({products = []}){
    const top = [];
    const back = [];
    const calc = [];
    const perf = [];
    const ace = [];

    products.forEach((product) => {
        if(product.slug == "tp" && top.length != 4){
            top.push(product);
        }else if(product.slug == "bx" && back.length != 4){
            back.push(product);
        }else if(product.slug == "cl" && calc.length != 4){
            calc.push(product);
        }else if(product.slug == "pf" && perf.length != 4){
            perf.push(product);
        }else if(product.slug == "ac" && ace.length != 4){
            ace.push(product);
        }
    })


    return (
        <section class="flex flex-col gap-8 justify-center items-center px-6">
            <Hero />

            <div class="w-full max-w-5xl flex flex-col items-center gap-4 text-center">
                <h1 className=" text-white text-4xl font-bold">Todos os produtos</h1>
                <p className="text-gray-300">Aqui, você tem acesso a uma curadoria exclusiva de todos os produtos disponíveis.</p>
                
                <ProductsList products={top} field="Superiores" link="superiores"/>
                <ProductsList products={back} field="Inferiores" link="inferiores"/>
                <ProductsList products={calc} field="Calçados" link="calcados"/>
                <ProductsList products={perf} field="Perfumes" link="perfumes"/>
                <ProductsList products={ace} field="Acessórios" link="acessorios"/>
            </div>

            
        </section>
    )
}