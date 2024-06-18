import { Chat } from '@/components/chat'
import { generateId } from 'ai'
import { AI } from '@/app/actions'
import { redirect } from 'next/navigation'
import { useAppState } from '@/lib/utils/app-state'

export const maxDuration = 60

export default function Page({
  searchParams
}: {
  searchParams: { q: string }
}) {
  if (!searchParams.q) {
    redirect('/')
  }
  const id = generateId()
  const { userId } = useAppState()

  return (
    <AI initialAIState={{ chatId: id, messages: [], uid: userId}}>
      <Chat id={id} query={searchParams.q} />
    </AI>
  )
}
