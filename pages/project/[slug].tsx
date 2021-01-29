import { useRouter } from 'next/router';

const Project = (): JSX.Element => {
  const router = useRouter();
  const { slug } = router.query;
  return <p>Post: {slug}</p>;
};

export default Project;
