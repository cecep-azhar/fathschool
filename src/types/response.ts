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

export interface ResponseTypeBlogs extends BaseResponse {
  data: Blog[];
}

export interface ResponseTypeBlogDetail extends BaseResponse {
  data: Blog;
}

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
  blog_author: {
    id: number;
    name: string;
    email: string;
    photo: string;
    bio: string;
    github_handle: string;
    twitter_handle: string;
  },
  blog_category: {
    id: number;
    name: string;
    slug: string;
    seo_title: string;
    description: string;
    is_visible: boolean;
    createdAt?: string;
    updatedAt?: string;
  }
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
    id?: number | string;
    image: string;
    description: string;
  }[];
};

type Tutorial = {
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
  data: {
    question: string;
    answer: string;
  }[];
};

export type Benefits = {
  title: string;
  description: string;
  device_benefits: string | StaticImageData;
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
    id?: number;
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
};

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
