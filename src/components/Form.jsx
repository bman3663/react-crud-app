import React from "react";

function Form() {
  return (
    <>
      <div>
        <form action="/training/create" method="post">
          <label>User</label>
          <input type="text" name="user" required />
          <br /> <br /> <br /> <br />
          <label>User ID</label>
          <input type="text" name="id" required maxlength="10" />
          <br /> <br /> <br /> <br />
          <label>Description</label>
          <input type="text" name="description" required maxlength="500" />
          <br /> <br /> <br /> <br />
          <label>Card Number</label>
          <input
            type="text"
            name="cardDetails[cardNumber]"
            required
            maxlength="16"
          />
          <br /> <br /> <br /> <br />
          <label>Expiry Date</label>
          <input type="month" name="cardDetails[expiryDate]" required />
          <br /> <br /> <br /> <br />
          <label>CVV</label>
          <input
            type="text"
            name="cardDetails[cvv]"
            required
            maxlength="3"
            minlength="3"
          />
          <br /> <br /> <br /> <br />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}

export default Form;
