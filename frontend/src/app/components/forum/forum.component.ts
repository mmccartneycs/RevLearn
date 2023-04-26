import { Component, OnInit, OnDestroy } from '@angular/core';
import { Forum } from 'src/app/models/forum';
import { ForumService } from 'src/app/services/forum.service';
import { Editor } from 'ngx-editor';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit, OnDestroy{
  editor: Editor = new Editor;
  html: '' = "";
  forums: Forum[] = [];
  newPost: Forum;
  student: Student[] = [];

  constructor(private forumService: ForumService) {
    this.newPost = {
      postId: 0,
      courseId: 0,
      userId: 0,
      textBody: '',
      createdAt: new Date(),
    };

  }

  ngOnDestroy(): void {
    this.editor.destroy();;
  }
   
  ngOnInit(): void {
    this.editor = new Editor()
    this.forumService.getAllForumPostsById(1).subscribe(posts => {
      this.forums = posts;
      console.log(this.forums)
    });
    
    this.newPost = new Forum();

    this.forumService.getAllStudentNames().subscribe(temp => {
      this.student = temp as any[];
      console.log(this.student);
    });
  }


  addPost(): void {
    console.log("testing" + this.html)
    var temp = localStorage.getItem('userId');
    if (temp !== null) {
      this.newPost.userId = parseInt(temp);
      console.log("This is the test" + this.newPost.userId)
    }
    this.newPost.courseId = 1;
    console.log(this.newPost.userId)
    this.newPost.textBody = this.html;
    this.forumService.postForumPost(this.newPost).subscribe(response => {
      console.log(response);
      // update the list of forum posts after the new post is added
      this.forumService.getAllForumPostsById(1).subscribe(posts => {
        this.forums = posts;
        this.html = '';
      });})

  }

  getAllStudentNames() {
    this.forumService.getAllStudentNames().subscribe(temp => {
      this.student = temp as any[];
      console.log(this.student);
    })
  }
}

