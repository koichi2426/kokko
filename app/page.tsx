import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center min-h-screen bg-[#40494F] text-white">
        <h1 className="text-3xl font-bold">Hello, world!</h1>
      </main>
      <Footer />
    </>
  );
}
