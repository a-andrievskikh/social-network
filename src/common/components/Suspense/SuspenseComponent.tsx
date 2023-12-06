import { FC, Suspense } from 'react'

export const SuspenseComponent = ({ component: Component }: { component: FC }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  )
}