import SvgComponent from '../../assets/TikTok';
import Shopee from '../../assets/Shopee';

export default function Header() {
    return (
        <header class=" fixed top-0 left-0 w-full bg-gray-800 py-2.5 px-4 z-40">
            <nav className="flex justify-between items-center w-full max-w-6xl">
                <div className="flex items-center justify-center gap-2">
                    <a href="/">
                        <h1 class="text-gray-400 font-serif text-lg font-bold sm:text-2xl">
                            Garimpo Style
                        </h1>
                    </a>

                    <span className="text-gray-300 font-bold">
                        +
                    </span>

                    <a href="https://s.shopee.com.br/10oqqlRf7I">
                        <div className="text-white bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center box-border p-2">
                            <Shopee className="w-full h-full" />
                        </div>
                    </a>
                </div>

                <ul class="flex gap-4">
                    <li class="">
                        <a href="https://www.tiktok.com/@garimpostyle_">
                            <div className="bg-gray-300 w-10 h-10 rounded-full p-2">
                                <SvgComponent className="w-full h-full" />
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
