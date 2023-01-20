import privateClient from '../client/private.client';
import publicClient from '../client/public.client';

const userEnpoints = {
    signin: "user/signin",
    signup: "user/signup",
    getInfo: "user/info",
    passwordUpdate: "user/update-password"
};

const userApi = {
    signin: async ({ username, password }) => {
        try {
            const response = await publicClient.post(
                userEnpoints.signin,
                { username, password }
            );
            return { response }
        } catch (err) {
            return { err };
        }
    },
    signup: async ({ username, password, confirmPassword, displayName }) => {
        try {
            const response = await publicClient.post(
                userEnpoints.signup,
                { username, password, confirmPassword, displayName }
            );
            return { response }
        } catch (err) {
            return { err };
        }
    },
    getInfo: async () => {
        try {
            const response = await privateClient.get(userEnpoints.getInfo);
            return { response };
        } catch (err) {
            return { err };
        }
    },
    passwordUpdate: async ({ password, newPassword, confirmNewPassword }) => {
        try {
            const response = privateClient.put(
                userEnpoints.passwordUpdate,
                { password, newPassword, confirmNewPassword }
            );
            return { response };
        } catch (err) {
            return { err };
        }
    },
}

export default userApi;