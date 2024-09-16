import NextAuth from 'next-auth/next';
import { authOptions } from '../../../../../shared/constans/auth_options';

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, authOptions };
