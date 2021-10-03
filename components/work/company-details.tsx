import { Company } from 'shared/utils/types';
import { useEffect, useState } from 'react';

type Props = {
  activeCompany: Company;
};
export default function CompanyDetails({ activeCompany }: Props): JSX.Element {
  const [company, setCompany] = useState<Company | undefined>(undefined);
  useEffect(() => {
    setCompany(activeCompany);
  }, [activeCompany]);
  return (
    <>
      <div className="bg-violet rounded-2xl px-10 py-10 w-60 sm:w-72 mx-16 sm:mx-16 md:mx-32 md:w-80 lg4:w-96 xl:min-w-full xl:min-h-full">
        <p className="font-bold mb-2 text-7xl lg:text-6xl cursor-auto">{company?.name}</p>
        <p className="mb-1 text-lg">{company?.position}</p>
        <p className="italic text-sm lg:text-7xl">
          {company?.startDate} - {company?.endDate ? company?.endDate : 'Present'}
        </p>
        <ul className="text-sm lg:text-7xl mt-8 list-disc ml-5 z-30 cursor-auto">
          {company?.responsibilities.map((r) => {
            return <li key={r}>{r}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
