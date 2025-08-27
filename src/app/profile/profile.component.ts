import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any;
  empId: number = 16532; // hardcoded for now, can make dynamic later
  isEditing: boolean = false;

  // keep track of expanded/collapsed state
  expanded: { [key: string]: boolean } = {};

  // store API data for each section
  data: { [key: string]: any } = {};

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile(this.empId).subscribe(data => {
      this.profile = data;
     console.log("Profile:", this.profile);
    });
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (!img.src.includes('default-avatar.png')) {
      img.src = 'assets/images/default-avatar.png';
    }
  }

  toggleSection(section: string) {
    const isExpanded = this.expanded[section];

    if (!isExpanded) {
      switch (section) {
        case 'Address Information':
          this.profileService.getAddress(this.empId).subscribe(data => this.data[section] = data);
          console.log(this.data);
          break;
        case 'Emergency Contact':
          this.profileService.getEmergencyContact(this.empId).subscribe(data => this.data[section] = data);
          console.log(this.data);
          break;
        case 'Education':
          this.profileService.getEducation(this.empId).subscribe(data => this.data[section] = data);
          console.log(this.data);
          break;
        case 'Family Details':
          this.profileService.getFamilyDetails(this.empId).subscribe(data => this.data[section] = data);
          console.log(this.data);
          break;
        case 'ESI Number / Mediclaim Details':
          this.profileService.getEsiDetails(this.empId).subscribe(data => this.data[section] = data);
          console.log(this.data);
          break;
      }
    }

    this.expanded[section] = !isExpanded;
  }
  getKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }

  toggleEdit() {
  this.isEditing = !this.isEditing;
}
}
