import { SITENAME } from "@/constants/global.constants";

//Endpoint call api backend
export const endpoint = process.env.VUE_APP_ENDPOINT_BACKEND
  ? process.env.VUE_APP_ENDPOINT_BACKEND
  : "";

// Django
export const endpointDjango = `https://${SITENAME}/`;

export const timeout = 10000;

/** ************ @Access_path_main **************/
export const accessPathMain = {
  getMenuDjango:
    "dining/get_menus/C85D96BADD3342A090CBC7A6CF8CD85A/-8133951324902848681/0007992349/json/1/",
};
