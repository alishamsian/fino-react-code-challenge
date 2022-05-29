/*
  Goto https://reqres.in/ for documentation on this api.
  
  If you haven't used axios, documentation here: https://github.com/axios/axios
  OR use any method / library you're comfortable with to perform the request(s).

  **** These stubs are just provided as a convienece, ****
  **** feel free to change whatever you like to accomplish the goal. ****
*/

import axios from "axios";

const baseUrl = "https://reqres.in/";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/users`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Bonus:
export const deleteUser = async(id) => {
  try {
    const response = await axios.delete(`${baseUrl}api/users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
