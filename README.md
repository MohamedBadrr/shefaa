# Shefaa — Healthcare Appointment Platform

Shefaa is a healthcare web application that connects patients with doctors and gives administrators tools to manage daily operations.

The application supports three roles: **Patient**, **Doctor**, and **Admin**, with dedicated pages and workflows for each role.


## Accounts 

# Admin : 
Email : admin@shefaa.com
Password : 123456789
# Doctor or Patient: you can create an account and login.


## Features

### Public Website

- Responsive home page with healthcare services, medical departments, testimonials, and support information.
- About Us page introducing the platform.
- Contact Us page with contact information and a validated contact form.
- Doctor directory displayed as cards.
- Filter doctors by medical department.
- Share department-filtered directory links through URL query parameters.
- Browse approved doctors and view:
  - Profile photo and name.
  - Medical department and qualifications.
  - Consultation fee.
  - Years of experience.
  - Availability.
  - Rating and review count.
- Doctor details pages with professional information, patient reviews, and appointment booking.

> The contact form currently validates input and displays a success notification. It does not yet send messages to a backend or email service.

### Authentication and Access

- Patient registration.
- Doctor registration with professional details.
- Email and password login through Supabase Auth.
- Logout.
- Authentication state management with Zustand.
- Protected routes for authenticated users.
- Separate layouts and route guards for patients, doctors, and admins.
- Doctor dashboard access based on approval status.
- Dedicated pending-approval and rejected-account pages.
- Account photo dropdown with profile navigation.
- Dropdown dismissal when clicking outside or pressing Escape.

### Patient Features

#### Find and Book Doctors

- Browse approved doctors.
- Filter by department.
- Read doctor information and patient reviews.
- Choose a date and time from available appointment slots.
- Request a regular appointment.
- Receive loading, success, error, and empty-state feedback.
- See an unavailable message when a doctor is not accepting appointments.

The slot service requests availability for the next 35 days.

#### Manage Appointments

- View personal appointments as cards.
- See the doctor, date, time, visit type, and appointment status.
- Open the doctor's page from an appointment.
- Cancel pending or reserved appointments through a confirmation dialog.

#### Leave Reviews

- Choose a completed appointment to review.
- Submit a rating and written comment.
- Read reviews on doctor details pages.
- Previously reviewed appointments are excluded from the review selector.

#### Update Profile

- Edit first and last name.
- Update phone number, age, and address.
- Upload and preview a profile photo.
- Validate photo type and size.
- Supported photo formats: PNG, JPEG, and WebP, up to 5 MB.

### Doctor Features

#### Registration and Approval

Doctors register with personal information and professional details:

- Department.
- Qualifications.
- Consultation fee.
- Years of experience.
- Professional description.

Doctor accounts use three approval states:

- Pending.
- Approved.
- Rejected.

The dashboard is available to approved doctors.

#### Dashboard Overview

- Total appointments.
- Appointment fee total displayed as earnings.
- Review count.
- Doctor rating.

> The earnings figure sums appointment fees excluding cancelled and rejected appointments. It is not a payment settlement report.

#### Appointment Management

- View appointments in a table.
- See patient information, appointment date, time, fee, and status.
- Mark reserved or paid appointments as completed.
- Cancel pending, reserved, or paid appointments.
- Confirm completion and cancellation actions through dialogs.

#### Weekly Schedule Management

- Add availability using a weekday and time.
- View existing weekly schedule entries.
- Remove schedule entries.

#### Profile Management

- Update personal details and profile photo.
- Edit department, qualifications, consultation fee, experience, and description.

### Admin Features

The admin dashboard contains five sections.

#### 1. Doctors

- View doctor records in a table.
- Search doctors by name or email.
- View personal and professional details.
- Create doctor accounts.
- Edit doctor information.
- Change approval status.
- Control appointment availability.
- Add and remove doctor schedule entries.
- Delete doctor records through a confirmation dialog.

#### 2. Pending Doctor Requests

- View pending doctor applications.
- Inspect applicant details.
- Approve doctor requests.
- Reject requests with confirmation or cancel the action.

#### 3. Departments

- View departments in a table.
- Create departments.
- View and edit department details.
- Update department names and descriptions.
- Set departments as active or inactive.
- Delete departments with confirmation.

#### 4. Appointments

- View appointments across the platform.
- Inspect appointment details.
- Create appointments on behalf of patients.
- Select a patient, doctor, available date, and time.
- Set an initial appointment status.
- Store the selected doctor's consultation fee on the appointment.
- Update appointment statuses.
- Delete appointments with confirmation.

#### 5. Users

- View user profiles in a table.
- Search users by name or email.
- Inspect user details.
- Create patient and admin accounts.
- Edit personal details and supported roles.
- Manage doctor accounts through the Doctors section.
- Delete profile records with confirmation.

#### Admin Profile

- Update personal information.
- Upload a profile photo.
- Access the profile page from the account dropdown beside Logout.

## Main User Scenarios

### Patient Booking Journey

1. A visitor registers as a patient and signs in.
2. The patient opens the doctor directory.
3. They filter by department and select a doctor.
4. They review the doctor's information and available appointments.
5. They choose a date and time and submit an appointment request.
6. They track the appointment from **My appointments**.
7. If eligible, they can cancel it after confirming the action.
8. After completion, they can review the visit from the doctor's page.

### Doctor Onboarding Journey

1. A doctor submits personal and professional registration details.
2. The account awaits administrative approval.
3. An admin reviews the application.
4. Approval enables access to the doctor dashboard.
5. A rejected doctor sees the rejected-account page.
6. An approved doctor can manage their profile, weekly schedule, and appointments.

### Doctor Appointment Journey

1. The doctor signs in and opens the dashboard.
2. They review appointments and patient information.
3. They complete an eligible appointment or cancel it.
4. The action requires confirmation.
5. The updated status becomes available in the relevant appointment views.

### Admin Booking Journey

1. The admin opens **Appointments**.
2. They select a patient and doctor.
3. They choose an available date and time.
4. They select an appointment status and submit.
5. The appointment is stored with the doctor's consultation fee.
6. The admin can later view, update, or delete it.

### Admin Operations Journey

1. The admin reviews pending doctor applications.
2. They approve or reject requests.
3. They maintain departments and doctor availability.
4. They manage doctor schedules and appointment records.
5. They search and maintain user profiles.

### Profile Update Journey

1. A signed-in user opens the account dropdown.
2. They select **Update profile**.
3. They edit their personal information or choose a new photo.
4. The form validates the input.
5. A successful save refreshes the account information.
- Database policies, constraints, and functions must enforce access rules and booking integrity. Frontend route guards do not replace database authorization.
- The repository contains an admin appointment policy migration, not the complete database schema.
- No automated test command is currently defined in `package.json`.
