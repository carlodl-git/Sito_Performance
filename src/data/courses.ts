export type ScheduleRow = {
  start: string;
  end: string;
  /** Un corso per giorno, da lunedì a domenica. `null` = nessun corso. */
  courses: (string | null)[];
};

export const scheduleDays = [
  "Lun",
  "Mar",
  "Mer",
  "Gio",
  "Ven",
  "Sab",
  "Dom",
] as const;

/** Stagione 2025/2026 — autunno, inverno, primavera. */
export const schedule: ScheduleRow[] = [
  {
    start: "08:40",
    end: "09:30",
    courses: [
      "Full Body Workout",
      null,
      "Full Body Workout",
      null,
      "Core Stability & Upper Body",
      null,
      null,
    ],
  },
  {
    start: "13:10",
    end: "14:00",
    courses: [null, "Fit for Golf", null, "Fit for Golf", null, null, null],
  },
  {
    start: "17:30",
    end: "18:30",
    courses: [null, "Pilates", null, "Pilates", null, null, null],
  },
  {
    start: "18:15",
    end: "19:05",
    courses: [
      "Brucia Grassi",
      "Step and Sculpt",
      "Tonificazione Total Body",
      "Step and Sculpt",
      "Gambe Addome Glutei",
      null,
      null,
    ],
  },
  {
    start: "19:00",
    end: "20:00",
    courses: [null, "Hatha Yoga", null, "Hatha Yoga", null, null, null],
  },
  {
    start: "19:15",
    end: "20:05",
    courses: [
      "Tone up & Cardio",
      null,
      "Tone up & Cardio",
      null,
      null,
      null,
      null,
    ],
  },
  {
    start: "20:10",
    end: "21:00",
    courses: [null, "Pilates", null, "Pilates", null, null, null],
  },
];

/** Corsi specifici per il golf: segnalati nel calendario con un pallino. */
export const golfCourses = ["Fit for Golf"];
