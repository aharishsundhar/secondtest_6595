import { Component, OnInit } from '@angular/core';
import { UpdatecoursesService } from './updatecourses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatecourses',
  templateUrl: './updatecourses.component.html',
  styleUrls: ['./updatecourses.component.scss'],
})

export class UpdatecoursesComponent implements OnInit {
    queryId: any;
    public course = {
        Name: '',
        email: '',
        description: '',
        language_tech: '',
    }

    constructor (
        private updatecoursesService: UpdatecoursesService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
            this.activatedRoute.queryParams.subscribe(params => { 
 	 	this.queryId = params.id;
 	 	this.GpGetNounById();
 	 	});
    }
    GpUpdate() {
        this.updatecoursesService.GpUpdate(this.course).subscribe(data => {
            this.course.Name = ''
 	 	this.course.email = ''
 	 	this.course.description = ''
 	 	this.course.language_tech = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpGetNounById() {
        this.updatecoursesService.GpGetNounById(this.queryId).subscribe(data => {
            this.course = data
        },
        error => {
            console.log('Error', error);
        });
    }
}