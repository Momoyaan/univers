export const API_BASE_URL = "http://localhost:8080"; // Backend API URL

export const userSignIn = async (email: string, password: string) => {
	let error = null;

	const res = await fetch(`${API_BASE_URL}/users/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		//credentials: "include",
		body: JSON.stringify({
			email: email,
			password: password,
		}),
	})
		.then(async (res) => {
			if (!res.ok) throw await res.json();
			localStorage.setItem("token", await res.json().then((data) => data.data));
			return res.json();
		})
		.catch((err) => {
			console.log(err);

			error = err.detail;
			return null;
		});

	if (error) {
		throw error;
	}

	return res;
};

export const userSignUp = async (
	names: string,
	email: string,
	password: string,
	// profile_image_url: string,
) => {
	let error = null;

	const res = await fetch(`${API_BASE_URL}/users/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		//credentials: "include",
		body: JSON.stringify({
			names: names,
			email: email,
			password: password,
			// profile_image_url: profile_image_url,
		}),
	})
		.then(async (res) => {
			if (!res.ok) throw await res.json();
			return res.json();
		})
		.catch((err) => {
			console.log(err);
			error = err.detail;
			return null;
		});

	if (error) {
		throw error;
	}

	return res;
};

export const userSignOut = async () => {
	let error = null;

	const res = await fetch(`${API_BASE_URL}/users/logout`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include",
	})
		.then(async (res) => {
			if (!res.ok) throw await res.json();
			localStorage.clear();
			window.location.reload();
			return res;
		})
		.catch((err) => {
			console.log(err);
			error = err.detail;
			return null;
		});

	if (error) {
		throw error;
	}
	return res;
};

export const getSessionUser = async () => {
	let error = null;

	const res = await fetch(`${API_BASE_URL}/validateSession`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include",
	})
		.then(async (res) => {
			if (!res.ok) throw await res.json();
			return res.json();
		})
		.catch((err) => {
			console.log(err);
			error = err.detail;
			return null;
		});

	if (error) {
		throw error;
	}

	return res;
};

export const verifyEmail = async (email: string) => {
	let error = null;

	const res = await fetch(`${API_BASE_URL}/users/resend-verification`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: email,
		}),
	})
		.then(async (res) => {
			if (!res.ok) throw await res.json();
			return res.json();
		})
		.catch((err) => {
			console.log(err);
			error = err.detail;
			return null;
		});

	if (error) {
		throw error;
	}

	return res;
};

export const verifyOTP = async (email: string, code: string) => {
	let error = null;

	const res = await fetch(`${API_BASE_URL}/users/verify-email`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: email,
			code: code,
		}),
	})
		.then(async (res) => {
			if (!res.ok) throw await res.json();
			return res.json();
		})
		.catch((err) => {
			console.log(err);
			error = err.detail;
			return null;
		});

	if (error) {
		throw error;
	}

	return res;
};
