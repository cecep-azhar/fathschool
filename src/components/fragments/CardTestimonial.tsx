import type { Testimonials } from "@/types/response";

export const CardTestimonial: React.FC<{ data: Testimonials["data"][0]}> = ({data}) => {
  const colorCard = [ "bg-pale-orange", "bg-pale-red", "bg-pale-blue", "bg-pale-purple", "bg-pale-green", "bg-pale-yellow",];
  // Hitung index warna berdasarkan data.id menggunakan modulus
  const colorIndex = (data.id as number)  % colorCard.length; 

  return (
    <div className="item col-md-6 col-xl-4">
      <div className={`card shadow-none rounded-xl ${colorCard[colorIndex]}`}>
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
