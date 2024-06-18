import { notFound, redirect } from 'next/navigation'
import { Chat } from '@/components/chat'
import { getChat } from '@/lib/actions/chat'
import { AI } from '@/app/actions'
import { useAppState } from '@/lib/utils/app-state'

export const maxDuration = 60

export interface SearchPageProps {
  params: {
    id: string
  }
}

export default async function SearchPage({ params }: SearchPageProps) {
  const {userId} = useAppState()
  const chat = await getChat(params.id, userId)

  if (!chat) {
    redirect('/')
  }

  if (chat?.userId !== userId) {
    notFound()
  }

  return (
    <AI
      initialAIState={{
        chatId: chat.id,
        messages: chat.messages,
        uid: userId
      }}
    >
      <Chat id={params.id} />
    </AI>
  )
}
