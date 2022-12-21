import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { HOST } from '../src/constants/endpoints/endpoints'
import { IOurBlog } from './digiencyApi'

function parseLinkHeader(linkHeader: any) {
  const linkHeadersArray = linkHeader
    .split(', ')
    .map((header: any) => header.split('; '))
  const linkHeadersMap = linkHeadersArray.map((header: any) => {
    const thisHeaderRel = header[1].replace(/"/g, '').replace('rel=', '')
    const thisHeaderUrl = header[0].slice(1, -1)
    return [thisHeaderRel, thisHeaderUrl]
  })
  return Object.fromEntries(linkHeadersMap)
}

interface articlesState {
  list: IOurBlog[]
  pagination: object
  loading: boolean
  error: null | string
}

interface IFetchArticles {
  list: IOurBlog[]
  pagination: any
}

type Response = IFetchArticles | IOurBlog[]

export const fetchArticles = createAsyncThunk<
  Response,
  number,
  { rejectValue: string }
>('articles/fetchArticles', async function (currentPage, { rejectWithValue }) {
  const response = await fetch(
    `${HOST}/blog_posts?_limit=5&_page=${currentPage}`,
  )
  const data = await response.json()

  if (!response.ok) {
    return rejectWithValue('server Error')
  }

  if (response.headers.get('Link')) {
    return {
      articles: [...data],
      pagination: { ...parseLinkHeader(response.headers.get('Link')) },
    }
  }
  return response
})

const initialState: articlesState = {
  list: [],
  pagination: {},
  loading: false,
  error: null,
}

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    // addArticle(state, action) {
    //   state.articles.push()
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchArticles.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload.articles
        state.pagination = action.payload.pagination
      })
  },
})

// export const { addArticle } = articleSlice.actions
export default articleSlice.reducer
