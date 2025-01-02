import { ImageProps, StaticImageData } from "next/image";

export interface ResponseAPI {
  status: boolean;
  message: string;
  data: {
    page_name: string;
    section_name: string;
    section_data: {
      title: string;
      description: string;
      data: []
    }
  };
}

export interface BaseResponse {
  status: boolean;
  message: string;
}

export interface ResponseTypeFaq extends ResponseAPI {
  id: number;
  question: string;
  answer: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ResponseTypeTestimonials {
  id: number;
  name: string;
  position: string;
  message: string;
  createdAt?: string;
  updatedAt?: string;
}

// -------------------------------------------------- //

export interface Blog {
  id: number;
  title: string;
  summary: string;
  image: string;
  slug: string;
  content: string;
  seo_title: string;
  seo_description: string;
  published_at: string;
  createdAt?: string;
  updatedAt?: string;
  blog_author: Author;
  blog_category: Category;
  tags: Tags[];
}

type Author = {
  id: number;
  name: string;
  email: string;
  photo: string;
  bio: string;
  github_handle: string;
  twitter_handle: string;
}

type Category = {
  id: number;
  name: string;
  slug: string;
  seo_title: null;
  description: null;
  seo_description: null;
  is_visible: boolean;
  createdAt?: string;
  updatedAt?: string;
}

type Tags = {
  id: number;
  name: string;
  slug: string;
  type: null;
}

// -------------------------------------------------- //


export type Hero = {
  title: string;
  description: string;
  device_image: string;
  playstore_image: string;
  playstore_link: string;
};

export type AppFeature = {
  title: string;
  description: string;
  data: {
    id: number | string;
    image: string;
    description: string;
  }[];
};

export type Tutorial = {
  title: string;
  description: string;
  device_tutorial: string;
  data: {
    number: string;
    title: string;
    description: string;
  }[];
};

export type Faq = {
  video: string;
  title: string;
  description: string;
  thumbnail_video: string;
  data: {
    question: string;
    answer: string;
  }[];
};

export type Benefits = {
  title: string;
  description: string;
  device_benefits: string;
  data: {
    id: number;
    icon: string;
    title: string;
    description: string;
  }[];
};

export type Testimonials = {
  title: string;
  description: string;
  data: {
    id: number;
    name?: string;
    position?: string;
    message?: string;
  }[];
};

type SectionsData = {
  hero: Hero;
  app_feature: AppFeature;
  tutorial: Tutorial;
  faq: Faq;
  benefits: Benefits;
  testimonials: Testimonials;
  banner: Banner;
  footer: MainFooter;
  // footer_section: footerSection[];
};

export type Banner = {
  headline: string;
  description: string;
  button_google_play: string;
  link_google_play: string;
  image: string;
}

export interface MainFooter {
  title: string;
  description: string;
  button_title: string;
  button_link: string;
  copyright: string;
  data: {
    id: number;
    link: string;
    icon: string;
  }[]
}

export interface footerSection {
  title: string;
  data: {
    id: number;
    item: string;
    link: string;
  }
}

type PageData = {
  page_name: string;
  sections: {
    data: SectionsData;
  };
};

export interface ResponseLandingPage {
  status: boolean;
  message: string;
  data: PageData;
};
