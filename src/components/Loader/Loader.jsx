import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="var(--secondary-color-blue)"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        position: 'fixed',
        display: 'flex',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(18, 20, 23, 0.80)',
        zIndex: '10000',
      }}
      wrapperClass=""
    />
  );
};
