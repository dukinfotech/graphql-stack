import { Injectable } from '@nestjs/common';

@Injectable()
export class HelpersService {
  arrayToPostgresArray<T>(array: T[]): string {
    const escapeString = (s: any): string =>
      `"${String(s).replace(/"/g, '""')}"`; // Escape double quotes

    const arrayLiteral = array
      .map((element) => {
        if (element === null || element === undefined) {
          return 'NULL';
        } else if (typeof element === 'string') {
          return escapeString(element); // Strings need to be quoted and escaped
        } else if (Array.isArray(element)) {
          return this.arrayToPostgresArray(element); // Recursively handle nested arrays
        } else {
          return String(element);
        }
      })
      .join(',');

    return `{${arrayLiteral}}`;
  }
}
