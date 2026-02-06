import { SearchModal } from "./components/modal";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

function App() {
  return (
    <>
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />
      <main className="flex-1 w-full max-w-full mx-auto py-10 px-6"></main>
      <Footer />
    </div>
    <SearchModal />
    </>
  );
}

export default App;
