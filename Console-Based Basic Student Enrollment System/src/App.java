import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

class Student {
    String name;
    String course;
    String subject;

    Student(String name, String course, String subject) {
        this.name = name;
        this.course = course;
        this.subject = subject;
    }

    void displayInfo() {
        System.out.println("Student Name: " + name);
        System.out.println("Course: " + course);
        System.out.println("Subject: " + subject);
    }
}

public class App {

    public static void main(String[] args) throws Exception {
        ArrayList<Student> students = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        Scanner scannerStudent = new Scanner(System.in);
        ArrayList<String> courses = new ArrayList<>(Arrays.asList("Computer Science", "Business Administration", "Engineering", "Arts"));
        ArrayList<String> subjects = new ArrayList<>(Arrays.asList("cs", "bs", "eng", "fil"));

        while (true) {
            System.out.println("*******************************************");
            System.out.println("Welcome to Basic Student Information System");
            System.out.println("*******************************************");
            System.out.println("1. Display Student Information");
            System.out.println("2. Add a Student");
            System.out.println("3. End");
            System.out.println();
            System.out.println("Enter a number:");
            int SelectNumb = scanner.nextInt();
            System.out.println();
            if(SelectNumb == 1){
                if(students.isEmpty())
                {
                    System.out.println();
                    System.out.println("No Student has been found");
                    System.out.println();
                } else {
                    System.out.println();
                    System.out.println("\nStudent Information:");
                    System.out.println();
                    for (Student student : students) {
                        student.displayInfo();
                        System.out.println();
                    }
                }
            } else if (SelectNumb == 2) {
            System.out.println("Enter student name: ");
            String name = scannerStudent.nextLine();

            System.out.println("Available Courses:");
            for (int i = 0; i < courses.size(); i++) {
                System.out.println((i + 1) + ". " + courses.get(i));
            }
            System.out.println("Select course by number: ");
            int courseIndex = Integer.parseInt(scannerStudent.nextLine()) - 1;
            String course = courses.get(courseIndex);

            System.out.println("Available Subjects:");
            for (int i = 0; i < subjects.size(); i++) {
                System.out.println((i + 1) + ". " + subjects.get(i));
            }

            System.out.println("Enter subject: ");
            int subjectIndex = Integer.parseInt(scannerStudent.nextLine()) - 1;
            String subject = subjects.get(subjectIndex);

            students.add(new Student(name, course, subject));
            System.out.println();
            System.out.println("Student " + name + " has been Added");
            System.out.println();
            } else if (SelectNumb == 3){
                scannerStudent.close();
                scanner.close();
                break;
            } else {
                System.out.println("Please Enter again.");
            }
        }

    }
    


}
