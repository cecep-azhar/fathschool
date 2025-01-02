
export const CategoryFilter = ({ categories, onCategoryChange }: { categories: string[], onCategoryChange: (category: string) => void }) => {
  return (
    <div>
      <select onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="All">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
