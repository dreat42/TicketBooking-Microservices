import { useEffect } from 'react';
import { useRouter } from 'next/router';

const LandingPage = ({ currentUser, tickets }) => {
  const router = useRouter();

  const handleViewClick = (ticketId) => {
    router.push(`/tickets/[ticketId]`, `/tickets/${ticketId}`);
  };

  const ticketList = tickets.map((ticket) => (
    <tr key={ticket.id}>
      <td>{ticket.title}</td>
      <td>
        <a onClick={() => handleViewClick(ticket.id)}>View</a>
      </td>
    </tr>
  ));

  return (
    <div>
      <h1>Tickets</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{ticketList}</tbody>
      </table>
    </div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get('/api/tickets');
  return { tickets: data };
};

export default LandingPage;
