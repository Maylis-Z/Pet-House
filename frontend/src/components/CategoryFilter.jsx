function CategoryFilter({ options, selected, onSelect, className = "" }) {
  return (
    <section className={`categories ${className}`}>
      {options.map((opt) => (
        <button
          key={opt.id}
          className={`category-btn ${selected === opt.id ? "active" : ""}`}
          onClick={() => onSelect(opt.id)}
        >
          {opt.icon} {opt.label}
        </button>
      ))}
    </section>
  );
}

export default CategoryFilter;