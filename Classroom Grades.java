//author Kristina Urboniene
// date 22/04/2018

import java.util.ArrayList;
public class GradeAnalyzer{
public GradeAnalyzer(){}
public int getAverage(ArrayList <Integer> grades){
   if (grades.size() < 1){
    System.out.println("ArrayList is empty");
    return 0;
  }else{
   int sum = 0;
   
 //Create a for each block that iterates through each grade in the grades ArrayList.
 
  for (Integer grade: grades){
    sum = sum + grade;
  }
   //Outside of the for each loop, calculate the average of the grades. Create an int called average and set it equal to the sum divided by the size of grades.
   
 int average = sum / grades.size();
  System.out.println("The Average is "+ average+".");
  return average;   
  }
  }
  public static void main(String[] args){
    //Inside of main create an ArrayList object that stores integers and call it myClassroom.
    ArrayList myClassroom = new ArrayList();
    myClassroom.add(98);
    myClassroom.add(92);
    myClassroom.add(88);
    myClassroom.add(75);
    myClassroom.add(61);
    myClassroom.add(89);
    myClassroom.add(95);
    GradeAnalyzer myAnalyzer = new GradeAnalyzer();
   //Now call the getAverage method on myAnalyzer and specify myClassroom as the argument (parameter).
    myAnalyzer.getAverage(myClassroom);
  }
}
