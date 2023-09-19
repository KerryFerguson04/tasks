/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        const newBook = [numbers[0]];
        newBook.splice(2, 0, numbers[0]);
        return newBook;
    } else {
        const newBook = [numbers[0]];
        newBook.splice(2, 0, numbers[numbers.length - 1]);
        return newBook;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const doubled = numbers.map((numbers: number): number => numbers * 3);
    return doubled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ints = numbers.map((numbers: string): number => parseInt(numbers));
    const fullInts = ints.map((ints: number): number =>
        Number.isNaN(ints) ? (ints = 0) : ints
    );
    return fullInts;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDollars = amounts.map((amounts: string): string =>
        amounts.charAt(0) === "$" ? (amounts = amounts.slice(1)) : amounts
    );
    const ints = noDollars.map((amounts: string): number => parseInt(amounts));
    const fullInts = ints.map((ints: number): number =>
        Number.isNaN(ints) ? (ints = 0) : ints
    );
    return fullInts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestions = messages.filter(
        (messages: string): boolean => messages[messages.length - 1] != "?"
    );
    const fullHype = noQuestions.map((noQuestions: string): string =>
        noQuestions[noQuestions.length - 1] === "!"
            ? noQuestions.toUpperCase()
            : noQuestions
    );
    return fullHype;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.filter((words: string): boolean => words.length < 4);
    return short.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    } else {
        const noRGB = colors.filter(
            (colors: string): boolean =>
                colors != "red" && colors != "green" && colors != "blue"
        );
        if (noRGB.length > 0) {
            return false;
        }
        return true;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    } else {
        const sum = addends.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const text = addends.join("+");
        return sum + "=" + text;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const check = values.every((values: number): boolean => values > 0);
    if (check === true) {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const newArray = [...values, sum];
        return newArray;
    } else {
        const firstNegative = values.findIndex(
            (values: number): boolean => values < 0
        );
        const firstChunk = values.slice(0, firstNegative);
        const sum = firstChunk.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const newArray = [...values];
        newArray.splice(firstNegative + 1, 0, sum);
        return newArray;
    }
}
