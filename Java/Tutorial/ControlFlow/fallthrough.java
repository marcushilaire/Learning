import java.util.ArrayList;

class SwitchDemoFallThrough {

    public static void main(String[] args) {

        ArrayList<String> futureMonths = new ArrayList<String>();
        // Originally written as:
        // java.util.ArrayList<String> futureMonths = new java.util.ArrayList<String>();
        // this is made shorter by "import java.util.ArrayList;" on line one

        // This is also my first introduction to the ArrayList class
        // it behaves more like the javascript arrays I am used to

        int month = 8;

        switch (month) {
        case 1:
            futureMonths.add("January");
            break;
        case 2:
            futureMonths.add("February");
            break;
        case 3:
            futureMonths.add("March");
            break;
        case 4:
            futureMonths.add("April");
            break;
        case 5:
            futureMonths.add("May");
            break;
        case 6:
            futureMonths.add("June");
            break;
        case 7:
            futureMonths.add("July");
            break;
        case 8:
            futureMonths.add("August");
            break;
        case 9:
            futureMonths.add("September");
            break;
        case 10:
            futureMonths.add("October");
            break;
        case 11:
            futureMonths.add("November");
            break;
        case 12:
            futureMonths.add("December");
            break;
        default: // anything that is not in any of the previous cases
            break;
        }

        if (futureMonths.isEmpty()) {
            System.out.println("Invalid month number");
        } else {
            for (String monthName : futureMonths) {
                System.out.println(monthName);
            }
        }
    }
}