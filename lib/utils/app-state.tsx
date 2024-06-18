'use client'

import { createContext, useState, ReactNode, useContext, useEffect } from 'react'

const AppStateContext = createContext<
  | {
      isGenerating: boolean
      setIsGenerating: (value: boolean) => void
      userId?: string
      setUserId: (value: string | undefined) => void
    }
  | undefined
>(undefined)

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  const [isGenerating, setIsGenerating] = useState(false)
  const [userId, setUserId] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Generate a random user ID
    const generateRandomUserId = () => {
      const newUserId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      localStorage.setItem('userId', newUserId);
      setUserId(newUserId);
    };

    // Check if userId exists in localStorage
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      generateRandomUserId();
    }
  }, []);

  return (
    <AppStateContext.Provider value={{ isGenerating, setIsGenerating, userId, setUserId }}>
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  const context = useContext(AppStateContext)
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider')
  }
  return context
}
