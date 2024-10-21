import axiosInstance from '../axios-instance/index';

export const userAdmin = {
  async login(UserData: User.IUserLogin): Promise<Response.IDefaultResponse> {
    try {
      const response = await axiosInstance.post('User/login', UserData);
      return response;
    } catch (error) {
      console.error('An error occurred while adding the account:', error);
      throw error;
    }
  }
};
