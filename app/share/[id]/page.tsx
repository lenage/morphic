import { notFound } from 'next/navigation'
import { Chat } from '@/components/chat'
import { getSharedChat } from '@/lib/actions/chat'
import { AI } from '@/app/actions'
import { useAppState } from '@/lib/utils/app-state'

export interface SharePageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: SharePageProps) {
  const chat = await getSharedChat(params.id)

  if (!chat || !chat.sharePath) {
    return notFound()
  }

  return {
    title: chat?.title.toString().slice(0, 50) || 'Search'
  }
}

export default async function SharePage({ params }: SharePageProps) {
  const chat = await getSharedChat(params.id)
  const { userId } = useAppState()

  if (!chat || !chat.sharePath) {
    notFound()
  }

  return (
    <AI
      initialAIState={{
        chatId: chat.id,
        messages: chat.messages,
        isSharePage: true,
        uid: userId
      }}
    >
      <Chat id={params.id} />
    </AI>
  )
}
