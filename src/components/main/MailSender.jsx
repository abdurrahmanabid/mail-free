import axios from "axios";
import { FileText, Mail, Send, Text } from "lucide-react";
import React, { useState } from "react";
import Swal from "sweetalert2";

const MailSender = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const handleSend = async () => {
    // Implement email sending logic here
    try {
      await axios.post(`${import.meta.env.VITE_API_ORIGIN}/api/sendMail`, {
        to,
        subject,
        text,
      }).then((res) => {
        console.log(res.data);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: res?.data?.message||'Email sent successfully!',
        })
      })
    } catch (error) {
      console.error('❌ ~ error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error?.response?.data?.error||'Something went wrong!',
      })
    }
    

  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-blue-600 dark:bg-yellow-500 text-white dark:text-gray-900 p-6 flex items-center">
          <Mail className="mr-4 h-10 w-10" />
          <h2 className="text-3xl font-bold">Compose New Message</h2>
        </div>
        
        <div className="p-8 space-y-6">
          {/* To Field */}
          <div>
            <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-2">
              Recipient Email
            </label>
            <div className="relative">
              <input
                type="email"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Enter recipient's email address"
                className="w-full px-4 py-3 pl-12 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
              />
              <Mail className="absolute left-4 top-4 h-6 w-6 text-gray-400 dark:text-gray-400" />
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-2">
              Subject
            </label>
            <div className="relative">
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter email subject"
                className="w-full px-4 py-3 pl-12 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
              />
              <FileText className="absolute left-4 top-4 h-6 w-6 text-gray-400 dark:text-gray-400" />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <div className="relative">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Compose your message here..."
                rows="8"
                className="w-full px-4 py-3 pl-12 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
              />
              <Text className="absolute left-4 top-4 h-6 w-6 text-gray-400 dark:text-gray-400" />
            </div>
          </div>

          {/* Send Button */}
          <button
            onClick={handleSend}
            className="w-full flex items-center justify-center px-6 py-4 bg-blue-600 dark:bg-yellow-500 text-white dark:text-gray-900 rounded-lg hover:bg-blue-700 dark:hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-102"
          >
            <Send className="mr-3 h-6 w-6" />
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default MailSender;