import Image from "next/image";

export function Logo({
  className,
  withLabel = true,
}: {
  className?: string;
  withLabel?: boolean;
}) {
  return (
    <span className="text-primary flex items-center font-semibold leading-none">
      <Image
        src="/images/logo.svg"
        alt="Kidtivity Lab"
        width={160}
        height={40}
      />

      {/* {withLabel && (
        <Image
          src="/images/kidtivity-lab.svg"
          alt="Acme"
          width={40}
          height={40}
        />
      )} */}
    </span>
  );
}
