import apiService from "../config/api";

export const AuthenticateService = (payload) => apiService.post(`/authenticate`,payload);
export const CreateUserService = (payload) => apiService.post(`/user`, payload);
export const UpdateUserService = (id, payload) => apiService.patch(`/user/${id}`, payload);
