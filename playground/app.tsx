import React from 'react';
import { SearchModal } from "./components/modal";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

function App() {
  return (
    <>
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />
      <main className="flex-1 w-full py-10 px-6 max-w-[1520px] mx-auto">
        <div className='max-w-[1000px] m-full'>
        <h1 className="text-3xl font-bold mb-4">Insytful AI Search Modal - Playground</h1>
        <p className="text-lg mb-6">This is a playground environment for testing the Insytful AI Search Modal Web Component. You can interact with the search modal by clicking the search icon above. The modal is built as a custom Web Component that uses React and Shadow DOM for style isolation. It supports both AI-powered search and a classic search experience. Try it out and see how it works! For more details, check out the documentation and source code on GitHub. </p>
        </div>
      </main>
      <Footer />
    </div>
    <SearchModal />
    </>
  );
}

export default App;
