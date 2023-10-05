// To parse this data:
//
//   import { Convert } from "./file";
//
//   const exerciseMedia = Convert.toExerciseMedia(json);

export interface ExerciseMedia {
  65: number | string;
  __EMPTY?: string;
  __EMPTY_1: string;
  __EMPTY_2?: string;
  __EMPTY_3: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toExerciseMedia(json: string): ExerciseMedia[] {
    return JSON.parse(json);
  }

  public static exerciseMediaToJson(value: ExerciseMedia[]): string {
    return JSON.stringify(value);
  }
}
