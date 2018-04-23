// Author Kristina Urboniene
// Date 22/04/2018

import java.util.HashMap;
public class Library{
public Library(){}  
public void getFinishedBooks(HashMap<String, Boolean> library){
  if (library.size() <1 ){
  System.out.println("No books");  
  }else{
  for (String books: library.keySet()){
  if (library.get(books)){
  System.out.println(books + " " + "book" + " " + "was read" + "-" + library.get(books));  
  }  
  }    
  }
 }
  public static void main(String[] args){
  HashMap<String, Boolean> myBooks= new HashMap<String, Boolean>(); 
  myBooks.put("Road Down The Funnel", true);
  myBooks.put("Rat: A Biology", false);
  myBooks.put("TimeIn", true);
  myBooks.put("3D Food Printing", false);
  Library myLibrary = new Library();
  myLibrary.getFinishedBooks(myBooks); 
}
}  
