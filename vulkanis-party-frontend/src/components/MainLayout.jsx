// src/components/MainLayout.jsx
import Header from './Header';
import Footer from './Footer';

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}