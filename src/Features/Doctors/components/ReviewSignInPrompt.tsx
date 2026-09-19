import { Link } from "react-router";
import { Button } from "@/components/ui/button";

const ReviewSignInPrompt = () => (
  <div className="rounded-xl border border-primary-100 bg-primary-50 p-5">
    <p className="text-sm leading-6 text-neutral-600">
      Sign in as a patient to share your experience.
    </p>
    <Button nativeButton={false} variant="gradient" size="sm" className="mt-3" render={<Link to="/login" />}>
      Sign in to review
    </Button>
  </div>
);

export default ReviewSignInPrompt;
