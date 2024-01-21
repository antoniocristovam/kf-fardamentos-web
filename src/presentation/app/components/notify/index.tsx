import { toast } from 'react-toastify';

export const notifySuccess = (title: string) =>
  toast.success(title, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

export const notifyError = (title: string) =>
  toast.error(title || "Algo de errado aconteceu, tente novamente", {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
