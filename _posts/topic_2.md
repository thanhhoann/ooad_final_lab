---
title: "Topic 2: The Student Stand-downs/Suspensions/Exclusions/Expulsions Process"
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---
## Use case Diagram
![Use-case Diagram](https://res.cloudinary.com/dddxcapaa/image/upload/v1653616461/Screen_Shot_2022-05-27_at_8.53.24_AM_ysekdg.png)

## Activity Diagram
![Activity Diagram](https://res.cloudinary.com/dddxcapaa/image/upload/v1653616461/Screen_Shot_2022-05-27_at_8.53.34_AM_cwjalp.png)

## Class Diagram
![Class Diagram](https://res.cloudinary.com/dddxcapaa/image/upload/v1653616461/Screen_Shot_2022-05-27_at_8.53.50_AM_z3a5dj.png)

## Sequence Diagram
![Sequence Diagram](https://res.cloudinary.com/dddxcapaa/image/upload/v1653616462/Screen_Shot_2022-05-27_at_8.53.41_AM_dv2wrr.png)


## Code

```java
import java.util.*;

public class AcademicAdvisor {

	public AcademicAdvisor() {
	}

	public string id;

	public string fullName;

	public string dateOfBirth;

	public string gender;

	public string phoneNumber;

	public string email;

	public void Attribute1;

	public void adviseStudent() {
		// TODO implement here
		return null;
	}

}

public class Applicant {

	public Applicant() {
	}

	public string id;

	public string fullName;

	public string address;

	public string phoneNumber;

	public string email;

	public string dateOfBirth;

	public boolean isPaid;

	public string applyMethod;

	public void submitDocuments() {
		// TODO implement here
		return null;
	}

	public void payTuitionFee() {
		// TODO implement here
		return null;
	}

	public void submitEnglishCertificate() {
		// TODO implement here
		return null;
	}

	public void registerEnglishPlacementTest() {
		// TODO implement here
		return null;
	}

	public void takeEnglishPlacementTest() {
		// TODO implement here
		return null;
	}

}

public class Student {

	public Student() {
	}

	public string id;

	public string fullName;

	public string age;

	public string dateOfBirth;

	public string gender;

	public string email;

	public string getID() {
		// TODO implement here
		return null;
	}

	public string getFullName() {
		// TODO implement here
		return null;
	}

	public string getEmail() {
		// TODO implement here
		return null;
	}

	public string getGender() {
		// TODO implement here
		return null;
	}

}

public class Situation {

	public Situation() {
	}

	public string id;

	public string reason;

	public string dateStart;

	public string dateEnd;

	public string solution;

	public string getDateStart() {
		// TODO implement here
		return null;
	}

	public string getDateEnd() {
		// TODO implement here
		return null;
	}

	public string getSolution() {
		// TODO implement here
		return null;
	}

	public string getId() {
		// TODO implement here
		return null;
	}

}


public class Score {

	public Score() {
	}

	public string id;

	public double totalScore;

	public double EnglishPlacementTestScore;

	public double EnglishEntranceScore;

	public double IELTS_Score;

	public double getEnglishPlacementTestScore() {
		// TODO implement here
		return 0.0d;
	}

	public double getTotalScore() {
		// TODO implement here
		return 0.0d;
	}

	public double getEnglishEntranceScore() {
		// TODO implement here
		return 0.0d;
	}

	public doulbe getIELTS_Score() {
		// TODO implement here
		return null;
	}

}

public class OAA {

	public OAA() {
	}

	public string email;

	public string phoneNumber;

	public string announceResult() {
		// TODO implement here
		return null;
	}

	public void receiveSubmittedDocuments() {
		// TODO implement here
		return null;
	}

	public void receiveFees() {
		// TODO implement here
		return null;
	}

	public void receiveCertificate() {
		// TODO implement here
		return null;
	}

	public void organizeEnglishPlacementTest() {
		// TODO implement here
		return null;
	}

	public void updateStudentScore() {
		// TODO implement here
		return null;
	}

	public void updateStudentInformation() {
		// TODO implement here
		return null;
	}

	public void updateStudentEnglishLevel() {
		// TODO implement here
		return null;
	}

	public void updateStudentMajor() {
		// TODO implement here
		return null;
	}

}

public class Faculty_Department {

	public Faculty_Department() {
	}

	public string id;

	public void Attribute1;

	public void checkStudentSituation() {
		// TODO implement here
		return null;
	}

	public void removeStudentAccount() {
		// TODO implement here
		return null;
	}

}
```
