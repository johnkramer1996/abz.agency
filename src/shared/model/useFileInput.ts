import { useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { fileSize } from 'shared/lib/fileSize'

export type FileInfo = {
  name: string
  size: string
}

type Props = {
  name: string
  onChange?: (name: string, value: File) => void
  onDelete?: (name: string) => void
}

export const useFileInput = (props: Props) => {
  const { name, onChange, onDelete } = props
  const {
    register,
    setValue,

    formState: { isSubmitSuccessful, isSubmitted, errors },
  } = useFormContext()
  const [fileInfo, setFileInfo] = useState<FileInfo | null>(null)

  useEffect(() => {
    isSubmitSuccessful && !errors.root?.serverError && setFileInfo(null)
  }, [isSubmitSuccessful, errors])

  const inputName = name
  const inputFileRef = useRef<HTMLInputElement | null>(null)
  const inputFile = register(inputName, {
    onChange: async (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      const { files } = e.target
      if (!files || !files.length) return

      const [file] = files
      const name = file.name
      const size = fileSize(file.size)
      setFileInfo({ name, size })
      onChange && onChange(inputName, file)
    },
  })

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    inputFileRef.current?.click()
  }

  const handleDelete = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    setValue(inputName, null, { shouldDirty: isSubmitted, shouldValidate: isSubmitted, shouldTouch: isSubmitted }) //
    onDelete && onDelete(inputName)
    setFileInfo(null)
  }

  return {
    fileInfo,
    onOpen: handleOpen,
    onDelete: handleDelete,
    inputFileProps: {
      ...inputFile,
      ref: (e: HTMLInputElement | null) => {
        inputFile.ref(e)
        inputFileRef.current = e
      },
    },
  }
}
