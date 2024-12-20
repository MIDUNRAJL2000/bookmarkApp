

import { FC, ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-slate-200 p-10  rounded-md flex flex-col items-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
