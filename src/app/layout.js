import './globals.css';

export const metadata = {
  title: 'Pizzeria Restaurant',
  description: 'Located near Sialkot Motorway Opp. Leather Field',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
