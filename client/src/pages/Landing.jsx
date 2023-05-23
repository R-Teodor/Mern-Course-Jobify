import main from '../assets/images/main-alternative.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link, Navigate } from 'react-router-dom'
import { useAppContext } from '../context/context'

function Landing() {
  const { user } = useAppContext()
  return (
    <>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>

        <div className='container page'>
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              I'm baby jean shorts pitchfork man bun banjo vaporware mlkshk
              hammock meh church-key tilde hoodie brunch you probably haven't
              heard of them. Locavore scenester fixie meditation, lo-fi
              snackwave disrupt ramps mlkshk try-hard bodega boys austin direct
              trade. Heirloom pitchfork quinoa meh. La croix lomo listicle
              fingerstache artisan, helvetica chambray. Street art selfies
              keffiyeh, yr cray bushwick everyday carry XOXO pinterest bespoke
              beard pop-up. Occupy shaman quinoa taiyaki migas retro live-edge
              unicorn gluten-free.
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    </>
  )
}

export default Landing
