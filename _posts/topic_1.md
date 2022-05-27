---
title: 'Topic 1: The New Student Enrollment Process'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---

## Use case Diagram
![Use-case Diagram](https://res.cloudinary.com/dddxcapaa/image/upload/v1653582812/Screen_Shot_2022-05-26_at_11.33.27_PM_hop6gt.png)

## Activity Diagram
![Activity Diagram](https://res.cloudinary.com/dddxcapaa/image/upload/v1653583036/Screen_Shot_2022-05-26_at_11.36.34_PM_gznpnr.png)

## Class Diagram
![Class Diagram](https://res.cloudinary.com/dddxcapaa/image/upload/v1653583050/Screen_Shot_2022-05-26_at_11.36.50_PM_cjhucc.png)

## Sequence Diagram
![Sequence Diagram](https://res.cloudinary.com/dddxcapaa/image/upload/v1653583055/Screen_Shot_2022-05-26_at_11.37.00_PM_gcqta2.png)

## Code
```java
import java.util.*;

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

public class Major {

	public string id;
	public string fullName;
	public string program;

	public Major() {
	}

	public string getFullName() {
		// TODO implement here
		return null;
	}

	public string getProgram() {
		// TODO implement here
		return null;
	}

}

public class OAA {

	public string email;
	public string phoneNumber;

	public OAA() {
	}

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

public class Score {


	public string id;
	public double totalScore;
	public double EnglishPlacementTestScore;
	public double EnglishEntranceScore;
	public double IELTS_Score;

	public Score() {
	}

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

public class Student {

	public string id;
	public string fullName;
	public string age;
	public string dateOfBirth;
	public string gender;
	public string email;

	public Student() {
	}

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
```

