import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

export function Reviews() {
  const featurableWidgetId = process.env.NEXT_PUBLIC_REVIEWS_API_KEY;

  if (!featurableWidgetId) {
    return null; // or render a fallback UI
  }

  return (
    <ReactGoogleReviews layout="carousel" featurableId={featurableWidgetId} />
  );
}
