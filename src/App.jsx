import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos"} />} />
        <Route path="category/:category" element={<ItemListContainer greeting={"Bienvenidos"} />} />
        <Route path="/Item/id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
