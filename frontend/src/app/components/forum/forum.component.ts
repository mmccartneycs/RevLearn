import { Component, OnInit } from '@angular/core';
import { Forum } from 'src/app/models/forum';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  
  forums: Forum[] = [];
  newPost: Forum;

  constructor(private forumService: ForumService) {
    this.newPost = {
      postId: 0,
      courseId: 0,
      userId: 0,
      textBody: '',
      createdAt: new Date(),
    };
   }

  ngOnInit(): void {
    this.forumService.getAllForumPostsById(1).subscribe(posts => {
      this.forums = posts;
      console.log(this.forums)
    });
    this.newPost = new Forum();
  }

  addPost(): void {
    this.forumService.postForumPost(this.newPost).subscribe(response => {
      console.log(response);
      // update the list of forum posts after the new post is added
      this.forumService.getAllForumPostsById(1).subscribe(posts => {
        this.forums = posts;
      });
      // reset the form
      this.newPost = new Forum();
    });
  }

}