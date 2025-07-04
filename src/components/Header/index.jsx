import SvgComponent from "../../assets/TikTok";
import Shopee from "../../assets/Shopee";
import Logo from "../../assets/Logo";
import Insta from "../../assets/Insta";

export default function Header() {
    return (
        <header class=" w-full bg-gray-950 py-4 px-4 z-40 border-b border-yellow-500">
            <nav className="flex justify-between items-center w-full max-w-6xl mx-auto">
                <div className="flex items-center justify-center gap-2">
                    <a
                        href="/"
                        className="flex items-center gap-2"
                    >
                        <div className="w-10 h-10">
                            <Logo className="w-full h-full rounded-full" />
                        </div>
                        <h1 class="text-gray-400 font-serif text-md font-bold sm:text-2xl">
                            Garimpo Style
                        </h1>
                    </a>
                </div>

                <ul class="flex gap-4">
                    <li class="">
                        <a
                            href="https://www.tiktok.com/@garimpostyle_"
                            aria-label="tik tok"
                        >
                            <div className="bg-neutral-800 w-8 h-8 md:w-10 md:h-10 rounded-full p-2">
                                <SvgComponent className="w-full h-full" />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/garimpo_style_/"
                            aria-label="instagram"
                        >
                            <div className="bg-neutral-800 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center box-border p-2">
                                <Insta className="w-full h-full" />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://s.shopee.com.br/10oqqlRf7I"
                            aria-label="shoppee"
                        >
                            <div className="bg-red-900 text-white  rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center box-border p-2">
                                <Shopee className="w-full h-full" />
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
