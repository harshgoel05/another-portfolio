import Image from 'next/image';

export default function WorkLogo(): JSX.Element {
  return (
    <>
      <Image
        src="/images/companies/coding_blocks.svg"
        alt="Coding Blocks"
        width={100}
        height={100}
      />
      <Image
        src="/images/companies/workmailcommunity.svg"
        alt="Work Mail Community"
        width={100}
        height={100}
      />
      <Image src="/images/companies/hashbinary.svg" alt="Hashbinary LLP" width={100} height={100} />
      <Image src="/images/companies/zoob_labs.svg" alt="Zoob Labs" width={100} height={100} />
      <Image
        src="/images/companies/inception_wave.svg"
        alt="Inception Wave"
        width={100}
        height={100}
      />
      <Image src="/images/companies/aaruush.svg" alt="Aaruush'18" width={100} height={100} />
      <Image
        src="/images/companies/iec.svg"
        alt="SRM Indian Energy Conference"
        width={100}
        height={100}
        layout="intrinsic"
      />
      <Image src="/images/companies/social_dukan.svg" alt="Social Dukan" width={100} height={100} />
    </>
  );
}
