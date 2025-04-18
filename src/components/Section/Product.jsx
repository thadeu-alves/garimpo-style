export default function Product({ object }) {
    return (
        <a href={object.link}>
            <div className="bg-gray-950 rounded overflow-hidden text-center flex flex-col gap-1 shadow-2xl group w-full">
                <div className="relative w-full aspect-square">
                    <img
                        src={object.image.url}
                        className="w-full h-full max-h-52 object-cover group-hover:opacity-85 md:max-w-60"
                        alt={object.title}
                    />
                </div>
                <h1 className="text-white text-xs sm:text-lg pt-3 line-clamp-2">
                    {object.title}
                </h1>
                <p className="text-neutral-400 pb-3 text-xs md:text-sm line-clamp-2">
                    {object.short}
                </p>
            </div>
        </a>
    );
}
