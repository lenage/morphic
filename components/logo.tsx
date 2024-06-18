'use client'

import { useEffect } from 'react'
import { cn } from '@/lib/utils'

interface LogoProps  {
  isShow?: boolean
}

export function EmojiLogo({ isShow }: LogoProps) {
  useEffect(() => {
    const logo = document.getElementById('emoji-logo') as HTMLElement
    const leftEye = document.getElementById('left-eye') as unknown as SVGCircleElement
    const rightEye = document.getElementById('right-eye') as unknown as SVGCircleElement
    let idleTimeout: NodeJS.Timeout

    const moveEyes = (event: MouseEvent) => {
      if (!logo || !leftEye || !rightEye) return

      const rect = logo.getBoundingClientRect()
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top

      const leftEyeX = 81 + ((mouseX - 80) / rect.width) * 5
      const leftEyeY = 11 + ((mouseY - 10) / rect.height) * 5
      const rightEyeX = 126 + ((mouseX - 125) / rect.width) * 5
      const rightEyeY = 11 + ((mouseY - 10) / rect.height) * 5

      leftEye.setAttribute('cx', leftEyeX.toString())
      leftEye.setAttribute('cy', leftEyeY.toString())
      rightEye.setAttribute('cx', rightEyeX.toString())
      rightEye.setAttribute('cy', rightEyeY.toString())

      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(jumpEmoji, 1500)
    }

    const jumpEmoji = () => {
      if (!logo) return;

      logo.style.transition = 'transform 0.5s'
      logo.style.transform = 'translateY(-30px)'
      setTimeout(() => {
        logo.style.transform = 'translateY(0)'
      }, 500);
    };

    document.addEventListener('mousemove', moveEyes)
    idleTimeout = setTimeout(jumpEmoji, 1500);

    return () => {
      document.removeEventListener('mousemove', moveEyes)
      clearTimeout(idleTimeout);
    };
  }, []);
  const showClassName = isShow ? '' : 'hidden'
  return (
    <div className={cn("fixed inset-x-0 bottom-10 flex flex-col items-center justify-center py-2 h-screen", showClassName)}>
      <svg
        viewBox="0 -10 200 200"
        xmlns="http://www.w3.org/2000/svg"
        id="emoji-logo"
        className="w-48 h-48"
      >
        <circle cx="80" cy="10" r="15" fill="#fff" stroke="#0a0a0a" strokeWidth="3"/>
        <circle cx="125" cy="10" r="15" fill="#fff" stroke="#0a0a0a" strokeWidth="3"/>
        <circle id="left-eye" cx="80" cy="10" r="5" fill="#0a0a0a" />
        <circle id="right-eye" cx="125" cy="10" r="5" fill="#0a0a0a" />
      </svg>
    </div>
  )
}
