import { AxiosError } from "axios";

// Axios error

export const getAxiosErrorMessage = (axiosError: AxiosError) => {
  if (axiosError.response?.data.message) {
    return axiosError.response?.data.message;
  }
  return axiosError.message;
};

export const formatNumber = (value: number, fractionDigits = 2) => {
  return value.toLocaleString("en", {
    style: "decimal",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
};
