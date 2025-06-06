import Swal from "sweetalert2";

export const sweetSuccess = (message) => {
  Swal.fire({
    icon: "success",
    title: `${message}`,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const sweetError = (message) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `${message}`,
  });
};
