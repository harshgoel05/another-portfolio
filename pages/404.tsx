import dynamic from 'next/dynamic';

const NotFoundPage = dynamic(() => import('../components/notfound/index'), {
  ssr: false
});

export default function NotFound(): JSX.Element {
  return <NotFoundPage />;
}
