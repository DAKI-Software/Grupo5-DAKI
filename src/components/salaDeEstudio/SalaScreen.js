import React from "react";
import Temporizador from "./Temporizador";
import "./Temporizador.css";

export default function SalaScreen() {
  return (
    <div>
      <h1 class="title">DAKI</h1>
      <hr />
      <Temporizador />
    </div>
  );
}
