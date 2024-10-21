import axiosInstance from "../axios-instance/index";

export const dental = {
  async searchnumbercard(model) {
    try {
      const response = await axiosInstance.post(
        `Information/searchnumbercard`,
        model
      );
      return response.data;
    } catch (error) {
      console.error("An error occurred while retrieving the customer:", error);
      throw error;
    }
  },
};
