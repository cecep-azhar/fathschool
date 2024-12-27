export interface TypeBase {
  name: string;
  headline: string;
  desc: string;
}

export interface TypeDesignDoodle {
  name: string;
  src: string;
  style?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}


// * TYPE FOOTER 
export interface TypeFooter extends TypeBase {
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
    name: string;
    link: string;
    icon: string;
  }[];
}

// * TYPE TESTIMONIAL
export interface TypeTestimonials extends TypeBase {
  designDoodle: TypeDesignDoodle[]
  defaultData: {
    name: string;
    position: string;
    message: string;
    color: string;
  }[];
}

// * TYPE BENEFITS
export interface TypeBenefits extends TypeBase{
  designDoodle: TypeDesignDoodle[],
  defaultData: {
    name: string;
    title: string;
    desc: string;
    icon: {
      src: string;
      color: string;
    }
  }[]
} 
