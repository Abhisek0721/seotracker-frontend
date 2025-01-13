import { apiSlice } from "../api/apiSlice";


export const domainTrackApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        addDomainName: build.mutation({
            query: (body) => ({
                url: "/api/v1/domain-track/add-domain",
                method: "POST",
                body,
            }),
        }),

        getDomainList: build.query({
            query: ({ limit, pageNumber }) => 
                `/api/v1/domain-track/domain-list?limit=${limit}&pageNumber=${pageNumber}`,
        }),
    }),
})

export const {
    useAddDomainNameMutation,
    useGetDomainListQuery
} = domainTrackApi;