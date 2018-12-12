class BreakWithLabelDemo {
    public static void main(String[] args) {

        int[][] arrayOfInts = { { 32, 87, 3, 589 }, { 12, 1076, 2000, 8 }, { 622, 127, 77, 955 } };
        int searchfor = 12;
        // int[] singleArray = { 3, 4, 5 };
        // int j = 0;
        boolean foundIt = false;

        // search: for (i = 0; i < arrayOfInts.length; i++) { // my first time seeing
        // lableling
        // for (j = 0; j < arrayOfInts[i].length; j++) {
        // if (arrayOfInts[i][j] == searchfor) {
        // foundIt = true;
        // break search; // Stops the outer loop which will stop the inner loop as well
        // }
        // }
        // }

        // Refactored using the prefered form of for
        search: for (int[] i : arrayOfInts) {
            for (int j : i) {
                if (j == searchfor) {
                    foundIt = true;
                    break search;
                }
            }
        }

        if (foundIt) {
            System.out.println("Found " + searchfor);
            // System.out.println("Found " + searchfor + " at " + i + ", " + j);
        } else {
            System.out.println(searchfor + " not in the array");
        }
    }
}