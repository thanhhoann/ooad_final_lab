---
title: "Topic 6: The Grading Process For Students"
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---
## Use case Diagram
![Use-case Diagram](https://res.cloudinary.com/dddxcapaa/image/upload/v1653617458/Screen_Shot_2022-05-27_at_9.10.44_AM_nwgg2u.png)

## Activity Diagram
![Activity Diagram](https://res.cloudinary.com/dddxcapaa/image/upload/v1653617459/Screen_Shot_2022-05-27_at_9.10.39_AM_cr3rva.png)

## Class Diagram
![Class Diagram](https://res.cloudinary.com/dddxcapaa/image/upload/v1653617458/Screen_Shot_2022-05-27_at_9.10.31_AM_pnyn44.png)

## Sequence Diagram
![Sequence Diagram](https://res.cloudinary.com/dddxcapaa/image/upload/v1653617459/Screen_Shot_2022-05-27_at_9.10.22_AM_ofzfjb.png)


## Code

```java
package topic6_Model;
 
public class Score {
 
    /**
     * Default constructor
     */
    public Score() {
    }
 
    private int score;
 
    public Score(int score) {
        this.score = score;
    }
 
    /**
     * @return
     */
    public int getScore() {
        // TODO implement here
        return score;
    }
 
}

package topic6_Model;
 
public class Student {
 
    /**
     * Default constructor
     */
    public Student() {
    }
 
    private string full_name;
    private string student_id;
    private string email;
 
    public Student(string full_name, String student_id, string email) {
        this.full_name = full_name;
        this.student_id = student_id;
        this.email = email;
    }
 
    public String getStudentFullname(){
        return full_name;
    }
 
    public void setStudentFullname(String full_name){
        this.full_name = full_name;
    }
 
    public String getID(){
        return student_id;
    }
 
    public void setID(String student_id){
        this.student_id = student_id;
    }
 
    public String getStudenEmail(){
        return email;
    }
 
    public void setStudenEmail(String email){
        this.email = email;
    }
 
    /**
     * @return
     */
    public void submitAssignment() {
        // TODO implement here
        return Assignment;
    }
 
    /**
     * @return
     */
    public void checkGrade() {
        system.out.print(submitAssignment());
        system.out.print(gradeAssignment());
        if (getScore() == gradeAssignment()){
            return TRUE;
        }
        else
        return FALSE;
    }
 
}

package topic6_Model;
 
public class OAA {
 
    /**
     * Default constructor
     */
    public OAA() {
    }
 
    private string email;
 
    public OAA(String email) {
        this.email = email;
    }
 
    public String getemail(){
        return email;
    }
 
    public void setemail(String email){
        this.email = email;
    }
 
    /**
     * @return
     */
    public void updateEdusoft() {
        // TODO implement here
        return "Name: " + getStudentFullname() + "\nCourse: " + getcourse() + "\nScore: " + getScore();
    }
 
}

package topic6_Model;
 
public class Instructor {
 
    /**
     * Default constructor
     */
    public Instructor() {
    }
 
    private string full_name;
    private string course;
    private string email;
 
    public Instructor(string full_name, string course, string email) {
        this.full_name = full_name;
        this.course = course;
        this.email = email;
    }
 
    public String getInstructorFullname(){
        return full_name;
    }
 
    public void setInstructorFullname(String full_name){
        this.full_name = full_name;
    }
 
    public String getcourse(){
        return course;
    }
 
    public void setcourse(String course){
        this.course = course;
    }
 
    public String getInstructorEmail(){
        return email;
    }
 
    public void setInstructorEmail(String email){
        this.email = email;
    }
 
    /**
     * @return
     */
    public int gradeAssignment() {
        System.out.print(submitAssignment());
        return Score;
    }
 
    /**
     * @return
     */
    public void updateBB() {
        // TODO implement here
        return "Name: " + getStudentFullname() + "\nScore: " + gradeAssignment();
    }
 
}
```
