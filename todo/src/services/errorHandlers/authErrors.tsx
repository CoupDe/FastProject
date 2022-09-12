import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query/fetchBaseQuery";
import { IAuthFormError, IError } from "../../typeinterfaces/types";

export function isFetchBaseQueryError(
  authError: unknown
): authError is FetchBaseQueryError {
  return (
    typeof authError === "object" && authError != null && "data" in authError
  );
}

// Все усиличя приложены для того что бы вытащить ошибку из API, по мне поджод очень кривой, но я не нашел другого решения
export const authErrorHandler = (authError: IAuthFormError) => {
  let errorDetail: IError = {};
  if (isFetchBaseQueryError(authError)) {
    errorDetail = authError.data as {};
    return errorDetail.detail![0] as string;
  }
};
