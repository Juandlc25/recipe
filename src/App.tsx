import { FC } from "react";
import "./App.scss";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import { createContext } from "react";

interface ContextProps {
  apiKey: string;
}

export const Context = createContext({} as ContextProps);

const App: FC = () => {
  const contextProps = {
    apiKey: "2a75d6e2bf0548a09d5cd472df8459c7",
  };
  return (
    <Context.Provider value={{ ...contextProps }}>
      <div className="app">
        <Header />
        <Banner />
        <Recipes />
        <Footer />
      </div>
    </Context.Provider>
  );
};

export default App;
