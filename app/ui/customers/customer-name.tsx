import { FormattedCustomersTable } from '@/app/lib/definitions';
import Image from 'next/image';

export default function CustomerName({
  image_url,
  name,
}: {
  name: string;
  image_url: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={image_url}
        className="rounded-full"
        alt={`${name}'s profile picture`}
        width={28}
        height={28}
      />
      <p>{name}</p>
    </div>
  );
}
