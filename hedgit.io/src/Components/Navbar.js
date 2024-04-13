import logo from "../Images/hedgit_logo.jpg";

export default function Navbar() {
  return (
    <div class="navbar">
      <img class="logo" src={logo} />
      <div class="text-logo">Hedgit.io</div>

      <div class="navbar-right">
        <a class="navbar-button">Get Started</a>
      </div>
    </div>
  );
}
