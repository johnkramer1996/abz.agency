import { CreateUserFormSchema, createUserFormSchema } from '../model/createUserFormSchema'
import { notifySuccess } from 'shared/lib'
import { ButtonForm, FileInputForm, Form, InputForm, RadioFormGroup } from 'shared/ui'
import { usePositionsQuery } from 'entities/position'
import { useAppDispatch } from 'shared/model'
import { createUserThunk } from '../model/createUserThunk'

type Props = {
  onComplete?: () => void
  className?: string
}

export const CreateUserForm = (props: Props) => {
  const { onComplete, className } = props
  const dispatch = useAppDispatch()
  const { data: { positions = [] } = {}, isLoading } = usePositionsQuery()

  const onSubmit = async (data: CreateUserFormSchema) => {
    await dispatch(createUserThunk(data)).unwrap()
    onComplete && onComplete()
    notifySuccess('User successfully created')
  }

  if (isLoading) return <>loading</>

  return (
    <Form
      validationSchema={createUserFormSchema}
      onSubmit={onSubmit}
      // defaultValues={{
      //   name: 'Name',
      //   email: 'email@gmail.com',
      //   phone: '+38011111111',
      //   position_id: positions[0] ? String(positions[1].id) : undefined,
      // }}
      className={className}
    >
      <>
        <InputForm<CreateUserFormSchema> type='text' name='name' label='Your name' />
        <InputForm<CreateUserFormSchema> type='text' name='email' label='Email' />
        <InputForm<CreateUserFormSchema> type='text' name='phone' label='Phone' helperText='+38 (XXX) XXX - XX - XX' />
        <RadioFormGroup<CreateUserFormSchema>
          name='position_id'
          options={positions.map((el) => ({ value: el.id, label: el.name }))}
        />
        <FileInputForm<CreateUserFormSchema> name='photo' />
        <div className='text-btn text-btn--lg text-center'>
          <ButtonForm>Sign up</ButtonForm>
        </div>
      </>
    </Form>
  )
}
