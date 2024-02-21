import { randomNumber } from "./randomNUmber";

const base64ToImage = base64 => {
  if (base64) return `data:image/png;base64,${base64}`;
  else return "";
};

const saveImageToDisk = Image => {
  if (Image) {
    let gh = base64ToImage(Image);
    let a = document.createElement("a");
    a.href = gh;
    a.download = `IMG_${randomNumber()}.png`;

    a.click();
  }
};

export { base64ToImage, saveImageToDisk };
