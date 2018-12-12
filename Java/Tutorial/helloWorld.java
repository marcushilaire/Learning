class HelloWorldApp {
    public static void main(String[] args) {// the main method
        // this is where all methods in the application will be invoked

        // String[] args this indicates that the one argument being passed is an array
        // of strings

        // They are command line arguments just like the process.argv array in
        // javascript.

        System.out.println("Hello World!"); // Display the string.
        for (String arg : args) {
            System.out.println(arg);
        } // forEach to print all command line arguments
    }
}