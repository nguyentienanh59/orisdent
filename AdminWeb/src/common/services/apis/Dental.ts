import axiosInstance from '../axios-instance/index';

export const dental = {
  async createDental(Dental: Dental.IDentalModel): Promise<Response.IDefaultResponse> {
    try {
      const response = await axiosInstance.post('Information/createinformation', Dental);
      return response.data;
    } catch (error) {
      console.error('An error occurred while adding the account:', error);
      throw error;
    }
  },

  async updateDental(Dental: Dental.IDentalModel): Promise<Response.IDefaultResponse> {
    try {
      const response = await axiosInstance.post('Information/updateinformation', Dental);
      return response.data;
    } catch (error) {
      console.error('An error occurred while adding the account:', error);
      throw error;
    }
  },

  async getAllDental(model: Common.DataGridModel): Promise<Response.IDefaultResponse> {
    try {
      const response = await axiosInstance.post(`Information/getlistinformation`, model);
      return response.data;
    } catch (error) {
      console.error('An error occurred while retrieving the customer:', error);
      throw error;
    }
  },
  async getAllDentalById(model: Dental.IDentalModel): Promise<Response.IDefaultResponse> {
    try {
      const response = await axiosInstance.post(`Information/getinformationbyid`, model);
      return response.data;
    } catch (error) {
      console.error('An error occurred while retrieving the customer:', error);
      throw error;
    }
  },
  async deleteDental(model: Dental.IDentalModel): Promise<Response.IDefaultResponse> {
    try {
      const response = await axiosInstance.post(`Information/deleteinformation`, model);
      return response.data;
    } catch (error) {
      console.error('An error occurred while retrieving the customer:', error);
      throw error;
    }
  }
};
