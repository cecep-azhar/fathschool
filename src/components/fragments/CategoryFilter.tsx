interface CategoryFilterProps {
  categories: Array<{ id: string; name: string; }>;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
      <div className="d-flex flex-wrap gap-2 mt-12">
        {categories.map((category) => (
          <button className={`${selectedCategory === category.id ? 'btn-blue' : 'btn-soft-blue'} btn rounded-pill`} key={category.id} onClick={() => onCategoryChange(category.id)}>
            {category.name}
          </button>
        ))}
      </div>
  );
}