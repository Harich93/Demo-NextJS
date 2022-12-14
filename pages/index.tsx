import { MainLayout } from '../layouts/MainLayout';

export default function Home() {
  return (

      <MainLayout>
        <h1 className='title'>
          Welcome to <a href="https://nextjs.org">Home!</a>
        </h1>

        <p className='description'>
          Get started by editing{' '}
          <code className='code'>pages/index.tsx</code>
        </p>
      </MainLayout>
     
  )
}
