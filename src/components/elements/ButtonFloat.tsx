'use client';

import { dataDefault } from "@/data";
import { useGetLandingPage } from "@/hooks/GET/useGetLandingPage";

export const ButtonFloat = ({ linkNoHp = dataDefault.data.sections.data.footer_section_3.data[2].link }: { linkNoHp?: string }): React.ReactNode => {
  const { dataResponse, isSuccess, isLoading } = useGetLandingPage()
  const LinkHpResponse = isSuccess && !isLoading ? dataResponse?.sections.data.footer_section_3.data[2].link : linkNoHp;

  return (
    <a href={LinkHpResponse}
      target="_blank"
      rel="noopener noreferrer"
      className="d-none d-lg-flex"
      style={{
        position: "fixed",
        bottom: "40px",
        left: "40px",
        backgroundColor: "#25d366",
        color: "white",
        zIndex: 1000,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <i className="uil uil-whatsapp" style={{ fontSize: "1.5rem" }}></i>
    </a>
  );
};
