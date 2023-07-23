import { ToastContainer, TypeOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DisplayUtil = {
  showSuccess(title: string) {
    DisplayUtil.show("success", title);
  },
  showError(title: string) {
    DisplayUtil.show("success", title);
  },
  show(type: TypeOptions, title: string) {
    toast(title, {
      type,
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  },
};

export { ToastContainer };
