export default function UsersListSkeleton() {
  return [...new Array(3)].map((_, i) => (
    <li key={i} className='flex animate-pulse flex-col gap-2'>
      <div className='flex items-center gap-2'>
        <span className='h-4 w-40 rounded bg-neutral-300'></span>

        <span className='h-5 w-12 rounded-lg bg-neutral-300'></span>
      </div>

      <span className='h-4 w-52 rounded bg-neutral-300'></span>
    </li>
  ));
}
