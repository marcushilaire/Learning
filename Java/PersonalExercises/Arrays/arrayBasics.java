class ArrayDemo {
    public static void main(String... args) {
        // declares an array of integers
        // int[] anArray;

        // *note that arrays in java are immutable?*
        // *an array can only hold a single datatype*

        // other options include
        // byte[] anArrayOfBytes;
        // short[] anArrayOfShorts;
        // long[] anArrayOfLongs;
        // float[] anArrayOfFloats;
        // double[] anArrayOfDoubles;
        // boolean[] anArrayOfBooleans;
        // char[] anArrayOfChars;
        // String[] anArrayOfStrings;

        // float anArrayOfFloats[]; *this works but is discouraged*

        // allocates memory for 10 integers
        // anArray = new int[10];

        // initialize first element
        // anArray[0] = 100;
        // initialize second element
        // anArray[1] = 200;

        // System.out.println("Element at index 0: " + anArray[0]);
        // System.out.println("Element at index 1: " + anArray[1]);
        // System.out.println("Element at index 2: " + anArray[2]);

        // alternate method that creates initializes and fills an array all at once
        int[] anArray = { 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 };

        for (int x : anArray) {// for each item x in the array "anArray"
            System.out.println(x);// print the value x
        }
    }
}