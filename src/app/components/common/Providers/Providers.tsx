'use client';
import { SessionProvider } from 'next-auth/react';
import NextTopLoader from 'nextjs-toploader';
import React from 'react';

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
      <NextTopLoader color="#000000" />
    </>
  );
};
