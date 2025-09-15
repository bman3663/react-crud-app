import React from "react";

function Help() {
  return (
    <div>
      <div>
        <h2>Frequently Asked Questions</h2>
        <h3>How do I create a new training session?</h3>
        <p>
          To create a new training session, go to the{" "}
          <a href="/training/create">Create Training Session</a> page and fill
          out the form.
        </p>

        <h3>How do I modify an existing training session?</h3>
        <p>
          To modify an existing training session, go to the{" "}
          <a href="/training/table">Veiw Training Sessoins</a> page, find the
          session you want to modify, and click the "Modify" button.
        </p>

        <h3>How do I delete a training session?</h3>
        <p>
          To delete a training session, go to the{" "}
          <a href="/training/table">Veiw Training Sessoins</a>, find the session
          you want to delete, and click the "Delete" button.
        </p>

        <h3>Who can I contact for further assistance?</h3>
        <p>
          If you need further assistance, please contact our support team at{" "}
          <a href="mailto:support@trainingapp.com">support@trainingapp.com</a>
        </p>

        <h3>How do I search for a user specific training session?</h3>
        <p>
          To search for a user specific training session, go to the{" "}
          <a href="/training/table">Veiw Training Sessoins</a>, in the "Search"
          section, enter the users name, then the range of dates for the session
        </p>
      </div>
    </div>
  );
}

export default Help;
