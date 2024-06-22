import { useState } from "react";
import useShowToast from "./useShowToast";

const usePreviewImg = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const showToast = useShowToast();
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImgUrl(reader.result);
      };

      reader.readAsDataURL(file);
    } else if (file && file.type.startsWith("video/")) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setVideoUrl(reader.result);
      };

      console.log(file);

      reader.readAsDataURL(file);
    } else {
      showToast("Invalid file type", " Please select valid file", "error");
      setImgUrl(null);
    }
  };
  return { handleImageChange, imgUrl, setImgUrl, videoUrl, setVideoUrl };
};

export default usePreviewImg;
