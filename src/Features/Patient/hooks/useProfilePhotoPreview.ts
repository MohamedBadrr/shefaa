import { useEffect, useState } from "react";

export function useProfilePhotoPreview(file: File | null) {
  const [preview, setPreview] = useState<{ file: File; url: string } | null>(null);

  useEffect(() => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setPreview({ file, url: String(reader.result) });
    reader.readAsDataURL(file);

    return () => {
      reader.onload = null;
      if (reader.readyState === FileReader.LOADING) reader.abort();
    };
  }, [file]);

  return preview?.file === file ? preview.url : "";
}
