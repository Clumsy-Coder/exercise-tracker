type Props = {
  /**
   * HTTP status code
   */
  status: number;
  /**
   * Error message
   */
  message?: string;
};

/**
 * Component used to display an error
 */
const Error = ({ status, message }: Props) => {
  return (
    <div className='flex h-[calc(100vh-8rem)] flex-col items-center justify-center'>
      <h1 className='text-6xl'>{status}</h1>
      {message && <p className='mt-6'>{message}</p>}
    </div>
  );
};

export default Error;
