export const useBase64 = async ({
  bytes,
}: {
  bytes: Blob | Uint8Array | ArrayBuffer;
}) => {
  const base64 = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    // @ts-ignore
    reader.readAsDataURL(bytes);
    reader.onload = () => resolve(console.log(reader.result));
    reader.onerror = (error) => reject(error);
  });
  return {
    base64,
  };
};
