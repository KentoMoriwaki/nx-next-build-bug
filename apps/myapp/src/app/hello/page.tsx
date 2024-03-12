import { Metadata } from 'next';

export const metadata: Metadata = {
  themeColor: '#000000', // To test deprecation warning
};

export default function HelloPage() {
  return (
    <div>
      <h1>Hello Page</h1>
    </div>
  );
}
