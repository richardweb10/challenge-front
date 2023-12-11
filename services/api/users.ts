import { AxiosInstance } from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default function(api: AxiosInstance){
    return {
        getUsers:(params:any) => api.get("/api/global",{params:{...params, url:"/api/v1/users/counts"}}),
        getUserById:(params:any) => api.get("/api/global",{params:{...params, url:`/api/v1/users/${params.userId}`}}),
        getPostsByUser:(params:any) => api.get("/api/global",{params:{...params, url: `/api/v1/users/${params.userId}/posts` }}),
        getAlbumsByUser:(params:any) => api.get("/api/global",{params:{...params, url: `/api/v1/users/${params.userId}/albums` }}),
        updateUser:(params:any) => api.patch("/api/global-push",{...params, url: `/api/v1/users/${params.userId}`}),
        createUser:(params:any) => api.post("/api/global-push",{...params, url: `/api/v1/users/create`}),
    }
} 