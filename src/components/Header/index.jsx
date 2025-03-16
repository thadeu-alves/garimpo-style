import SvgComponent from "../../assets/TikTok"
import Shopee from "../../assets/Shopee"

export default function Header(){
    return (
        <header class=" bg-gray-800  py-2.5 px-4 flex justify-center">
            <nav className="flex justify-between items-center w-full max-w-6xl">
                <div className="flex items-center justify-center gap-2">
                    <h1 
                    class="text-gray-400 font-serif text-lg font-bold sm:text-2xl"
                    >Garimpo Style</h1>
                    
                    <span className="text-gray-300 font-bold">+</span>

                    <a href="https://s.shopee.com.br/10oqqlRf7I">
                    <div 
                    className="text-white bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center box-border p-2">
                        <Shopee 
                        className="w-full h-full" />
                    </div>
                    </a>
                </div>

                <ul class="flex gap-4">
                    <li class="text-white font-bold text-sm">
                        <div>
                        <a href="https://www.tiktok.com/@garimpostyle_">
                        <div 
                        className="bg-gray-300 min-h-8 min-w-8 rounded-full p-2">
                            <SvgComponent />
                        </div>
                        </a>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}