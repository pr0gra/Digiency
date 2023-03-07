import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { HOST } from '../src/constants/endpoints/endpoints'
import { IOurBlog } from './digiencyApi'
import { RootState } from './store'

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

interface IPagination {
  first: string
  last: string
  next: string
}

interface articlesState {
  list: IOurBlog[]
  pagination: any
  loading: boolean
  error: null | string
}

interface ResponseArgs {
  currentPage: number
  searchText: string
}

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async function (args: ResponseArgs) {
    const { currentPage, searchText } = args
    const response = await fetch(
      `${HOST}/blog_posts?title_like=${searchText}&_limit=5&_page=${currentPage}`,
    )
    const data = await response.json()

    if (!response.ok) {
      throw new Error('error')
    }

    if (response.headers.get('Link')) {
      return {
        articles: [...data],
        pagination: { ...parseLinkHeader(response.headers.get('Link')) },
      }
    }

    return {
      articles: [...data],
      pagination: {},
    }
  },
)

const initialState: articlesState = {
  list: [],
  pagination: {
    first: '',
    last: '',
    next: '',
  },
  loading: false,
  error: null,
}

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
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
        console.log(action.payload.pagination)
      })
  },
})

export default articleSlice.reducer
