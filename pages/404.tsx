import dynamic from 'next/dynamic';

const NotFoundPage = dynamic(() => import('../components/notfound/index'), {
  ssr: false
});

const NotFound = (): JSX.Element => {
  return (
    <>
      <NotFoundPage />
    </>
  );
};

export default NotFound;
