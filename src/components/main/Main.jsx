import "./Main.css";

import Card from "../card/Card";

export default function Main(params) {
  const numeros = [];

  for (let i = 1; i <= 100; i++) {
    numeros.push(i);
  }

  return (
    <main className="main">
      {numeros.map((numero) => (
        <Card numero={numero} key={numero} />
      ))}
    </main>
  );
}
