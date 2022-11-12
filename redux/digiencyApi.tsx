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

export const digiencyApi = createApi({
  reducerPath: 'digiencyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
  endpoints: build => ({
    getTeamMembers: build.query<ITeamMembers[], void>({
      query: () => `teamMembers`,
    }),
    getOurWorks: build.query<IOurWorks[], void>({
      query: () => `ourWorks`,
    }),
    getClientsFeedback: build.query<IClientsFeedback[], void>({
      query: () => `clientsFeedback`,
    }),
    getOurCaseStudyImages: build.query<IOurCaseStudy[], void>({
      query: () => `ourCaseStudy`,
    }),
  }),
})

export const {
  useGetTeamMembersQuery,
  useGetOurWorksQuery,
  useGetClientsFeedbackQuery,
  useGetOurCaseStudyImagesQuery,
} = digiencyApi
