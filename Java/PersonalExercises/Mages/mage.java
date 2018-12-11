class Mage {

    int spellPower = 15;
    int critChance = 30;
    int haste = 15;
    String title;
    String specialization;

    void combustion() {
        critChance = 100;
    }

    void icyVeins() {
        haste += 30;
    }

    void arcanePower() {
        spellPower *= 4;
    }

    void personalize(String name, String spec) {
        title = name;
        specialization = spec;
    }

    void stats() {
        System.out.println("Crit: " + critChance + " Haste: " + haste + " Spellpower: " + spellPower);
    }

    void introduction() {
        System.out.println("My name is " + title + " the " + specialization + " mage.");
    }
}