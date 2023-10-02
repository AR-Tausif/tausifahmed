import Image from 'next/image'
import ProcessCard from '../processCard'

export default function HeaderHero() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-32">
      <div>
      <h3 className="text-[8.5rem] font-semibold leading-[0.8] text-center"> 
      <p className='-tracking-wider'>FRONT-END</p> 
      <p>WEBSITE</p> <p className='-tracking-widest'>DEVELOPER©</p></h3>
      </div>
      <div className="my-32">
        <Image 
        width={500}
        height={100}
        src="/my-picture.jpg"
        alt="Tausif's picture"
        className="rounded-2xl"/>
      </div>
      <div className='mx-auto py-20'>
        <h5 className='mx-auto text-6xl text-center font-semibold -tracking-wider leading-[1.2]'>
          I enjoy creating exciting experiences and <br/> 
          finding solutions to challenging issues for <br/> 
          individuals <span className="text-purple-800"> -like you.</span>
       </h5>
      </div>
      <div className='mx-auto py-32'>
        <h5 className='mx-auto text-6xl text-center font-semibold -tracking-wider leading-[1.2]'>
          I enjoy creating exciting experiences and <br/> 
          finding solutions to challenging issues for <br/> 
          individuals <span className="text-purple-800"> -like you.</span>
       </h5>
      </div>
      <div className="my-32">
        {/* <Image 
        width={500}
        height={100}
        src="https://framerusercontent.com/images/NJSwXyDlaUZn0O49iCxLH4yY.png?scale-down-to=1024"
        alt="Tausif's picture"
        className="rounded-2xl"/> */}
        <img className='w-[50vh] h-[70vh] rounded-xl' src='https://framerusercontent.com/images/NJSwXyDlaUZn0O49iCxLH4yY.png?scale-down-to=1024' alt='highlited picture' />
      </div>
    </div>
  )
}
