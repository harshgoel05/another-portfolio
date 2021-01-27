import { Company } from '@constants';
import { useEffect, useState } from 'react';

type Props = {
  company1: Company;
};
export default function CompanyDetails({ company1 }: Props): JSX.Element {
  const [company, setCompany] = useState<Company | undefined>(undefined);
  useEffect(() => {
    setCompany(company1);
  }, [company1]);
  return (
    <>
      <div className="bg-violet rounded-2xl px-10 py-10 w-60 sm:w-72  mx-16 sm:mx-16 md:mx-32 md:w-80 lg4:w-96 xl:min-w-full">
        <p className="font-bold mb-2 text-7xl lg:text-6xl">{company?.name}</p>
        <p className="mb-1 text-sm">S{company?.position}</p>
        <p className="italic text-sm lg:text-7xl">
          {company?.startDate} - {company?.endDate ? 'Present' : company?.endDate}
        </p>
        <ul className="text-sm lg:text-7xl mt-8 list-disc ml-5 ">
          {company?.responsibilities.map((r) => {
            return <li key={r}>{r}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
