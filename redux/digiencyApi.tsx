import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface teamMembersLinks {
  facebook: string
  instagram: string
  twitter: string
  skype: string
}

export interface ITeamMembers {
  id: number
  avatar: string
  name: string
  position: string
  links: teamMembersLinks
}

export interface IOurWorks {
  id: number
  project_type: string
  img: string
}

export interface IClientsFeedback {
  id: number
  avatar: string
  name: string
  position: string
  comment: string
}

export interface IOurCaseStudy {
  id: number
  img: string
  project_type: string
}

export interface IOurTestimonial {
  id: number
  avatar: string
  name: string
  position: string
  comment: string
  rating: number
}

export interface IOurBlog {
  id: 1
  img: string
  title: string
  created_at: string
  author: string
  content: string
}

export const digiencyApi = createApi({
  reducerPath: 'digiencyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
  endpoints: build => ({
    getTeamMembers: build.query<ITeamMembers[], void>({
      query: () => `team_members`,
    }),
    getOurWorks: build.query<IOurWorks[], void>({
      query: () => `our_works`,
    }),
    getClientsFeedback: build.query<IClientsFeedback[], void>({
      query: () => `clients_feedback`,
    }),
    getOurCaseStudy: build.query<IOurCaseStudy[], void>({
      query: () => `our_case_study`,
    }),
    getOurTestimonial: build.query<IOurTestimonial[], void>({
      query: () => `our_testimonial`,
    }),
    getOurBlogs: build.query<IOurBlog[], number>({
      query: currentPage => {
        return {
          url: `blog_posts/?_limit=${5}&_page=${currentPage}`,
        }
      },
    }),
  }),
})

export const {
  useGetTeamMembersQuery,
  useGetOurWorksQuery,
  useGetClientsFeedbackQuery,
  useGetOurCaseStudyQuery,
  useGetOurTestimonialQuery,
  useGetOurBlogsQuery,
} = digiencyApi
