import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

export function Badge() {
  const featurableWidgetId = process.env.NEXT_PUBLIC_REVIEWS_API_KEY;

  if (!featurableWidgetId) {
    return null;
  }

  return (
    <ReactGoogleReviews layout="badge" featurableId={featurableWidgetId} />
  );
}
