import { usePathname } from "next/navigation";

export const ButtonShare: React.FC<{ title: string }> = ({ title }) => {
  const pathname = usePathname(); 
  const url = `http://localhost:3000/blogs/detail/${pathname}`;

  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, "_blank");
  };

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    window.open(twitterUrl, "_blank");
  };

  const shareToWhatsApp = () => {
    const message = `Check out this article: ${title}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };


  return (
    <div className="mb-0 mb-md-2">
      <div className="dropdown share-dropdown btn-group">
        <button className="btn btn-sm btn-red rounded-pill btn-icon btn-icon-start dropdown-toggle mb-0 me-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="uil uil-share-alt"></i> Share
        </button>

        <div className="dropdown-menu">
          <button onClick={shareToTwitter} className="dropdown-item">
            <i className="uil uil-twitter"></i>Twitter
          </button>
          <button onClick={shareToFacebook} className="dropdown-item">
            <i className="uil uil-facebook-f"></i>Facebook
          </button>
          <button onClick={shareToWhatsApp} className="dropdown-item">
            <i className="uil uil-whatsapp"></i>WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};
