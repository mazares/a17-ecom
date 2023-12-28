import "./App.css";

import Header from "./components/header/Header";

import Nav from "./components/nav/Nav";

import Main from "./components/main/Main";

import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="app">
      <Header />

      <Nav />

      <Main />

      <Footer />
    </div>
  );
}
