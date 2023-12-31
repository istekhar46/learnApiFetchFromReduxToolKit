import { apiSlice } from "../slice/apiSlice";



const wetherApislice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchData: builder.mutation({
            query: ({city}) => ({
                url: `https://open-weather13.p.rapidapi.com/city/${city}`,
                headers: {
                    'X-RapidAPI-Key': '23eefba2acmsh03cdf53a5c28429p14ee8ajsn27f21874d4cc',
                    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
                  }
            }),
        }),
        fetchTodos: builder.mutation({
            query: ()=> ({
                url: 'https://dummyjson.com/todos', 
            })
        }),
        fetchProducts: builder.mutation({
            query: ()=> ({
                url: 'https://dummyjson.com/products?skip=10&limit=12', 
            })
        })
    })

});

export const { useFetchDataMutation, useFetchTodosMutation, useFetchProductsMutation } = wetherApislice