import 'react-toastify/dist/ReactToastify.css';

import { toast } from 'react-toastify';

export const  toastSuccess = (message) =>
  {
    toast.success(`🦄 ${message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };
  export const  toastWarning = (message) =>
  {
    toast.warn(`🦄 ${message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };
  export const  toastError = (message) =>
  {
    toast.error(`🦄 ${message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };
