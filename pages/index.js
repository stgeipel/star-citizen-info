import Head from 'next/head'
import Modal from 'react-modal'
import { useState } from 'react'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button onClick={() => setIsModalOpen(true)}>klick hier</button>
        <Modal isOpen={isModalOpen} style={customStyles}></Modal>
      </main>
    </div>
  )
}

export default Home
