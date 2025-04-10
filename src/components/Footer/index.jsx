import SvgComponent from '../../assets/TikTok';

export default function Footer() {
    return (
        <footer className="bg-gray-900 flex flex-col justify-center items-center py-4 px-6">
            <div className="w-full py-4 flex justify-between">
                <a href="#">
                    <h1 className="text-white text-2xl">
                        Garimpo Style
                    </h1>
                </a>
                <a href="https://www.tiktok.com/@garimpostyle_">
                    <div className="bg-gray-300 w-10 h-10 rounded-full p-2">
                        <SvgComponent className="w-full h-full" />
                    </div>
                </a>
            </div>
            <div className="py-2 border-t-2 border-gray-400 w-full max-w-6xl">
                <h1 className="text-white">
                    Developed by{' '}
                    <a
                        href="https://thadeualves.vercel.app"
                        className="text-gray-400 underline"
                    >
                        Thadeu Alves
                    </a>
                </h1>
            </div>
        </footer>
    );
}
