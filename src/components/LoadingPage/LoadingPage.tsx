import { Loader2Icon } from 'lucide-react';

export default function LoadingPage() {
  return (
    <div className='flex h-full min-h-[calc(100vh-32px)] w-full items-center justify-center'>
      <span className='flex flex-col items-center gap-4 text-lg'>
        <Loader2Icon className='animate-spin' /> Loading...
      </span>
    </div>
  );
}
