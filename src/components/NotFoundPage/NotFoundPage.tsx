import { CompassIcon } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className='flex h-full min-h-[calc(100vh-32px)] w-full items-center justify-center'>
      <span className='flex flex-col items-center gap-4 text-lg'>
        <CompassIcon /> Not found
      </span>
    </div>
  );
}
