import React from "react";
import Navbar from "./Navbar";
import { Stack, Heading } from "@chakra-ui/react";
import Pokemon from "./Pokemon";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfoPokemon from "./InfoPokemon";

function App() {
  return (
    <Router>
      <Stack className="App">
        <Stack>
          <Navbar />
        </Stack>
      </Stack>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<InfoPokemon />} />
        <Route path="/info" element={<InfoPokemon />} />
        <Route path="/info:id" element={<InfoPokemon />} />
        <Route path="/episodes" />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <Stack>
      <Pokemon />
    </Stack>
  );
}

export default App;
