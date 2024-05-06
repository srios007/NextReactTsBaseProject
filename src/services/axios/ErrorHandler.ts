
interface ErrorResponse {
  status?: number;
  message?: string;
}

export const ErrorHandler = ({ message, status }: ErrorResponse) => {
  let errorMessage: string;

  switch (status) {
    case 400:
      errorMessage = "Bad Request";
      break;
    case 401:
      errorMessage = "Unauthorized";
      break;
    case 404:
      errorMessage = "Not Found";
      break;
    case 405:
      errorMessage = "Method Not Allowed";
      break;
    case 500:
      errorMessage = "Internal Server Error";
      break;
    default:
      errorMessage = message || "An error occurred";
      break;
  }

  return errorMessage;
};
