import moment from 'moment';

const Footer = () => {
  const appData = [
    ['Version: ', process.env.NEXT_PUBLIC_BUILD_VERSION],
    ['Build ID: ', process.env.NEXT_PUBLIC_BUILD_ID],
    ['Build time: ', moment.unix(process.env.NEXT_PUBLIC_BUILD_TIME).format('YYYY-MM-DD')],
  ];
  return (
    <footer className='flex flex-col items-center justify-center gap-8 bg-black py-5 text-white dark:border-t md:h-16 md:flex-row'>
      {appData.map(([label, value]) => (
        <div
          key={`footer-${label}`}
          className='flex items-center justify-between gap-1'
        >
          <h1 className='font-bold'>{label}</h1>
          <p>{value}</p>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
