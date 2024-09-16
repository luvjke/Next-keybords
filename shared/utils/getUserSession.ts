import { getServerSession } from 'next-auth';
import { authOptions } from '../constans/auth_options';

export const getUserSession = async () => {
  const session = await getServerSession(authOptions);

  return session?.user ?? null;
};
