export const isAuthenticated = !!localStorage.getItem("token");

export type User = {
	//id: string
	name: string;
	email: string;
	//profile_image_url: string
};
