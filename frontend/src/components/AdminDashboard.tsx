import React, { useEffect, useState } from 'react';
import { api } from '../services/axiosInstance';

interface Message {
  id: number;
  email_field: string;
  message_content: string;
}

const AdminDashboard: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await api.get('/messages');
        setMessages(response.data);
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    };
    fetchMessages();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id} className="mb-2 p-2 border rounded">
            <p><strong>Email:</strong> {msg.email_field}</p>
            <p><strong>Message:</strong> {msg.message_content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
