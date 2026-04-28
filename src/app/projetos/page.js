import Image from "next/image";

export default function Projetos() {
    return(
        <div className="text-white bg-[#001F25] min-h-screen">
            <div className="relative w-full h-[600px]">
                <Image
                    src="/mar.jpg"
                    alt="Mar/oceano"
                    fill
                    className="object-cover object-bottom"
                ></Image>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#001F25]"></div>

                <div className="absolute inset-0 flex items-center justify-center text-white">
                    <h1 className="text-3xl">Meus projetos</h1>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-4 w-[1500px]">
                    <a
                        href="https://github.com/manu-hostin/WEGOne.git"
                        target="_blank" // Abre uma nova aba
                        className="bg-[#043D47] p-4 text-center"
                    >
                        <h2 className="text-white text-xl font-bold mb-2">Projeto WEGOne</h2>
                    </a>

                    <a
                        href="https://github.com/andrMiotto/WEG-Segura-Sustentavel.git"
                        target="_blank" // Abre uma nova aba
                        className="bg-[#043D47] p-4 text-center"
                    >
                        <h2 className="text-white text-xl font-bold mb-2">Projeto WEG Segura e Sustentável</h2>
                    </a>

                    <a
                        href="https://github.com/manu-hostin/Landing-AIWritingTools.git"
                        target="_blank" // Abre uma nova aba
                        className="bg-[#043D47] p-4 text-center"
                    >
                        <h2 className="text-white text-xl font-bold mb-2">Projeto Landing AI Writing Tools</h2>
                    </a>

                    <a
                        href="https://github.com/manu-hostin/Sistema-Manutencao-Industrial.git"
                        target="_blank" // Abre uma nova aba
                        className="bg-[#043D47] p-4 text-center"
                    >
                        <h2 className="text-white text-xl font-bold mb-2">Projeto Manutenção Industrial</h2>
                    </a>
                </div>
            </div>
                
        </div>
    )
}