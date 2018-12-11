class KirinTor {
    public static void main(String[] args) {
        Mage Jaina = new Mage();
        Mage Khadgar = new Mage();

        Jaina.icyVeins();
        Jaina.personalize("Jaina", "Frost");
        Jaina.stats();
        Jaina.introduction();

        Khadgar.arcanePower();
        Khadgar.personalize("Khadgar", "Arcane");
        Khadgar.stats();
        Khadgar.introduction();

    }
}