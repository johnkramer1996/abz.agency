import { getImageDimensions } from 'shared/lib'
import { z } from 'zod'

const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg']
const MAX_FILE_SIZE = (5 << 10) << 10

const customImage = z
  .custom<FileList>()
  .transform((file: FileList) => (file && file.length > 0 && file.item(0)) || (null as unknown as File))
  .refine((file) => file, 'The photo is required')
  .refine((file) => !file || (!!file && file.size <= MAX_FILE_SIZE), 'The photo must not be exceed 5MB.')
  .refine(
    (file) => !file || (!!file && ACCEPTED_IMAGE_TYPES.includes(file.type)),
    'User photo should be jpg/jpeg image',
  )
  .refine(async (file) => {
    if (!file) return true
    const { width, height } = await getImageDimensions(file)
    return width >= 70 && height >= 70
  }, 'User photo should be with resolution at least 70x70px')

export const createUserFormSchema = z.object({
  name: z.string().min(2).max(60),
  email: z.string().email(),
  phone: z
    .string()
    .regex(
      /^[+]{0,1}380([0-9]{9})$/,
      'Invalid phone. Number should start with code of Ukraine +380. Example +380955388485  ',
    ),
  position_id: z.string({ required_error: 'Position is required', invalid_type_error: 'Position is required' }),
  photo: customImage,
})

export type CreateUserFormSchema = z.infer<typeof createUserFormSchema>
