import Image from "astro/components/Image.astro";
import { handleDiscord } from "../../lib/discord";

export default function Product({ object }) {
    return (
        <a
            href={object.link}
            onClick={() => {
                handleDiscord(object.title);
            }}
        >
            <div className="bg-gray-950 rounded overflow-hidden text-center flex flex-col gap-1 shadow-2xl group w-full h-full">
                <div className="relative w-full aspect-square">
                    <img
                        src={object.image.url}
                        className="w-full h-52 max-h-52 object-cover group-hover:opacity-85 md:max-w-60 lg:max-w-none lg:h-full lg:max-h-60"
                        alt={object.title + object.short}
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
