import { Block } from './components/Block'
import { Header } from './components/Header'

export default function App() {
    return (
        <main>
            <Header />

            <div className="my-24 container mx-auto">
                <div className="flex justify-between gap-4 mb-8">
                    <h2 className="font-bold text-3xl">Blocos recomendados</h2>

                    <div className="p-2 flex gap-2 border border-gray-200 rounded-md">
                        <button className="text-sm py-1 px-6 font-bold bg-violet-500 text-white rounded-md uppercase">
                            Lista
                        </button>
                        <button className="text-sm py-1 px-6 font-bold text-violet-500 uppercase">
                            Mapa
                        </button>
                    </div>
                </div>

                <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-9">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <Block key={`block-${i}`} />
                    ))}
                </section>
            </div>
        </main>
    )
}
