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
        // 1. ユーザーの位置情報を取得
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // 2. OpenWeatherMap API から現在の天気情報を取得
        const weatherRes = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric&lang=ja`
        );

        const weatherData = await weatherRes.json();

        const environment = {
          location: weatherData.name,
          temperature: weatherData.main.temp,
          humidity: weatherData.main.humidity,
          weather: weatherData.weather[0].description,
          time: new Date().toISOString(),
        };

        // 3. 詩生成APIへPOST
        const res = await fetch("/backend/infrastructure/api/GeneratePoem", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(environment),
        });

        const data = await res.json();
        if (data.text) {
          setPoem(data.text);
        } else {
          setPoem("詩の取得に失敗しました");
        }
      } catch (error) {
        console.error(error);
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
