function createMagicPotion(potions, target) {
    const map = {};

    for (let i = 0; i < potions.length; i++) {
        const complement = target - potions[i];

        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }
        map[potions[i]] = i;
    }
  return undefined
}