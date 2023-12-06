import { UserCard, UserCardLoader, useUsersQuery } from 'entities/user'
import { useAppDispatch, useAppSelector } from 'shared/model'
import { Button } from 'shared/ui'
import { LIMIT } from 'shared/const/limit'
import { showMoreUsersThunk } from 'features/user/show-more-users'
import {
  selectShowMoreUsersIsLoading,
  selectShowMoreUsers,
} from 'features/user/show-more-users/model/showMoreUsersSlice'

export const Users = () => {
  const dispatch = useAppDispatch()
  const { data: { users = [], isLastPage } = {}, isLoading } = useUsersQuery({
    page: 1,
    count: LIMIT.users.default,
  })
  const isLoadingShowMore = useAppSelector(selectShowMoreUsersIsLoading)
  const showMoreUsers = useAppSelector(selectShowMoreUsers)

  const showMore = async () => {
    try {
      await dispatch(showMoreUsersThunk({ count: LIMIT.users.showMore, offset: LIMIT.users.default })).unwrap()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <section className='section section--pb-0 s-users' id='users'>
      <div className='container s-users__container'>
        <h2 className='h2 section-title s-users__title'>Working with GET request</h2>
        <div className='row items users s-users__items'>
          {[...users, ...showMoreUsers].map((user) => {
            return <UserCard key={user.id} user={user} />
          })}
          {(isLoading || isLoadingShowMore) &&
            Array(3)
              .fill(null)
              .map((_, i) => <UserCardLoader key={i} />)}
        </div>
        {isLastPage === false && (
          <div className='text-btn text-btn--lg text-center s-users__items' onClick={showMore}>
            <Button loading={isLoading || isLoadingShowMore}>Show more</Button>
          </div>
        )}
      </div>
    </section>
  )
}
