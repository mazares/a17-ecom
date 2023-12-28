import "./Card.css";

export default function Card({ numero }) {
  return (
    <div className="card">
      <p>{numero}</p>
    </div>
  );
}
