import "./styles.css";
import Luz from "./Luz";
export default function Numbers() {
    return (
        <section className="flex flex-col h-screen items-center mt-16 gap-y-28 relative">
            <span className="bg-[#7D9EA6] px-3 py-1 w-24 rounded-full text-center">
                Calidad
            </span>
            <h2 className="text-5xl uppercase text-center text-balance">
                Abre tu mundo <br /> al lujo y al entretenimiento
            </h2>

            {/* Bola de Luz */}
            <Luz width="800px" height="96px" color="#000DFF" />
            <div className="flex items-center justify-center space-x-16">
                <div className="text-center flex flex-col gap-12">
                    <span className="text-6xl text-blue-300">74</span>
                    <p className="text-white/80 text-4xl">Experiencias</p>
                </div>
                <div className="border-l border-gray-300 h-32" />
                <div className="text-center flex flex-col gap-12">
                    <span className="text-6xl text-blue-300">234</span>
                    <p className="text-white/80 text-4xl">Viajes de lujo</p>
                </div>
                <div className="border-l border-gray-300 h-32" />
                <div className="text-center flex flex-col gap-12">
                    <span className="text-6xl text-blue-300">43</span>
                    <p className="text-white/80 text-4xl">Barcos</p>
                </div>
                <div className="border-l border-gray-300 h-32" />
                <div className="text-center flex flex-col gap-12">
                    <span className="text-6xl text-blue-300">23</span>
                    <p className="text-white/80 text-4xl">Años</p>
                </div>
            </div>
        </section>
    );
}
