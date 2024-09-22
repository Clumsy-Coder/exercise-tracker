import { redirect } from 'next/navigation';

// type Props = {};

const TargetsPage = () => {
  // redirecting to `/exercises` page
  // check issue https://github.com/Clumsy-Coder/exercise-tracker/issues/524
  redirect('/exercises');

  // return <div>TargetsPage</div>;
};

export default TargetsPage;
