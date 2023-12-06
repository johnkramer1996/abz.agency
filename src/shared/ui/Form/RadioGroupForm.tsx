import { FieldValues, Path, useFormContext } from 'react-hook-form'
import { InputErrorMessageForm } from './InputErrorMessageForm'
import { RadioInput } from '../RadioInput/RadioInput'

type Props<TFormValues extends FieldValues> = {
  name: Path<TFormValues>
  options: {
    value: string | number
    label: string
  }[]
}
export const RadioGroupForm = <TFormValues extends Record<string, unknown>>(props: Props<TFormValues>) => {
  const { name, options } = props
  const {
    register,
    formState: { errors },
  } = useFormContext()

  // const errorMessages = get(errors, name)
  // const hasError = !!(errors && errorMessages)

  return (
    <div className='input input--radio'>
      <div className='input__label'>Select your position</div>
      {options.map((el, i) => (
        <RadioInput key={i} value={el.value} label={el.label} {...register(name)} />
      ))}
      <InputErrorMessageForm errors={errors} name={name} />
    </div>
  )
}
