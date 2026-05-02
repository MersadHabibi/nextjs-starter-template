import { API_LIST } from "@/services/api-config";

export const handleApiError = (
  error: unknown,
  shouldLog: boolean = false,
): string => {
  // Check if error is an object with response data
  if (
    error &&
    typeof error === "object" &&
    "response" in error &&
    error.response &&
    typeof error.response === "object" &&
    "data" in error.response
  ) {
    const errorData = error.response.data;

    // Log the error data if requested
    if (shouldLog) {
      console.log(errorData);
    }

    if (errorData && typeof errorData === "object") {
      // Try to extract message or details from error response
      if ("message" in errorData && typeof errorData.message === "string") {
        return errorData.message;
      } else if (
        "details" in errorData &&
        typeof errorData.details === "string"
      ) {
        return errorData.details;
      }
    }
  }

  // Fallback to generic error message
  return `${"مشکلی پیش آمده است"}`;
};

// Helper function to build full URL
export function buildApiUrl(path: string): string {
  return `${API_LIST.baseURL}${path}`;
}

// Helper function to handle query parameters
export function buildQueryString(
  params: Record<string, string | number | undefined>,
): string {
  return Object.entries(params)
    .filter(([_, value]) => value)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`,
    )
    .join("&");
}

// Helper function to build URL with query parameters
export function buildUrlWithQuery(
  path: string,
  params?: Record<string, string | number | undefined>,
): string {
  const queryString = params ? `?${buildQueryString(params)}` : "";
  return buildApiUrl(path) + queryString;
}

// Helper function for removing origin from URL
export function removeOrigin(url: string) {
  try {
    const urlObj = new URL(url);
    const path = urlObj.pathname + urlObj.search + urlObj.hash;
    return decodeURIComponent(path.startsWith("/") ? path.substring(1) : path);
  } catch (error) {
    console.error("Invalid URL:", error);
    return decodeURIComponent(url); // Return original URL if invalid
  }
}
