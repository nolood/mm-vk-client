import { type ReactNode, type FC } from "react";

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default AuthProvider;
