import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (

    <div className="relative bg-[#1A1D0D] min-h-screen">
      <div className="relative w-full h-[400px] ">
        <Image
            src="/pagina-inicial.jpg"
            alt="Imagem teste"
            fill
            className="object-cover object-center" // mantém a proporção original, corta o excesso da imagem
        ></Image>

        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1D0D]"></div>
        

        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-3xl">Olá, seja bem-vindo(a)</h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-white text-center p-8">    
        <h1 className="text-4xl font-bold mb-2">Desenvolvedora em formação</h1>
        <p className="text-lg">Clique nos links abaixo para ir para meus projetos ou visitar a página sobre</p>
      </div>

      <nav className="flex flex-col items-center text-white py-4">

        <Link className="bg-[#262510] px-4 py-2 rounded" href="/projetos">Ir para Projetos</Link>
        <br></br>
        <Link className="bg-[#262510] px-4 py-2 rounded" href="/sobre">Ir para Sobre</Link>

      </nav>
    </div>
  );
}
