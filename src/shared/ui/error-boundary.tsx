import { type FC } from "react";
import { useRouteError } from "react-router-dom";

const ErrorBoundary: FC = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      Произошла непредвиденная ошибка, попробуйте перезагрузить приложение и
      свяжитесь с разработчиками
    </div>
  );
};

export default ErrorBoundary;
