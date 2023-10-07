import Head from 'next/head'
import Link from 'next/link'

const Game = () => {
  return (
    <div>
      <Head>
        <title>B.T.W | Game </title>
        <meta name='discription' content='create some games'></meta>
      </Head>
      <section className="text-center mb-12">
        <p className="text-8xl font-bold underline decoration-4">GAME</p>
        <p className="text-xl italic pt-4">
          I try to create some Games<br/>
          I hope you will have a good time.
        </p>
      </section>
      <div className='w-2/3 h-28 m-auto'>
        <li className='text-2xl mt-5 mb-5 underline hover:no-underline'><Link href='game/gomoku'>五目並べ</Link></li>
        <li className='text-2xl mt-5 mb-5 underline hover:no-underline'><Link href='game/quiz'>Quiz</Link></li>
      </div>
    </div>
  )
}
export default Game