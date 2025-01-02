import { dataFooter } from "@/data";

export const ButtonFloat = ({ NoPhone = dataFooter.columns[2].extra?.phone }: { NoPhone?: string }): React.ReactNode => {
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${NoPhone}&text=Halo%20selamat%20datang%20di%20WhatsApp%20admin%20Fathforce`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "40px",
        left: "40px",
        backgroundColor: "#25d366",
        color: "white",
        zIndex: 1000,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <i className="uil uil-whatsapp" style={{ fontSize: "2rem" }}></i>
    </a>
  );
};
