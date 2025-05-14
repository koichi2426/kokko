'use client';

import { useEffect, useState } from "react";
import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer/Footer";
import CoccoCharacter from "./features/home/components/CoccoCharacter/CoccoCharacter";
import PoemBubble from "./features/home/components/PoemBubble/PoemBubble";

export default function Home() {
  const [poem, setPoem] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPoem = async () => {
      try {
        const res = await fetch("/backend/infrastructure/api/GeneratePoem", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            location: "東京都",
            temperature: 26.3,
            humidity: 58,
            weather: "晴れ",
            time: new Date().toISOString(),
          }),
        });

        const data = await res.json();
        if (data.text) {
          setPoem(data.text);
        } else {
          setPoem("詩の取得に失敗しました");
        }
      } catch (error) {
        setPoem("詩の取得に失敗しました");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPoem();
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#40494F] text-white flex flex-col">
        <div className="flex-grow flex items-start justify-center pt-32">
          <div className="flex flex-row items-center gap-6">
            <CoccoCharacter isLoading={isLoading} />
            <PoemBubble poem={isLoading ? "考え中..." : poem} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
