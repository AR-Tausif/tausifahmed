const PortfolioCard = ({small, work}) => {
    const {name, title, thumbImg} = work;
    return ( 
        <div className={`${small ? 'h-[30vh]' : 'h-[100vh]'}
         w-full
        max-h-[32rem]
    
        relative
        overflow-hidden
        block
        z-10
                    
        bg-[url('https://framerusercontent.com/images/idwwZIIqbma8TEQVuw7zr8Em7g.jpg?scale-down-to=2048')]
        bg-cover
        bg-no-repeat
        bg-center

        before:content-['']
        before:absolute
        before:inset-0
        before:block
        before:bg-gradient-to-b
        before:from-white
        before:to-gray-900
        before:opacity-30
        before:z-[-5] rounded-2xl`}
        >
            <div className="text-center text-white space-y-5 absolute bottom-8">
            <h4 className={`font-bold ${small ? 'text-4xl' : "text-6xl"}`}>{name}</h4>
            <h5 className={` text-center font-semibold mx-auto px-11 -tracking-wider leading-[1.2] ${small ? 'text-2xl' : "w-3/4 text-4xl"}`}>{title}</h5>
            </div>
        </div>
     );
}
 
export default PortfolioCard;