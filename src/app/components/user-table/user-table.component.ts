import { Component } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {

  users = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Admin',
      email: 'john@example.com',
      phoneNumber: '123-456-7890',
      currentGradeId: 5,
      isEditing: false
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'User',
      email: 'jane@example.com',
      phoneNumber: '987-654-3210',
      currentGradeId: 4,
      isEditing: false
    },
    // Add more user objects as needed
  ];

  editUser(user: any) {
    if (user.isEditing) {
      // Save the edited data and disable editing
      user.isEditing = false;
    } else {
      // Enable editing for the user
      user.isEditing = true;
    }
  }
  deleteUser(index: number) {
    // Delete the user by index
    this.users.splice(index, 1);
  }

  addUser() {
    // Implement add functionality here or navigate to a form component
    console.log('Adding user');
  }

}
