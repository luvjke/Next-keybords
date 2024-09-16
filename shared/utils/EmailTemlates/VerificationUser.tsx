import React from 'react';
interface EmailTemplateProps {
  code: string;
}

export const VerificationUserTemplate: React.FC<EmailTemplateProps> = ({ code }) => (
  <div>
    <p>
      Код подьтверждения: <b>{code}</b>{' '}
    </p>
    <p>
      <a href={`http://localhost:3000/api/auth/verify?code=${code}`}> Подтвердить регистрацию</a>
    </p>
  </div>
);
