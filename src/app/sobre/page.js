import Image from "next/image";

export default function Sobre() {
    return (
        <div className="text-white bg-[#155157] min-h-screen">
            <div className="relative w-full h-[600px]">
                <Image
                    src="/sobre-node.jpg"
                    alt="Imagem do perfil"
                    fill
                    className="object-cover object-center"
                ></Image>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#155157]"></div>

                <div className="absolute inset-0 flex items-center justify-center text-white">
                    <h1 className="text-3xl">Sobre mim</h1>
                </div>
            </div>
            <div className="text-2xl flex flex-col items-center justify-center text-center ">
                <p>Me chamo Emanuelle e tenho 18 anos, estou terminando meu curso de ADS no CTW.</p>
               
                <p>Aqui, estou aprendendo tecnologias como Java, IoT, JavaScript, Python e Next.js.</p>
            </div>
               
            
        </div>
        
    );
}