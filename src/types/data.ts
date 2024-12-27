export interface TypeFooterData {
  name: string;
  headline: string;
  desc: string;
  button: {
    text: string;
    link: string;
  };
  columns: {
    title: string;
    items: { name: string; link: string }[];
    extra?: { email: string; phone: string };
  }[];
  sosmed: {
    name: string,
    link: string
    icon: string
  }[]
}
