import dynamic from 'next/dynamic';
import CustomCursor from 'shared/cursor';

const NotFoundPage = dynamic(() => import('../components/notfound/index'), {
  ssr: false
});

const NotFound = (): JSX.Element => {
  return (
    <>
      <CustomCursor />
      <NotFoundPage />
    </>
  );
};

export default NotFound;
