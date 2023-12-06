import { loadImage } from './loadImage'

export async function getImageDimensions(file: File) {
  const image = await loadImage(file)
  const width = image ? image.width : 0
  const height = image ? image.height : 0

  return { width, height }
}
