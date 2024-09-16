import { ProfileForm } from '@/app/components/common/ProfileForm';
import { prisma } from '../../../../prisma/prisma_client';
import { getUserSession } from '../../../../shared/utils/getUserSession';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const session: any = await getUserSession();
  if (!session) {
    return redirect('/not-auth');
  }
  const user = await prisma.user.findFirst({
    where: {
      id: Number(session?.id),
    },
  });

  if (!user) {
    return redirect('/not-auth');
  }
  return <ProfileForm data={user} />;
}
