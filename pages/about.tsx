import { MainLayout } from '../layouts/MainLayout';

export default function About() {
  return (
    <MainLayout>
        <h1 className='title'>
          Welcome to <a href="https://nextjs.org">About!</a>
        </h1>

        <p className='description'>
          Get started by editing{' '}
          <code className='code'>pages/about.tsx</code>
        </p>
    </MainLayout>
  )
}
