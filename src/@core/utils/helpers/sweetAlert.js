import Swal from "sweetalert2";
import router from "@/router";
import store from "@/store";

const alertSetTimer = (position, title, text = "", timer) => {
  Swal.fire({
    position: position || "center",
    icon: "success",
    title: title || "Success",
    text: text,
    showConfirmButton: false,
    timer: timer || 1500,
  });
};

const alertReloadPage = ({
  title = "Cannot connect with the server",
  text = "Please try again.",
  path = undefined,
} = {}) => {
  Swal.fire({
    title: `${title} 😨`,
    text: text,
    icon: "error",
    showCancelButton: false,
    confirmButtonColor: "#3dbbf5",
    confirmButtonText: "Reload",
    allowOutsideClick: false,
    allowEscapeKey: false,
  }).then((result) => {
    if (result.isConfirmed) {
      if (path) {
        if (![path].includes(store.state.route.path))
          router.push({ path }).catch(() => {});
      } else {
        router.go();
      }
    }
  });
};

const alertPopUp = ({
  icon = "error",
  title = "Cannot connect with the server",
  text = "fail!",
  path = undefined,
} = {}) => {
  Swal.fire({
    title: `${title}`,
    text: text,
    icon,
    showCancelButton: false,
    confirmButtonColor: "#3dbbf5",
    confirmButtonText: "OK",
    allowOutsideClick: false,
    allowEscapeKey: false,
  }).then((result) => {
    if (result.isConfirmed) {
      if (path) {
        if (![path].includes(store.state.route.path))
          router.push({ path }).catch(() => {});
      }
    }
  });
};

export { alertSetTimer, alertReloadPage, alertPopUp };
