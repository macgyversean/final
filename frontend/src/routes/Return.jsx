const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    const url = `${import.meta.env.VITE_SOURCE_URL}/session-status`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === "open") {
    return <Navigate to="/" />;
  }

  if (status === "complete") {
    return (
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to{" "}
          {customerEmail}. If you have any questions, please email
          {"seancarroll753@gmail.com "}
          <a href="mailto:seancarroll753@gmail.com">seancarroll753@gmail.com</a>
          .
        </p>
      </section>
    );
  }

  return null;
};
