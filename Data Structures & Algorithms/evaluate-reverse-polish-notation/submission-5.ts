class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const operandsStack: number[] = [];

        const operatorToFunc: Record<string, (a: number, b: number) => number> = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => Math.trunc(a / b),
        }

        for (let i = 0; i < tokens.length; i++) {
            if (operatorToFunc[tokens[i]]) {
                const b = operandsStack.pop();
                const a = operandsStack.pop();
                const func = operatorToFunc[tokens[i]];
                operandsStack.push(func(a, b));
            } else {
                operandsStack.push(parseInt(tokens[i]));
            }
        }

        return operandsStack[0];
    }
}
