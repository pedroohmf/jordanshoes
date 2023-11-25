export const Header = () => {
    return (
        <header className="h-96 mx-auto flex justify-center items-center w-full min-w-screen bg-headerImage bg-center bg-no-repeat bg-cover bg-opacity-60">
        <div className="bg-desconto/50 w-full h-full">
        <div className="container mx-auto py-14 h-full flex flex-col justify-center text-titleSub px-5">
          <h1 className="lg:text-5xl sm:text-2xl font-semibold max-w-xl">A melhor loja de Jordan</h1>
          <h2 className="lg:text-2xl sm:text-base pt-4 font-medium max-w-xl">O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan</h2>
        </div>
        </div>
      </header>
    )
}