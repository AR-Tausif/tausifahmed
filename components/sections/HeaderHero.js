import Image from 'next/image'

export default function HeaderHero() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-32">
      <h3 className="text-[8.5rem] font-semibold leading-[0.8] text-center"> 
      <p className='-tracking-wider'>FRONT-END</p> 
      <p>WEBSITE</p> <p className='-tracking-widest'>DEVELOPER©</p></h3>
    </div>
  )
}
