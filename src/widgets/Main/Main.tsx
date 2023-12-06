import { Button } from 'shared/ui'
import './Main.scss'

export const Main = () => {
  return (
    <section className='section s-main'>
      <div
        className='section__bg section__bg--dark section__bg--overlay s-main__bg'
        style={{ backgroundImage: 'url(/assets/img/main.jpg) ' }}
      ></div>
      <div className='container s-main__container main'>
        <h1 className='h1 main__width main__title text-white'>Test assignment for front-end developer</h1>
        <h3 className='main__width main__subtilte text-white'>
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
          understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They
          should also be excited to learn, as the world of Front-End Development keeps evolving.
        </h3>
        <div className='btn-wrapper main__width main__btn-wrap'>
          <Button to='#sign-up' className='btn'>
            Sign up
          </Button>
        </div>
      </div>
    </section>
  )
}
