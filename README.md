# Mail Free

Mail Free is a web application that allows users to send emails to any email address with ease. It is built using the MERN (MongoDB, Express.js, React, Node.js) stack and utilizes NodeMailer for email delivery.

## Live Demo
[Mail Free Live](https://mail-free.vercel.app/)

## Features
- Send emails to any recipient
- User-friendly interface
- Secure and efficient email delivery using NodeMailer
- Built with the MERN stack

## Tech Stack
- **Frontend**: React.js
- **CSS Framework**: Tailwind
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Email Service**: NodeMailer
- **Hosting**: Vercel (Frontend), Backend can be hosted on services like Heroku, Render, or Vercel

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/abdurrahmanabid/mail-free.git
   cd mail-free
   ```
2. Install dependencies for both frontend and backend:
   ```sh
   cd client
   npm install
   cd ../server
   npm install
   ```
3. Set up environment variables in a `.env` file inside the server folder:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_USER=your_email@example.com
   SMTP_PASS=your_email_password
   ```
## Usage
1. Open the application in your browser.
2. Enter the recipient's email, subject, and message.
3. Click on "Send" to dispatch the email.

## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.

## License
This project is open-source and available under the MIT License.

