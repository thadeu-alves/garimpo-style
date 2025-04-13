export default function Product({ object }) {
    return (
        <a href={object.link}>
            <div className="bg-gray-950 rounded overflow-hidden text-center flex flex-col gap-1 shadow-2xl group">
                <img
                    src={object.image.url}
                    className="w-full h-full object-cover group-hover:opacity-85"
                />
                <h1 className="text-white text-xs sm:text-lg pt-3">
                    {object.title}
                </h1>
                <p className="text-neutral-400 pb-3 text-xs md:text-sm">
                    {object.short}
                </p>
            </div>
        </a>
    );
}
