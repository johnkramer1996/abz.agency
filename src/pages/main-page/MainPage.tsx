import { usePositionsQuery } from 'entities/position'
import { useTokenQuery } from 'entities/session/api/sessionApi'
import { Preloader } from 'shared/ui'
import { GetRequest, Main, SignUp } from 'widgets'

export const MainPage = () => {
  const { isLoading } = useTokenQuery()
  usePositionsQuery()

  if (isLoading) return <Preloader />

  return (
    <>
      <Main />
      <GetRequest />
      <SignUp />
    </>
  )
}
