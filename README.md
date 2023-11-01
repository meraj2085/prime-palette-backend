# Prime Palette

Painting service providing website. Separate dashboard for admins, users and super admin. Users can choose any service among the service categories and book appointments. Admin can approve or re schedule appointment. Admin can control website activities through protected dashboard and super admin can manage admins.

## Credentials

User credentials

```bash
  meraj@gmail.com
  password: 123456
```

Admin credentials

```bash
  admin@gmail.com
  password: 123456
```

Super Admin credentials

```bash
  superadmin@gmail.com
  password: 123456
```

## Functional Requirements

### Student

- Student can login and log out.
- Student can manage and update their profile.
- Student can update certain fields.

### Admin

- Admin can log in and log out.
- Admin can manage and update their profile.
- Admin can only update certain fields.
- Admin can manage user accounts:
  - Change Password

### Faculty

- Faculty can log in and log out.
- Faculty can manage and update their profile.
- Faculty can only update certain fields.

## API Endpoints

### User

- `POST /users/create-student`
- `POST /users/create-faculty`
- `POST /users/create-admin`

### Student

- `GET /students`
- `GET /students?searchTerm=fr797`
- `GET /students?page=1&limit=10&sortBy=gender&sortOrder=asc`
- `GET /students/:id`
- `PATCH /students/:id`
- `DELETE /students/:id`

### Faculty

- `GET /faculties`
- `GET /faculties?searchTerm=john`
- `GET /faculties?page=1&limit=10&sortBy=gender&sortOrder=asc`
- `GET /faculties/:id`
- `PATCH /faculties/:id`
- `DELETE /faculties/:id`

### Admin

- `GET /admins`
- `GET /admins?searchTerm=us88`
- `GET /admins?page=1&limit=10&sortBy=gender&sortOrder=asc`
- `GET /admins/:id`
- `PATCH /admins/:id`
- `DELETE /admins/:id`

### Academic Semester

- `POST /academic-semesters/create-semester`
- `GET /academic-semesters`
- `GET /academic-semesters?searchTerm=fal`
- `GET /academic-semesters?page=1&limit=10&sortBy=year&sortOrder=asc`
- `GET /academic-semesters/:id`
- `PATCH /academic-semesters/:id`
- `DELETE /academic-semesters/:id`

### Academic Department

- `POST /academic-departments/create-department`
- `GET /academic-departments`
- `GET /academic-departments?searchTerm=math`
- `GET /academic-departments?page=1&limit=10&sortBy=title&sortOrder=asc`
- `GET /academic-departments/:id`
- `PATCH /academic-departments/:id`
- `DELETE /academic-departments/:id`

### Academic Faculty

- `POST /academic-faculties/create-faculty`
- `GET /academic-faculties`
- `GET /academic-faculties?searchTerm=com`
- `GET /academic-faculties?page=1&limit=10&sortBy=title&sortOrder=asc`
- `GET /academic-faculties/:id`
- `PATCH /academic-faculties/:id`
- `DELETE /academic-faculties/:id`

### Authentication

- `POST /auth/login`
- `POST /auth/change-password`
- `POST /auth/refresh-token`

Postman Documenttaion: [Click Here](https://documenter.getpostman.com/view/26682150/2s93zB72V9#acc25f08-de78-478b-809d-837ce239d2b3)
