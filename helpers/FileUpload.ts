import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../infstracture/firebase";

const mangeUpload = async (fileBlob: any) => {
  const imgName = "img-" + new Date().getTime();
  const storageRef = ref(storage, `files/${imgName}`);
  const metadata = {
    contentType: "image/jpeg",
  };
  const uploadTask = uploadBytesResumable(storageRef, fileBlob);
  uploadTask.on(
    "state_changed",
    (snapshot: { bytesTransferred: number; totalBytes: number }) => {
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
    },
    (error) => {},
    async () => {
      const logoUrl = await getDownloadURL(uploadTask.snapshot.ref);
    }
  );
};

export default mangeUpload;
