'use client'
import { useAppState } from '@/lib/utils/app-state'
import HistoryContainer from './history-container'

export function Sidebar() {
  const { userId } = useAppState()
  return (
    <div className="h-screen p-2 fixed top-0 right-0 flex-col justify-center pb-24 hidden sm:flex">
      <HistoryContainer location="sidebar" userId={userId}/>
    </div>
  )
}
