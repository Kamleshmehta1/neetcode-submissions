class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        const stack = [];

        const cars = position
            .map((ele, index) => {
                return [ele, speed[index]];
            })
            .sort((a, b) => b[0] - a[0]);

        for (let i = 0; i < cars.length; i++) {
            const [pos, spd] = cars[i];

            const time = (target - pos) / spd;

            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }
        }

        return stack.length;
    }
}
