import React from "react";

function Table() {
  return (
    <div>
      {/* <div class="wrapper">
    <h1><%= title %></h1>
    <br>

    <div>
     <% if (trainings.length === 0) { %>
        <p>There are no training sessions for this user, please return to the <a href="/training/table">View Training Sessions</a> page and change your search.</p>
    <% } else { %>

    </div>

    <table class="table table-inverse">
        <thead>
            <tr>
                <th>User</th>
                <th>User ID</th>
                <th>Description</th>
                <th>Date Created</th>
                
            </tr>
        </thead>
        <tbody>
            <% for(var i = 0; i < trainings.length; i++) { %>
            <tr>
                <td><%= trainings[i].user %></td>
                <td><%= trainings[i].id %></td>
                <td><%= trainings[i].description %></td>
                <td><%= new Date(trainings[i].createdAt).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) %></td>
                <td>
                   
                  </td>
            </tr>
            <% } %>
        </tbody>
    </table>
    <% } %>
</div> */}
    </div>
  );
}

export default Table;
