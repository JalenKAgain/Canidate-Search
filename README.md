# Candidate Search 

## Overview
The  is a web-based platform that enables recruiters and hiring managers to efficiently search, filter, and manage candidate profiles. The application allows users to perform advanced searches based on skills, experience, location, and other criteria to find the best candidates for job openings.

## Table of Contents
- [Features](#Features)
- [Technologies Used](#TechnologiesUsed)
- [API Endpoints](#APIEndpoints)
- [Future Enhancements](#FutureEnhancements)
- [Contributing](#Contributing)
- [License](#License)

## Features
- **Candidate Profile Management**: Add, update, and delete candidate profiles.
- **Advanced Search & Filters**: Search candidates by name, skills, location, experience, and other parameters.
- **Resume Upload & Parsing**: Upload resumes and extract key details automatically.
- **Job Matching Algorithm**: AI-powered recommendations based on job descriptions.
- **Bookmark & Shortlist**: Save candidates for further review.
- **User Authentication**: Secure login and user management.
- **Admin Dashboard**: View statistics, manage users, and oversee candidate activities.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT-based authentication
- **Cloud Storage**: AWS S3 (for resumes)
- **Search Engine**: Elasticsearch (optional for better search performance)



### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/candidate-search-app.git
   cd candidate-search-app
   ```
2. Install dependencies:
   ```sh
   npm install  
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory and add the required credentials.
4. Start the development server:
   ```sh
   npm run dev  
   ```
5. Open your browser and go to `http://localhost:5173`

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/candidates` | Fetch all candidates |
| GET | `/api/candidates/:id` | Fetch candidate by ID |
| POST | `/api/candidates` | Add a new candidate |
| PUT | `/api/candidates/:id` | Update candidate details |
| DELETE | `/api/candidates/:id` | Remove a candidate |
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Authenticate a user |

## Future Enhancements
- **Integration with LinkedIn API** for profile importing
- **Automated Interview Scheduling**

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License.

---
