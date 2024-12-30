import { TypeTestimonials } from "@/types/data";

export const CardTestimonial: React.FC<{data: TypeTestimonials["defaultData"][number]}> = ({data}) => {
  return (
    <div className="item col-md-6 col-xl-4">
      <div className={`card shadow-none rounded-xl ${data.color}`}>
        <div className="card-body">
          <blockquote className="icon mb-0">
            <p>“{data.message}”</p>
            <div className="blockquote-details">
              <div className="info ps-0">
                <h5 className="mb-1">{data.name}</h5>
                <p className="mb-0">{data.position}</p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
};
