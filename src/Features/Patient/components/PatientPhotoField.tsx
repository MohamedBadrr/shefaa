import { useId } from "react";
import { ImagePlus } from "lucide-react";
import { useField } from "formik";
import { profilePhotoAccept } from "../constants/patientProfile";
import { useProfilePhotoPreview } from "../hooks/useProfilePhotoPreview";
import PatientPhotoPreview from "./PatientPhotoPreview";

const PatientPhotoField = ({ currentImage }: { currentImage: string | null }) => {
  const inputId = useId();
  const [field, meta, helpers] = useField<File | null>("imageFile");
  const filePreview = useProfilePhotoPreview(field.value);
  const preview = filePreview || currentImage || "";

  return (
    <div className="mb-4 flex flex-col gap-4 rounded-xl border border-primary-100 bg-primary-50/60 p-4 sm:flex-row sm:items-center">
      <PatientPhotoPreview image={preview} />
      <div>
        <label htmlFor={inputId}
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-extrabold text-primary-700 ring-1 ring-primary-200 transition hover:bg-primary-50">
          <ImagePlus size={17} /> Choose profile photo
        </label>
        <input
          id={inputId}
          name="imageFile"
          type="file"
          accept={profilePhotoAccept}
          className="sr-only"
          onChange={(event) => {
            helpers.setTouched(true, false);
            helpers.setValue(event.currentTarget.files?.[0] ?? null);
          }}
        />
        <p className="mt-2 text-xs text-neutral-500">PNG, JPG, or WebP up to 5 MB.</p>
        {meta.touched && meta.error && (
          <p className="mt-1 text-xs font-semibold text-red-500">{meta.error}</p>
        )}
      </div>
    </div>
  );
};

export default PatientPhotoField;
