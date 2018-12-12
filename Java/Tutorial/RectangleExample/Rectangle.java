public class Rectangle {
    private int width = 0;
    private int height = 0;
    private Point origin;

    // four constructors
    public Rectangle() { // if new Rectangle is called without arguments
        origin = new Point(0, 0);
    }// a rectangle with 0 width and height is created at (0,0)

    public Rectangle(Point p) {// if new Rectangle is called with only Point P
        origin = p;
    }// a rectangle with 0 width and height is created at Point p

    public Rectangle(int w, int h) {// if new Rectangle is called with Width W and Height H
        origin = new Point(0, 0);
        width = w;
        height = h;
    }// a rectanlge with Width W and Height H is created at (0,0)

    public Rectangle(Point p, int w, int h) {// if new Rectangle is called with Width W and Height H and Point P
        origin = p;
        width = w;
        height = h;
    }// a rectanlge with Width W and Height H is created at Point P

    // a method for moving the rectangle
    public void move(int x, int y) {
        origin.x = x;
        origin.y = y;
    }

    public int getX() {
        return origin.x;
    }

    public int getY() {
        return origin.y;
    }

    public int getDimensions(String dimension) {
        int output = 0;
        switch (dimension) {
        case "width": {
            output = width;
            break;
        }

        case "height": {
            output = height;
            break;
        }

        }
        return output;
    }

    // a method for computing the area of the rectangle
    public int getArea() {
        return width * height;
    }
}