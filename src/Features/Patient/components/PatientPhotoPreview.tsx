import { Camera } from "lucide-react";

const PatientPhotoPreview = ({ image }: { image: string }) => (
  image ? (
    <img src={image} alt="Profile preview" className="size-20 rounded-full object-cover ring-4 ring-white" />
  ) : (
    <div className="flex size-20 items-center justify-center rounded-full bg-white text-primary-600 ring-4 ring-white">
      <Camera size={25} />
    </div>
  )
);

export default PatientPhotoPreview;
