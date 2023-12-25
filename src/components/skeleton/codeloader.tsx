import Skeleton from '@/ui/skeleton/svg';

const CodeLoader = () => (
  <Skeleton
    height={151.58}
    width={560}
    reactheight="100%"
    reactwidth="100%"
    primarycolor="rgba(0,0,0,.3)"
    secondrycolor="rgba(0,0,0,.4)"
    dur="1s"
    style={{
      borderRadius: '15px',
      zIndex: '20',
      position: 'relative',
    }}
  />
);

export default CodeLoader;
