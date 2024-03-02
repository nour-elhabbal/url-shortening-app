import Header from "./components/Header";
import Hero from "./components/Hero";
import LinkInput from "./components/LinkInput";
import { LinksContextProvider } from "./context/linksContext";

import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <LinksContextProvider>
        <LinkInput />
      </LinksContextProvider>
    </div>
  );
}

export default App;
