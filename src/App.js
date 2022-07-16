import React from "react";
// import components
import Hero from "./components/Hero";
import Header from "./components/Header";
import Features from "./components/Features";

const App = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Header />
      <Hero />
      <Features />
    </div>
  );
};

export default App;