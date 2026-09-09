import type { FunctionComponent } from "react";
import Loading from "@/components/Shared/Loading";

type AsyncStateProps = {
  isLoading: boolean;
  isError: boolean;
  loadingLabel?: string;
  errorMessage?: string;
};

const WithLoadingAndError = <Props extends object>(Component: FunctionComponent<Props>) =>
  ({
    isLoading,
    isError,
    loadingLabel = "Loading",
    errorMessage = "Something went wrong. Please try again later.",
    ...componentProps
  }: Props & AsyncStateProps) => {
    if (isLoading) return <Loading label={loadingLabel} />;

    if (isError) {
      return (
        <p className="py-20 text-center text-sm font-semibold text-red-500">
          {errorMessage}
        </p>
      );
    }

    return Component(componentProps as Props);
  };

export default WithLoadingAndError;
