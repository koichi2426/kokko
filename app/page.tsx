import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer/Footer";
import CoccoCharacter from "./features/home/components/CoccoCharacter/CoccoCharacter";
import PoemBubble from "./features/home/components/PoemBubble/PoemBubble";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#40494F] text-white flex flex-col">
        <div className="flex-grow flex items-start justify-center pt-32">
          <div className="flex flex-row items-center gap-6">
            <CoccoCharacter />
            <PoemBubble poem="晴れ空に　汗ばむ午後の　東京風" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
