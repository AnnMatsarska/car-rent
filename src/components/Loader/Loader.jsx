import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="var(--secondary-color-blue)"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        justifyContent: 'center',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};
