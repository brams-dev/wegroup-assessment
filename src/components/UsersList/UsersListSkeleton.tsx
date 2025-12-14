export default function UsersListSkeleton() {
  return [...new Array(2)].map((_, i) => (
    <li
      key={i}
      className='flex animate-pulse flex-col gap-2 border-b-neutral-200 px-4 py-4 not-last:border-b'
    >
      <div className='flex items-center gap-2'>
        <span className='h-5 w-40 rounded bg-neutral-300'></span>

        <span className='h-5 w-12 rounded-lg bg-neutral-300'></span>
      </div>

      <span className='h-4 w-52 rounded bg-neutral-300'></span>
    </li>
  ));
}
