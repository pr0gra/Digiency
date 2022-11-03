import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface teamMembersLinks {
  facebook: string
  instagram: string
  twitter: string
  skype: string
}

export interface teamMembers {
  id: number
  avatar: string
  name: string
  position: string
  links: teamMembersLinks
}

export interface ourWorks {
  id: number
  projectType: string
  img: string
}

export interface clientsFeedback {
  id: number
  avatar: string
  name: string
  position: string
  comment: string
}

export const digiencyApi = createApi({
  reducerPath: 'digiencyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
  endpoints: build => ({
    getTeamMembers: build.query<teamMembers[], void>({
      query: () => `teamMembers`,
    }),
    getOurWorks: build.query<ourWorks[], void>({
      query: () => `ourWorks`,
    }),
    getClientsFeedback: build.query<clientsFeedback[], void>({
      query: () => `clientsFeedback`,
    }),
  }),
})

export const {
  useGetTeamMembersQuery,
  useGetOurWorksQuery,
  useGetClientsFeedbackQuery,
} = digiencyApi
