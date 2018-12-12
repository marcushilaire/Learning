class Loops {

    static void whileLoop(int count) {
        while (count <= 10) {
            System.out.println("While Count: " + count);
            count++;
        }
    }

    static void doWhileLoop(int count) {
        do {
            System.out.println("Do While Count: " + count);
            count++;
        } while (count <= 15);
    }

    public static void main(String[] args) {
        // System.out.println("running");
        Loops.whileLoop(1);
        Loops.doWhileLoop(10);
    }
}