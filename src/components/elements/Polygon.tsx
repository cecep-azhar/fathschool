
export const Polygon: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = () => {
  return (
    <div className="overflow-hidden" style={{ zIndex: 1 }}>
      <div className="divider text-light mx-n2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <g fill="currentColor">
            <polygon points="1440 100 0 100 0 85 1440 0 1440 100" />
          </g>
        </svg>
      </div>
    </div>
  );
};
