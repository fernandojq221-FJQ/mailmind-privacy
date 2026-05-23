import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/google492b5aa23ba2f759')({
  component: GoogleVerification,
});

function GoogleVerification() {
  return (
    <pre style={{ margin: '2rem', fontFamily: 'monospace' }}>
      google-site-verification: google492b5aa23ba2f759.html
    </pre>
  );
}