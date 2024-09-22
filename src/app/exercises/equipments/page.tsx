import { redirect } from 'next/navigation';

// type Props = {};

const EquipmentsPage = () => {
  // redirecting to `/exercises` page
  // check issue https://github.com/Clumsy-Coder/exercise-tracker/issues/524
  redirect('/exercises');

  // return <div>EquipmentsPage</div>;
};

export default EquipmentsPage;
