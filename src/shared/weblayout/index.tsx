import React from 'react';

type Props = {
  children: React.ReactNode;
};
function LayoutWrapper({ children }: Props) {
  return <div className="h-screen">{children}</div>;
}

export default LayoutWrapper;
