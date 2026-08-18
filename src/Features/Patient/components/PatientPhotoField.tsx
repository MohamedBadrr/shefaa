import { useEffect, useState } from "react";
import { Camera, ImagePlus } from "lucide-react";
import { useFormikContext } from "formik";
import type { DoctorProfileValues, PatientProfileValues } from "@/Features/Auth/@types";

type ProfileFormValues = PatientProfileValues | DoctorProfileValues;

const PatientPhotoField = ({ currentImage }: { currentImage: string | null }) => {
  const { values, setFieldValue, errors, touched } = useFormikContext<ProfileFormValues>();
  const [filePreview, setFilePreview] = useState("");

  useEffect(() => {
    if (!values.imageFile) return;

    const reader = new FileReader();
    reader.onload = () => setFilePreview(String(reader.result));
    reader.readAsDataURL(values.imageFile);
  }, [values.imageFile]);

  const preview = filePreview || currentImage || "";

  return (
    <div className="mb-4 flex flex-col gap-4 rounded-xl border border-primary-100 bg-primary-50/60 p-4 sm:flex-row sm:items-center">
      {preview ? <img src={preview} alt="Profile preview" className="size-20 rounded-full object-cover ring-4 ring-white" /> : <div className="flex size-20 items-center justify-center rounded-full bg-white text-primary-600 ring-4 ring-white"><Camera size={25} /></div>}
      <div>
        <label htmlFor="imageFile" className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-extrabold text-primary-700 ring-1 ring-primary-200 transition hover:bg-primary-50"><ImagePlus size={17} /> Choose profile photo</label>
        <input id="imageFile" name="imageFile" type="file" accept="image/png,image/jpeg,image/webp" className="sr-only" onChange={(event) => setFieldValue("imageFile", event.currentTarget.files?.[0] ?? null)} />
        <p className="mt-2 text-xs text-neutral-500">PNG, JPG, or WebP up to 5 MB.</p>
        {touched.imageFile && errors.imageFile && <p className="mt-1 text-xs font-semibold text-red-500">{String(errors.imageFile)}</p>}
      </div>
    </div>
  );
};

export default PatientPhotoField;
