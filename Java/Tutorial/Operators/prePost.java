class PrePostDemo {
    public static void main(String[] args) {
        int i = 3;

        i++;
        System.out.println(i);// prints 4

        ++i;
        System.out.println(i);// prints 5

        System.out.println(++i);// prints 6
        // ++i is represented by the incremented variable

        System.out.println(i++);// prints 6
        // i++ represents the variable then increments it

        System.out.println(i);// prints 7
    }
}