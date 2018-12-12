import org.w3c.dom.css.Rect;

public class CreateObjectDemo {

    public static void main(String[] args) {

        // Declare and create a point object and two rectangle objects.
        Point originOne = new Point(23, 94);
        Rectangle rectOne = new Rectangle(originOne, 100, 200);
        Rectangle rectTwo = new Rectangle(50, 100);
        Rectangle rectThree = new Rectangle();

        // display rectOne's width, height, and area
        System.out.println("Width of rectOne: " + rectOne.getDimensions("width"));
        System.out.println("Height of rectOne: " + rectOne.getDimensions("height"));
        System.out.println("Area of rectOne: " + rectOne.getArea());
        System.out.println("Area of rectThree: " + rectThree.getArea());

        // set rectTwo's position
        rectTwo.move(originOne.x, originOne.y);

        // display rectTwo's position
        System.out.println("X Position of rectTwo: " + rectTwo.getX());
        System.out.println("Y Position of rectTwo: " + rectTwo.getY());

        // move rectTwo and display its new position
        rectTwo.move(40, 72);
        System.out.println("X Position of rectTwo: " + rectTwo.getX());
        System.out.println("Y Position of rectTwo: " + rectTwo.getY());
    }
}// compiling this class will compile all other referenced classes