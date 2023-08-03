import { apiSlice } from "../slice/apiSlice";



const wetherApislice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchData: builder.mutation({
            query: () => ({
                url: 'https://open-weather13.p.rapidapi.com/city/london',
                headers: {
                    'X-RapidAPI-Key': '50b74be4abmsh3612e33a5aa0344p120b8ejsn2a83698e62d4',
                    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
                }
            }),
        }),
    })

});

export const { useFetchDataMutation } = wetherApislice