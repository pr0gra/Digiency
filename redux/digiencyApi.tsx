import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const digiencyApi = createApi({
  reducerPath: 'digiencyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
  endpoints: build => ({
    getTeamMembers: build.query({
      query: () => `teamMembers`,
    }),
    getOurWorks: build.query({
      query: () => `ourWorks`,
    }),
  }),
})

export const { useGetTeamMembersQuery, useGetOurWorksQuery } = digiencyApi
