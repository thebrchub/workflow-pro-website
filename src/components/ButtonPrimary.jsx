// components/ButtonPrimary.jsx
export default function ButtonPrimary({ children, className='', onClick, href }) {
  const base = 'btn-primary ' + className;
  if (href) {
    return <a href={href} className={base}>{children}</a>;
  }
  return <button onClick={onClick} className={base}>{children}</button>;
}
