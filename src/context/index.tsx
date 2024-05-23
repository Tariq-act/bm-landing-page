// TabsContext.tsx
'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TabsContextType {
  openTab: number;
  setOpenTab: (index: number) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export const TabsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [openTab, setOpenTab] = useState<number>(1);

  return (
    <TabsContext.Provider value={{ openTab, setOpenTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabs = (): TabsContextType => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider');
  }
  return context;
};
