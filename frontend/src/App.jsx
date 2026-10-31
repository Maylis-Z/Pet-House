import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import products from "./data/products";

const animalOptions = [
  { id: "all", label: "All pets", icon: "🐾" },
  { id: "dog", label: "Dogs", icon: "🐶" },
  { id: "cat", label: "Cats", icon: "🐱" },
  { id: "bird", label: "Birds", icon: "🐦" },
  { id: "rabbit", label: "Rabbits", icon: "🐰" },
  { id: "fish", label: "Fish", icon: "🐟" },
  { id: "small", label: "Others", icon: "🐹" },
];

const typeOptions = [
  { id: "all", label: "All types", icon: "✨" },
  { id: "food", label: "Food", icon: "🍖" },
  { id: "toys", label: "Toys", icon: "🧸" },
  { id: "accessory", label: "Accessories", icon: "🎀" },
  { id: "equipment", label: "Equipment", icon: "🏠" },
  { id: "care", label: "Care & health", icon: "💊" },
];
function App() {
  const [selectedAnimal, setSelectedAnimal] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) => {
    const matchAnimal = selectedAnimal === "all" || p.animal === selectedAnimal;
    const matchType = selectedType === "all" || p.type === selectedType;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchAnimal && matchType && matchSearch;
  });

  return (
    <>
      <Navbar />
      <Hero />

      <div className="toolbar">
        <div className="search">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search food, toys, cages..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <CategoryFilter
          options={animalOptions}
          selected={selectedAnimal}
          onSelect={setSelectedAnimal}
        />

        <CategoryFilter
          className="types"
          options={typeOptions}
          selected={selectedType}
          onSelect={setSelectedType}
        />
      </div>

      <main id="products" className="products">
        <h2 className="section-title">Our products</h2>
        <ProductList products={filteredProducts} />
      </main>
    </>
  );
}

export default App;