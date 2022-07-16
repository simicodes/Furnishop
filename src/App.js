import React from "react";
// import components
import Hero from "./components/Hero";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Header />
      <Hero />
    </div>
  );
};

export default App;
