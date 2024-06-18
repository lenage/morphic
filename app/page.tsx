import { Chat } from '@/components/chat'
import { generateId } from 'ai'
import { AI } from './actions'
import { useAppState } from '@/lib/utils/app-state'

export const maxDuration = 60

export default function Page() {
  const id = generateId()
  const {userId} = useAppState()
  return (
    <AI initialAIState={{ chatId: id, messages: [], uid: userId}}>
      <Chat id={id} />
    </AI>
  )
}
