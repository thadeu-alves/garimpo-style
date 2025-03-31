import Product from "./Product"


export default function ProductsList({products, field, link}){
    return (
        <div className="mt-6">
            <div
                className="flex items-center justify-between mb-4 text-gray-200"
            >
                <h1
                    className="text-2xl"
                >{field}</h1>
                <a href={`/${link}`}
                    className="text-gray-400"
                >Ver todos</a>
            </div>


            <div className="w-full grid grid-cols-2 gap-3 lg:grid-cols-4">
                {
                    products.map((product) => {
                        return (<Product object={product}/>)
                    })   
                }
            </div>
        </div>
    )
}