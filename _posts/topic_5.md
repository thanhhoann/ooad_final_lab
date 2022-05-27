---
title: "Topic 5: The Tuition Fee Payment Process"
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---
## Use case Diagram
![Use-case Diagram](https://res.cloudinary.com/dddxcapaa/image/upload/v1653617316/Screen_Shot_2022-05-27_at_9.08.19_AM_dxltdu.png)

## Activity Diagram
![Activity Diagram](https://res.cloudinary.com/dddxcapaa/image/upload/v1653617314/Screen_Shot_2022-05-27_at_9.08.11_AM_h4leit.png)

## Class Diagram
![Class Diagram](https://res.cloudinary.com/dddxcapaa/image/upload/v1653617314/Screen_Shot_2022-05-27_at_9.07.53_AM_mbtdkb.png)

## Sequence Diagram
![Sequence Diagram](https://res.cloudinary.com/dddxcapaa/image/upload/v1653617314/Screen_Shot_2022-05-27_at_9.07.46_AM_ty3n04.png)


## Code

```java
package topic5_model;
 
public class Student {
 
    /**
     * Default constructor
     */
    public Student() {
    }
 
    private string fullname;
    private string student_id;
    private string email;
 
    public Student(string fullname, string student_id, string email) {
        this.fullname = fullname;
        this.student_id = student_id;
        this.email = email;
    }
 
    public string getStudentFullname(){
        return fullname;
    }
 
    public void setStudentFullname(String fullname){
        this.fullname = fullname;
    }
 
    public string getstudent_id(){
        return student_id;
    }
 
    public void setstudent_id(String student_id){
        this.student_id = student_id;
    }
 
    public string getStudentEmail(){
        return email;
    }
 
    public void setStudentEmail(String email){
        this.email = email;
    }
 
    public float getTuitionFee(){
        return TuitionFee;
    }
 
    /**
     * @return
     */
    public float payTuitionFee() {
        // TODO implement here
        return TuitionFee;
    }
 
    /**
     * @return
     */
    public void checkReceipt() {
        if (TuitionFee == getTuitionFee()){
            if (owedTuitionFee == calculateTuitionFee()){
                return TRUE;
            }
        }
        else
        return FALSE;
    }
 
}

package topic5_model;
 
public class DFP {
 
    /**
     * Default constructor
     */
    public DFP() {
    }
 
    private string email;
    private string phone_number;
 
    public DFP(String email, String phone_number) {
        this.email = email;
        this.phone_number = phone_number;
    }
 
    public String getDFPemail(){
        return email;
    }
 
    public void setDFPemail(){
        this.email = email;
    }
 
    public String getphone_number(){
        return phone_number;
    }
 
    public void setphone_number(){
        this.phone_number = phone_number;
    }
 
    /**
     * @return
     */
    public float calculateTuitionFee() {
        // TODO implement here
        return owedTuitionFee - payTuitionFee();
    }
 
    /**
     * @return
     */
    public void printReceipt() {
        // TODO implement here
        return "Name: " + getfullname() + "\nStudent ID: " + getstudent_id() + "\nTuition fee paid: " + payTuitionFee() + "\nOwe: " + calculateTuitionFee();
    }
 
    /**
     * @return
     */
    public void update() {
        // TODO implement here
        return update;
    }
 
}

package topic5_model;
 
public class Accounting_Department {
 
    /**
     * Default constructor
     */
    public Accounting_Department() {
    }
 
    /**
     *
     */
    private string email;
 
    public Accounting_Department(String email) {
        this.email = email;
    }
 
    public String getAPemail(){
        return email;
    }
 
    public void setAPemail(){
        this.email = email;
    }
 
    /**
     * @return
     */
    public void receiveTuitionFee() {
        // TODO implement here
        return "Tuition Fee received: " + TuitionFee;
    }
 
}
```
