<<<<<<< HEAD
export default function Footer() {
  return (
    <>
      <footer className="text-center border-top pt-3 mt-5">
=======
export default function Footer(props) {
  return (
    <>
      <footer className={props.footerClass}>
>>>>>>> 35ddf48 (added: register page)
        <p>All Rights Reserved. &copy; Copyright 2021</p>
      </footer>
    </>
  );
};