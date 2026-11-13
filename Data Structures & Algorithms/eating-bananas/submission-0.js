class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const max = Math.max(...piles);
        let min = Infinity;

        let left = 0;
        let right = max;

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);

            let totalHours = 0;

            for (let i = 0; i < piles.length; i++) {
                const timeToEatAPile = Math.ceil(piles[i] / mid);
                totalHours += timeToEatAPile;
            }

            if (totalHours <= h) {
                min = Math.min(min, mid);
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return min;
    }
}
