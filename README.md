Title: Real-Time Todo Management System
Develop a real-time styled Todo Management System using Node.js, Express.js, EJS, and local array/object storage where users can manage daily tasks through a professional interface.
The application should simulate how a real productivity system works:
Add tasks
Track task progress
Edit task details
Delete tasks

1. Dashboard Module
The dashboard acts as the home page of the application.
UI Contains:
Header section
Task statistics cards
Add task button
Task table
Dashboard Cards:
Total Tasks
Pending Tasks
Completed Tasks

<img width="1354" height="867" alt="image" src="https://github.com/user-attachments/assets/a8bad843-b7ec-4fe5-aa7e-1199dd735f35" />

2. Task Creation Module
Input Fields:
Task Title
Task Description
Task Priority
Logic:
Accept form data
Generate unique task ID
Store inside array object

<img width="645" height="867" alt="Screenshot 2026-05-21 141731" src="https://github.com/user-attachments/assets/9e9fabf4-b2ae-42c0-bfb0-6cab8ad46ff3" />


3. Task Listing Module
Display Table Fields:
Task ID
Title
Description
Priority
Status
Actions
Actions:
Edit
Delete
Status Change

<img width="719" height="191" alt="Screenshot 2026-05-21 141806" src="https://github.com/user-attachments/assets/979fff0e-f056-494b-975d-ac191829c193" />


4. Task Update Module
Logic:
Open edit page using task ID
Load previous values
Update task object

<img width="642" height="750" alt="Screenshot 2026-05-21 141927" src="https://github.com/user-attachments/assets/d415bc25-e3da-44c4-b03f-d8babd856bf4" />

5. Task Delete Module
Logic:
Select task by ID
Remove from array


<img width="241" height="143" alt="Screenshot 2026-05-21 141958" src="https://github.com/user-attachments/assets/72da1a4b-d22a-4c4b-b369-8e24e418fdbb" />


6. Task Status Management Module
Status Flow:
Pending → In Progress → Completed

<img width="127" height="136" alt="image" src="https://github.com/user-attachments/assets/3473ea0e-c8c7-4084-a6c2-f03d963d165b" />
<img width="302" height="804" alt="image" src="https://github.com/user-attachments/assets/94361b90-f8eb-4cb6-a5d3-7f59e597aa40" />






