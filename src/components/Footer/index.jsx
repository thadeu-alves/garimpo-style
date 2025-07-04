import SvgComponent from "../../assets/TikTok";
import Insta from "../../assets/Insta";
import Shopee from "../../assets/Shopee";

export default function Footer() {
    return (
        <footer className="bg-gray-950 flex flex-col justify-center items-center py-4 px-6">
            <div className="w-full py-4 flex justify-between max-w-6xl">
                <a href="/" aria-label="home page">
                    <h1 className="text-white text-2xl">
                        Garimpo Style
                    </h1>
                </a>
                <div className="flex gap-4">
                    <a
                        href="https://www.tiktok.com/@garimpostyle_"
                        aria-label="tik tok"
                    >
                        <div className="bg-neutral-800 w-10 h-10 rounded-full p-2">
                            <SvgComponent className="w-full h-full" />
                        </div>
                    </a>
                    <a
                        href="https://www.instagram.com/garimpo_style_/"
                        aria-label="instagram"
                    >
                        <div className=" bg-neutral-800 rounded-full w-10 h-10 flex items-center justify-center box-border p-2">
                            <Insta className="w-full h-full" />
                        </div>
                    </a>
                    <a
                        href="https://s.shopee.com.br/10oqqlRf7I"
                        aria-label="shoppee"
                    >
                        <div className="text-white bg-red-900 rounded-full w-10 h-10 flex items-center justify-center box-border p-2">
                            <Shopee className="w-full h-full" />
                        </div>
                    </a>
                </div>
            </div>
            <div className="py-2 border-t-2 border-yellow-500 w-full max-w-6xl">
                <h1 className="text-white">
                    Developed by{" "}
                    <a
                        href="https://thadeualves.vercel.app"
                        className="text-yellow-500 underline"
                    >
                        Thadeu Alves
                    </a>
                </h1>
            </div>
        </footer>
    );
}
