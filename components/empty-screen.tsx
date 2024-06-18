import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'REITs 的不同类型有哪些，它们各自的风险和回报特征是什么？',
    message: 'REITs 的不同类型有哪些，它们各自的风险和回报特征是什么？'
  },
  {
    heading: '推动 NVIDIA 股价近期上涨的人工智能因素有哪些？',
    message: '推动 NVIDIA 股价近期上涨的人工智能因素有哪些?'
  },
  {
    heading: 'What is Apple Intelligence?',
    message: 'What is Apple Intelligence?'
  },
  {
    heading: '阅读公众号文章 https://mp.weixin.qq.com/s/pcwjWKMmA6Tvep3i9qwCeQ',
    message: '阅读文章 https://mp.weixin.qq.com/s/pcwjWKMmA6Tvep3i9qwCeQ 并总结文章要点'
  },
  {
    heading: 'Tesla vs 小米',
    message: 'Tesla vs 小米'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
