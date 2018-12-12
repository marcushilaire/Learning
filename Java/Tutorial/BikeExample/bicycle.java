public class Bicycle {
    // Class names should be capitalized

    // the Bicycle class has
    // three fields
    public int cadence;
    public int gear;
    public int speed;

    private static int numberOfBicycles = 0;

    // constructors are called when the object is created from the class
    // they allow variables to be passed to the fields of an object
    // Bicycle myBike = new Bicycle(30, 0, 8);
    public Bicycle(int startCadence, int startSpeed, int startGear) {
        gear = startGear;
        cadence = startCadence;
        speed = startSpeed;

        // increment number of Bicycles
        // and assign ID number
        id = ++numberOfBicycles;
    }

    public Bicycle() {
        this(10, 0, 1);
    }
    // Java can differenciate between different constructors in the same class
    // this is becxause their signatures, in this case parameters, are different

    // the Bicycle class has
    // four methods
    // *the first/only word in a method should be a verb*

    // *example of method signature : say(int number)*
    // signatures allow methods of the same name with different parameters
    // say(int number) and say(String word) are different to the compiler
    // this is called overloading

    // void in the following methods refers to the type of data returned when the
    // method is invoked
    public void setCadence(int newValue) {
        cadence = newValue;
    }

    public void setGear(int newValue) {
        gear = newValue;
    }

    public void applyBrake(int decrement) {
        speed -= decrement;
    }

    public void speedUp(int increment) {
        speed += increment;
    }

    public static int getNumberOfBicycles() {
        return numberOfBicycles;
    }

}
