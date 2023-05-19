// The Office II - Boredom Score

// DESCRIPTION:
// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an array of Person objects with each instance containing the name and department for a staff member.

// public class Person {
//   public final String name;        // name of the staff member
//   public final String department;  // department they work in
// }
// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

// The Office I - Outed
// The Office III - Broken Photocopier
// The Office IV - Find a Meeting Room
// The Office V - Find a Chair

public class TheOffice {
    public static String boredom(Person[] staff) {
      int sumBoredom = 0;
      for(Person person : staff){
        if(person.department.equals("accounts")){
          sumBoredom += 1;
        }else if(person.department.equals("finance")){
          sumBoredom+= 2;
        }else if(person.department.equals("canteen")){
          sumBoredom += 10;
        }else if (person.department.equals("regulation")){
          sumBoredom += 3;
        }else if (person.department.equals("trading")){
          sumBoredom += 6;
        }else if (person.department.equals("change")){
          sumBoredom += 6;
        }else if (person.department.equals("IS")){
          sumBoredom += 8;
        }else if (person.department.equals("retail")){
          sumBoredom += 5;
        }else if (person.department.equals("cleaning")){
          sumBoredom += 4;
        }else if (person.department.equals("pissing about")){
          sumBoredom += 25;
        }
      }
      if(sumBoredom <= 80){
        return "kill me now";
      }else if(sumBoredom < 100 && sumBoredom > 80){
        return "i can handle this";
      }
       return "party time!!"; 
    }
  }