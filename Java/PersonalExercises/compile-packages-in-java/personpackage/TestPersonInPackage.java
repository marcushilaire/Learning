import personpackage.Person;

public class TestPersonInPackage {
    public static void main(String... args) {
        Person person = new Person();
        person.setFirstName("Darkness");
        person.setLastName("my old friend");

        System.out.println("compiled: " + person.getFirstName() + person.getLastName());
    }
}