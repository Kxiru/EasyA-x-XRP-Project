import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const goToNewPage = () => {
    navigate("/Dashboard");
  };

  return (
    <div className="App-header">
      <div className="signinmodal">
        <div>
          <h3>Sign in with email</h3>
          <p>
            Simple and cost efficient cross-currency stock investments with
            automatic hedging.
          </p>
        </div>

        <form>
          <input></input>
          <input></input>
          <p style={{ color: "#89F1F3", textAlign: "right" }}>
            Forgot password?
          </p>
          <div
            className="signin_submit"
            onClick={() => {
              goToNewPage();
            }}
          >
            Sign in
          </div>
        </form>
      </div>
    </div>
  );
}
