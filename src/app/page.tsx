import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Nav } from '@/components/Nav';
import { PhotoItem } from '@/components/PhotoItem'
import { tennisList } from '@/data/tennisList';

const Page = () => {
  return (
    <div className='font-Montserrat'>
      <Nav />
      <Header />
      <section className='bg-white flex justify-center items-center flex-col pb-16 px-5 text-center'>
        <h1 className='font-semibold text-desconto text-2xl sm:text-2xl lg:text-3xl pt-10 pb-3'>Destaques</h1>
        <span className='text-freteFree lg:text-xl sm:text-base pb-10 font-medium'>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado</span>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-center items-center text-desconto px-5'>
          {tennisList.map((item, index)=> (
            <PhotoItem key={index} photo={item} />
          ))}
        </ul>
      </section>
      <Footer />
    </div>
  )
}

export default Page;