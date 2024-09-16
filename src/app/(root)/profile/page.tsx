import { getUserSession } from '../../../../shared/utils/getUserSession';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const session = await getUserSession();
  if (!session) {
    return redirect('/not-auth');
  }
  return <div>asdasd</div>;
}
