/**
 *
 * @param {string} name
 * @returns {string}
 * @example
 * ```
 * goodbye('world') // => 'Goodbye, world!'
 * ```
 * This is a goodbye function. It says goodbye to the given name. It is a simple function that returns a string.
 */

import type { NameProps } from "./types";

export function goodbye({ name }: NameProps) {
	console.log(`Goodbye ${name || "World"} 🔥`);
}
