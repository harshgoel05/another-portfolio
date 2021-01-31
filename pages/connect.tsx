import Connect from 'components/connect';
import CustomCursor from 'shared/cursor';
import { Footer, Navbar } from '../shared/components';

export default function Contact(): JSX.Element {
  return (
    <>
      <Navbar />
      <Connect />
      <CustomCursor />
      <Footer />
    </>
  );
}
