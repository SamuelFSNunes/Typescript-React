import './Header.css'
import img from './img/logo-full.svg'

export const Header = () =>{
  return(
    <div className='header'>
      <img src={img} alt="" />
      Dio Bank
    </div>
  )
}