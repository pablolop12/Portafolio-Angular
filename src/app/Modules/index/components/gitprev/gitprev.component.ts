import { Component, OnInit } from '@angular/core';
import { GitprevService } from '../../../../services/gitprev.service';

@Component({
  selector: 'app-gitprev',
  templateUrl: './gitprev.component.html',
  styleUrl: './gitprev.component.scss'
})
export class GitprevComponent implements OnInit {
  profile: any;

  constructor(private gitprevService: GitprevService) {}

  ngOnInit(): void {
    this.gitprevService.getProfile().subscribe(data => {
      this.profile = data;
    });
  }


}