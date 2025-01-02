import { Blog } from "@/types/response";

export const Tags: React.FC<{ data: Blog["tags"] }> = ({ data }) => {
  return (
    <div>
      <ul className="list-unstyled tag-list mb-0">
        {data.map((tag) => (
          <li key={tag.id}>
            <span className="btn btn-soft-ash btn-sm rounded-pill mb-0">{tag.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
