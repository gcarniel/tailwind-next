'use client'

import { User } from 'lucide-react'
import { useFileInput } from './Root'
import { useMemo } from 'react'

interface ImagePreviewProps {}

export function ImagePreview(props: ImagePreviewProps) {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    if (!files.length) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (!previewURL) {
    return (
      <div className="bg-violet-50 flex h-16 w-16 items-center justify-center rounded-full">
        <User className="h-8 w-8 text-violet-500" />
      </div>
    )
  }

  return (
    <img
      className="h-16 w-16 rounded-full object-cover"
      src={previewURL}
      alt=""
    />
  )
}
