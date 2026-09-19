import { profilePhotoMaxSize } from "../constants/patientProfile";

export function isProfilePhotoSizeValid(file?: File | null) {
  return !file || file.size <= profilePhotoMaxSize;
}

export function isProfilePhotoTypeValid(file?: File | null) {
  return !file || file.type.startsWith("image/");
}

export function getPatientPhotoPath(patientId: string, fileName: string) {
  const extension = fileName.split(".").pop()?.toLowerCase() || "jpg";
  return `${patientId}/${crypto.randomUUID()}.${extension}`;
}
