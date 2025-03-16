import SvgComponent from "../../assets/TikTok"

export default function Header(){
    return (
        <header class=" bg-gray-800  py-2.5 px-4 flex justify-center">
            <nav className="flex justify-between items-center w-full max-w-6xl">
                <h1 class="text-gray-400 font-serif text-lg font-bold sm:text-2xl">Garimpo Style</h1>

                <ul class="flex gap-4">
                    <li class="text-white font-bold text-sm">
                        <div>
                            <a href="https://www.tiktok.com/@garimpostyle_">
                                <div className="bg-gray-300 min-h-8 min-w-8 rounded-full p-2">
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