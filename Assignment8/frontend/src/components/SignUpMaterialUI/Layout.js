import UserForm from './SignUpComponents/UserForm';
/**
 * Simple component with no state.
 * @param {string} props the selected element to evaluate
 * @return {object} JSX
 */
export default function Layout() {
  return (
    <>
      <div className='userform'>
        <UserForm />
      </div>
    </>
  );
}
