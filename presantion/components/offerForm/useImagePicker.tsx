import * as ImagePicker from "expo-image-picker";
import { useBase64 } from "./useBase64";
export const useImagePicker = () => {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      const img = await fetch(result.uri);
      const bytes: Blob | Uint8Array | ArrayBuffer = await img.blob();
    }
  };
  return {
    pickImage,
  };
};
