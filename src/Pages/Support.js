import React from 'react';
import Support from "../Assets/support 1.jpg";
import "../Styles/Support.css";


function SupportPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send the ticket data to a server).
  };

  return (
    <div className="Support">
      <h1>Need Assistance</h1>
      <img src={Support} alt="Support Team" />
      <p className="supp">
        We're here to help! If you have any questions or need assistance, please don't hesitate to reach out to our support team.
      </p>
      <p className="supp">
        You can contact us via email at <a className="support-link"href="mailto:support@example.com">support@dunadpay.com</a>, or give us a call at <a className="support-link" href="tel:+234 8182848273">+234 8182848273</a>.
      </p>
      <p className="supp">
        Our support team is available from Monday to Sunday
      </p>
      <p className="supp">
        If you have a specific issue or request, you can submit a support ticket below:
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Subject:
          <input type="text" name="subject" />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" rows="4"></textarea>
        </label>
        <br />
        <button type="submit">Submit Ticket</button>
      </form>
    </div>
  );
}

export default SupportPage;
